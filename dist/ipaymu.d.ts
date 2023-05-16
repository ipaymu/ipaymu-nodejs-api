import Curl from "./curl";
export declare type TUrl = {
    ureturn?: string;
    ucancel?: string;
    unotify?: string;
};
export declare type TBuyer = {
    name?: string;
    email?: string;
    phone?: string;
};
export declare type TCod = {
    pickupArea?: string;
    pickupAddress?: string;
    deliveryArea?: string;
    deliveryAddress?: string;
};
export declare type TCart = {
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
declare class Ipaymu extends Curl {
    #private;
    constructor(apiKey?: string | null, va?: string | null, prod?: boolean);
    set apiKey(apiKey: string);
    set va(va: string);
    set amount(amount: string);
    set expired(expired: number);
    set url(url: TUrl);
    set buyer(buyer: TBuyer);
    set cod(cod: TCod);
    set comments(comments: string);
    set cart(cart: TCart);
    historyTransaction(data: any): Promise<any>;
    checkBalance(): Promise<any>;
    checkTransaction(id: string | number): Promise<any>;
    redirectPayment(paymentData?: any): Promise<any>;
    directPayment(data?: any): Promise<any>;
}
export default Ipaymu;
//# sourceMappingURL=ipaymu.d.ts.map