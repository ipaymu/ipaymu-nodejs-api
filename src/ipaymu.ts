import Curl from "./curl";
import Config from "./config";

export type TUrl = {
	ureturn?: string;
	ucancel?: string;
	unotify?: string;
};

export type TBuyer = {
	name?: string;
	email?: string;
	phone?: string;
};

export type TCod = {
	pickupArea?: string;
	pickupAddress?: string;
	deliveryArea?: string;
	deliveryAddress?: string;
};

export type TCart = {
	product?: Array<string>;
	quantity?: Array<string>;
	price?: Array<string>;
	description?: Array<string>;
	weight?: Array<number>;
	height?: Array<number>;
	length?: Array<number>;
	width?: Array<number>;
    dimension?: Array<string>;
};

type TCredential = {
	va?: string | null;
	apiKey?: string | null;
};

class Ipaymu extends Curl {
	#apiKey?: string | null;
	#va?: string | null;
	#isProd?: boolean | false;
	#config: Config;
	#credentials: TCredential;
	#amount?: string;
	#expired: number = 1;
	#ureturn?: string;
	#ucancel?: string;
	#unotify?: string;
	#buyer?: TBuyer;
	#cod?: TCod;
	#comments?: string;
	#cart: TCart;

	constructor(apiKey?: string | null, va?: string | null, prod?: boolean) {
		super();

		this.#apiKey = apiKey;
		this.#va = va;
		this.#config = new Config(prod || false);

		this.#credentials = {
			va: va,
			apiKey: apiKey,
		};
	}

	set apiKey(apiKey: string) {
		this.#apiKey = apiKey;

		this.#credentials = {
			va: this.#va,
			apiKey: apiKey,
		};
	}

	set isProd(isProd: boolean) {
		this.#isProd = isProd;
	}

	set va(va: string) {
		this.#va = va;

		this.#credentials = {
			va: va,
			apiKey: this.#apiKey,
		};
	}

	set amount(amount: string) {
		this.#amount = amount;
	}

	set expired(expired: number) {
		this.#expired = expired;
	}

	set url(url: TUrl) {
		this.#ureturn = url.ureturn;
		this.#ucancel = url.ucancel;
		this.#unotify = url.unotify;
	}

	set buyer(buyer: TBuyer) {
		this.#buyer = buyer;
	}

	set cod(cod: TCod) {
		this.#cod = cod;
	}

	set comments(comments: string) {
		this.#comments = comments;
	}

	set cart(cart: TCart) {
		this.#cart = cart;
	}

	#buildCarts(): TCart {
		let dimension: Array<string> = [];

		if (this.#cart!.hasOwnProperty("product")) {
			this.#cart.product = this.#cart.product.map((item) => item.trim());
		}

		if (this.#cart!.hasOwnProperty("quantity")) {
			this.#cart.quantity = this.#cart.quantity.map((item) => item.trim());
		}

		if (this.#cart!.hasOwnProperty("price")) {
			this.#cart.price = this.#cart.price.map((item) => item.trim());
		}

		if (this.#cart!.hasOwnProperty("description")) {
			this.#cart.description = this.#cart.description.map((item) => item.trim());
		}

		if (this.#cart!.hasOwnProperty("length") && this.#cart!.hasOwnProperty("width") && this.#cart!.hasOwnProperty("height")) {
			this.#cart.length.forEach((length, key) => {
				let width = this.#cart.width[key] || 0;
				let height = this.#cart.weight[key] || 0;

				dimension[key] = length + ":" + width + ":" + height;
			});
		}

		let params = {
			product: this.#cart.product,
			price: this.#cart.price,
			quantity: this.#cart.quantity,
			description: this.#cart.description,
			weight: this.#cart.weight,
			dimension: dimension,
			length: this.#cart.length,
			width: this.#cart.width,
			height: this.#cart.height,
		};

		return params;
	}

	public async historyTransaction(data: any): Promise<any> {
		return await this.request(this.#config.history, data, this.#credentials);
	}

	public async checkBalance(): Promise<any> {
		return await this.request(
			this.#config.balance,
			{
				account: this.#va,
			},
			this.#credentials
		);
	}
    
    public async checkTransaction(id: string | number): Promise<any> {
        return await this.request(
			this.#config.transaction,
			{
				transactionId: id,
			},
			this.#credentials
		);
    }
    
    public async redirectPayment(paymentData?: any) {
        const cart = this.#buildCarts();
        
        return await this.request(
            this.#config.redirectpayment,
            {
                account: this.#va,
                product: cart.product,
                qty: cart.quantity,
                price: cart.price,
                description: cart.description,
                notifyUrl: this.#unotify,
                returnUrl: this.#ureturn,
                cancelUrl: this.#ucancel,
                weight: cart.weight,
                dimension: cart.dimension,
                name: this.#buyer?.name,
                email: this.#buyer?.email,
                phone: this.#buyer?.phone,
                pickupArea: this.#cod?.pickupArea,
                pickupAddress: this.#cod?.pickupAddress,
                buyerName: this.#buyer?.name,
                buyerEmail: this.#buyer?.email,
                buyerPhone: this.#buyer?.phone,
                referenceId: paymentData?.referenceId,
            },
            this.#credentials
        )
    }
    
    public async directPayment(data?: any) {
        const cart = this.#buildCarts();
		
        return await this.request(
            this.#config.directpayment,
            {
                account: this.#va,
                name: this.#buyer?.name,
                email: this.#buyer?.email,
                phone: this.#buyer?.phone,
                amount: this.#amount,
                paymentMethod: data?.paymentMethod,
                paymentChannel: data?.paymentChannel,
                notifyUrl: this.#unotify,
                description: cart.description,
                referenceId: data?.referenceId,
                product: cart.product,
                qty: cart.quantity,
                price: cart.price,
                weight: cart.weight,
                length: cart.length,
                width: cart.width,
                height: cart.height,
                deliveryArea: this.#cod?.deliveryArea,
                deliveryAddress: this.#cod?.deliveryAddress,
                pickupArea: this.#cod?.pickupArea,
                pickupAddress: this.#cod?.pickupAddress,
                expired: data?.expired || this.#expired,
                expiredType: data?.expired || 'days'
            },
            this.#credentials
        )
    }
}

export default Ipaymu