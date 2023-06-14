"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Ipaymu_instances, _Ipaymu_apiKey, _Ipaymu_va, _Ipaymu_config, _Ipaymu_credentials, _Ipaymu_amount, _Ipaymu_expired, _Ipaymu_ureturn, _Ipaymu_ucancel, _Ipaymu_unotify, _Ipaymu_buyer, _Ipaymu_cod, _Ipaymu_comments, _Ipaymu_cart, _Ipaymu_buildCarts, _Ipaymu_Prod;
Object.defineProperty(exports, "__esModule", { value: true });
const curl_1 = require("./curl");
const config_1 = require("./config");
const ipaymu =  require("./ipaymu");

class Ipaymu extends curl_1.default {
    constructor(apiKey, va, prod) {
        super();
        _Ipaymu_instances.add(this);
        _Ipaymu_apiKey.set(this, void 0);
        _Ipaymu_va.set(this, void 0);
        _Ipaymu_config.set(this, void 0);
        _Ipaymu_credentials.set(this, void 0);
        _Ipaymu_amount.set(this, void 0);
        _Ipaymu_expired.set(this, 1);
        _Ipaymu_ureturn.set(this, void 0);
        _Ipaymu_ucancel.set(this, void 0);
        _Ipaymu_unotify.set(this, void 0);
        _Ipaymu_buyer.set(this, void 0);
        _Ipaymu_cod.set(this, void 0);
        _Ipaymu_comments.set(this, void 0);
        _Ipaymu_cart.set(this, void 0);
        _Ipaymu_Prod.set(this , void 0);
        __classPrivateFieldSet(this, _Ipaymu_apiKey, apiKey, "f");
        __classPrivateFieldSet(this, _Ipaymu_Prod, va, "f");
        __classPrivateFieldSet(this, _Ipaymu_va, va, "f");
        __classPrivateFieldSet(this, _Ipaymu_config, new config_1.default(prod || false), "f");
        __classPrivateFieldSet(this, _Ipaymu_credentials, {
            va: va,
            apiKey: apiKey,
        }, "f");
    }
    set apiKey(apiKey) {
        __classPrivateFieldSet(this, _Ipaymu_apiKey, apiKey, "f");
        __classPrivateFieldSet(this, _Ipaymu_credentials, {
            va: __classPrivateFieldGet(this, _Ipaymu_va, "f"),
            apiKey: apiKey,
        }, "f");
    }
    set va(va) {
        __classPrivateFieldSet(this, _Ipaymu_va, va, "f");
        __classPrivateFieldSet(this, _Ipaymu_credentials, {
            va: va,
            apiKey: __classPrivateFieldGet(this, _Ipaymu_apiKey, "f"),
        }, "f");
    }
    set amount(amount) {
        __classPrivateFieldSet(this, _Ipaymu_amount, amount, "f");
    }
    set expired(expired) {
        __classPrivateFieldSet(this, _Ipaymu_expired, expired, "f");
    }
    set prod(prod) {
        __classPrivateFieldSet(this, _Ipaymu_Prod, prod, "f");
    }
    set url(url) {
        __classPrivateFieldSet(this, _Ipaymu_ureturn, url.ureturn, "f");
        __classPrivateFieldSet(this, _Ipaymu_ucancel, url.ucancel, "f");
        __classPrivateFieldSet(this, _Ipaymu_unotify, url.unotify, "f");
    }
    set buyer(buyer) {
        __classPrivateFieldSet(this, _Ipaymu_buyer, buyer, "f");
    }
    set cod(cod) {
        __classPrivateFieldSet(this, _Ipaymu_cod, cod, "f");
    }
    set comments(comments) {
        __classPrivateFieldSet(this, _Ipaymu_comments, comments, "f");
    }
    set cart(cart) {
        __classPrivateFieldSet(this, _Ipaymu_cart, cart, "f");
    }
    // set isProd(prod) {
    //     __classPrivateFieldSet(this, _Ipaymu_cart, prod, "f");
    // }
    // get isProd(){
    //     return prod;
    // }
    async historyTransaction(data) {
        // return await this.request(__classPrivateFieldGet(this, _Ipaymu_config, "f").history, data, __classPrivateFieldGet(this, _Ipaymu_credentials, "f"));
        __classPrivateFieldSet(this, _Ipaymu_config, new config_1.default(__classPrivateFieldGet(this, _Ipaymu_Prod, "f")), "f");
        return await this.request(__classPrivateFieldGet(this, _Ipaymu_config, "f").history, {
            id : data.id , 
            status : data.status , 
            date : data.date , 
            startdate : data.startdate,
            enddate : data.enddate,
            page : data.page,
            type : data.type,
            orderBy : data.orderBy,
            order : data.order, 
            lang : data.lang, 
            limit : data.limit,
            bulkId : data.bulkId, 
            account : data.account, 
            lockStatus : data.lockStatus,
        }, __classPrivateFieldGet(this, _Ipaymu_credentials, "f"));
    }
    async checkBalance() {
        __classPrivateFieldSet(this, _Ipaymu_config, new config_1.default(__classPrivateFieldGet(this, _Ipaymu_Prod, "f")), "f");
        return await this.request(__classPrivateFieldGet(this, _Ipaymu_config, "f").balance, {
            account: __classPrivateFieldGet(this, _Ipaymu_va, "f"),
        }, __classPrivateFieldGet(this, _Ipaymu_credentials, "f"));
    }
    async checkPaymentMethods() {
        __classPrivateFieldSet(this, _Ipaymu_config, new config_1.default(__classPrivateFieldGet(this, _Ipaymu_Prod, "f")), "f");
        return await this.request(__classPrivateFieldGet(this, _Ipaymu_config, "f").paymentMethod, {
            va: __classPrivateFieldGet(this, _Ipaymu_va, "f"),
        }, __classPrivateFieldGet(this, _Ipaymu_credentials, "f"));
    }
    getProd() {
        return __classPrivateFieldGet(this, _Ipaymu_Prod, "f");
    }
    async checkTransaction(id) {
        __classPrivateFieldSet(this, _Ipaymu_config, new config_1.default(__classPrivateFieldGet(this, _Ipaymu_Prod, "f")), "f");
        return await this.request(__classPrivateFieldGet(this, _Ipaymu_config, "f").transaction, {
            transactionId: id,
        }, __classPrivateFieldGet(this, _Ipaymu_credentials, "f"));
    }
    async redirectPayment(data) {
        __classPrivateFieldSet(this, _Ipaymu_config, new config_1.default(__classPrivateFieldGet(this, _Ipaymu_Prod, "f")), "f");
        const cart = __classPrivateFieldGet(this, _Ipaymu_instances, "m", _Ipaymu_buildCarts).call(this);
        return await this.request(__classPrivateFieldGet(this, _Ipaymu_config, "f").redirectpayment, {
            account: __classPrivateFieldGet(this, _Ipaymu_va, "f"),
            product: cart.product,
            qty: cart.quantity,
            price: cart.price,
            description: cart.description,
            notifyUrl: __classPrivateFieldGet(this, _Ipaymu_unotify, "f"),
            // returnUrl: data?.returnUrl,
            // cancelUrl: data?.cancelUrl,
            referenceId: data?.referenceId,
            weight: cart.weight,
            dimension: cart.dimension,
            buyerName: data?.buyerName,
            buyerEmail: data?.buyerEmail,
            buyerPhone: data?.buyerPhone,
            pickupArea: data?.pickupArea,
            pickupAddress: data?.pickupAddress,
            paymentMethod: data?.paymentMethod,
            paymentChannel: data?.paymentChannel,
        }, __classPrivateFieldGet(this, _Ipaymu_credentials, "f"));
    }
    async directPayment(data) {
        __classPrivateFieldSet(this, _Ipaymu_config, new config_1.default(__classPrivateFieldGet(this, _Ipaymu_Prod, "f")), "f");
        const cart = __classPrivateFieldGet(this, _Ipaymu_instances, "m", _Ipaymu_buildCarts).call(this);
        return await this.request(__classPrivateFieldGet(this, _Ipaymu_config, "f").directpayment, {
            account: __classPrivateFieldGet(this, _Ipaymu_va, "f"),
            name: data?.name,
            email: data?.email,
            phone: data?.phone,
            amount: data?.amount,
            paymentMethod: data?.paymentMethod,
            paymentChannel: data?.paymentChannel,
            notifyUrl: __classPrivateFieldGet(this, _Ipaymu_unotify, "f"),
            description: cart.description,
            referenceId: data?.referenceId,
            product: cart.product,
            qty: cart.quantity,
            price: cart.price,
            weight: cart.weight,
            length: cart.length,
            width: cart.width,
            height: cart.height,
            deliveryArea: __classPrivateFieldGet(this, _Ipaymu_cod, "f")?.deliveryArea,
            deliveryAddress: __classPrivateFieldGet(this, _Ipaymu_cod, "f")?.deliveryAddress,
            pickupArea: __classPrivateFieldGet(this, _Ipaymu_cod, "f")?.pickupArea,
            pickupAddress: __classPrivateFieldGet(this, _Ipaymu_cod, "f")?.pickupAddress,
            expired: data?.expired || __classPrivateFieldGet(this, _Ipaymu_expired, "f"),
            expiredType: data?.expired || 'days'
        }, __classPrivateFieldGet(this, _Ipaymu_credentials, "f"));
    }
}
_Ipaymu_apiKey = new WeakMap(), _Ipaymu_va = new WeakMap(), _Ipaymu_config = new WeakMap(), _Ipaymu_credentials = new WeakMap(), _Ipaymu_amount = new WeakMap(), _Ipaymu_expired = new WeakMap(), _Ipaymu_ureturn = new WeakMap(), _Ipaymu_ucancel = new WeakMap(), _Ipaymu_unotify = new WeakMap(), _Ipaymu_buyer = new WeakMap(), _Ipaymu_cod = new WeakMap(), _Ipaymu_comments = new WeakMap(), _Ipaymu_cart = new WeakMap(), _Ipaymu_instances = new WeakSet(), _Ipaymu_Prod = new WeakMap(), _Ipaymu_buildCarts = function _Ipaymu_buildCarts(){
    let dimension = [];
    if (__classPrivateFieldGet(this, _Ipaymu_cart, "f").hasOwnProperty("product")) {
        __classPrivateFieldGet(this, _Ipaymu_cart, "f").product = __classPrivateFieldGet(this, _Ipaymu_cart, "f").product.map((item) => item.trim());
    }
    if (__classPrivateFieldGet(this, _Ipaymu_cart, "f").hasOwnProperty("quantity")) {
        __classPrivateFieldGet(this, _Ipaymu_cart, "f").quantity = __classPrivateFieldGet(this, _Ipaymu_cart, "f").quantity.map((item) => item.trim());
    }
    if (__classPrivateFieldGet(this, _Ipaymu_cart, "f").hasOwnProperty("price")) {
        __classPrivateFieldGet(this, _Ipaymu_cart, "f").price = __classPrivateFieldGet(this, _Ipaymu_cart, "f").price.map((item) => item.trim());
    }
    if (__classPrivateFieldGet(this, _Ipaymu_cart, "f").hasOwnProperty("description")) {
        __classPrivateFieldGet(this, _Ipaymu_cart, "f").description = __classPrivateFieldGet(this, _Ipaymu_cart, "f").description.map((item) => item.trim());
    }
    if (__classPrivateFieldGet(this, _Ipaymu_cart, "f").hasOwnProperty("length") && __classPrivateFieldGet(this, _Ipaymu_cart, "f").hasOwnProperty("width") && __classPrivateFieldGet(this, _Ipaymu_cart, "f").hasOwnProperty("height")) {
        __classPrivateFieldGet(this, _Ipaymu_cart, "f").length.forEach((length, key) => {
            let width = __classPrivateFieldGet(this, _Ipaymu_cart, "f").width[key] || 0;
            let height = __classPrivateFieldGet(this, _Ipaymu_cart, "f").weight[key] || 0;
            dimension[key] = length + ":" + width + ":" + height;
        });
    }
    let params = {
        product: __classPrivateFieldGet(this, _Ipaymu_cart, "f").product,
        price: __classPrivateFieldGet(this, _Ipaymu_cart, "f").price,
        quantity: __classPrivateFieldGet(this, _Ipaymu_cart, "f").quantity,
        description: __classPrivateFieldGet(this, _Ipaymu_cart, "f").description,
        weight: __classPrivateFieldGet(this, _Ipaymu_cart, "f").weight,
        dimension: dimension,
        length: __classPrivateFieldGet(this, _Ipaymu_cart, "f").length,
        width: __classPrivateFieldGet(this, _Ipaymu_cart, "f").width,
        height: __classPrivateFieldGet(this, _Ipaymu_cart, "f").height,
    };
    return params;
};
exports.default = Ipaymu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXBheW11LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2lwYXltdS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGlDQUEwQjtBQUMxQixxQ0FBOEI7QUFzQzlCLE1BQU0sTUFBTyxTQUFRLGNBQUk7SUFleEIsWUFBWSxNQUFzQixFQUFFLEVBQWtCLEVBQUUsSUFBYztRQUNyRSxLQUFLLEVBQUUsQ0FBQzs7UUFmVCxpQ0FBd0I7UUFDeEIsNkJBQW9CO1FBQ3BCLGlDQUFnQjtRQUNoQixzQ0FBMEI7UUFDMUIsaUNBQWlCO1FBQ2pCLDBCQUFtQixDQUFDLEVBQUM7UUFDckIsa0NBQWtCO1FBQ2xCLGtDQUFrQjtRQUNsQixrQ0FBa0I7UUFDbEIsZ0NBQWdCO1FBQ2hCLDhCQUFZO1FBQ1osbUNBQW1CO1FBQ25CLCtCQUFhO1FBS1osdUJBQUEsSUFBSSxrQkFBVyxNQUFNLE1BQUEsQ0FBQztRQUN0Qix1QkFBQSxJQUFJLGNBQU8sRUFBRSxNQUFBLENBQUM7UUFDZCx1QkFBQSxJQUFJLGtCQUFXLElBQUksZ0JBQU0sQ0FBQyxJQUFJLElBQUksS0FBSyxDQUFDLE1BQUEsQ0FBQztRQUV6Qyx1QkFBQSxJQUFJLHVCQUFnQjtZQUNuQixFQUFFLEVBQUUsRUFBRTtZQUNOLE1BQU0sRUFBRSxNQUFNO1NBQ2QsTUFBQSxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUksTUFBTSxDQUFDLE1BQWM7UUFDeEIsdUJBQUEsSUFBSSxrQkFBVyxNQUFNLE1BQUEsQ0FBQztRQUV0Qix1QkFBQSxJQUFJLHVCQUFnQjtZQUNuQixFQUFFLEVBQUUsdUJBQUEsSUFBSSxrQkFBSTtZQUNaLE1BQU0sRUFBRSxNQUFNO1NBQ2QsTUFBQSxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQUksRUFBRSxDQUFDLEVBQVU7UUFDaEIsdUJBQUEsSUFBSSxjQUFPLEVBQUUsTUFBQSxDQUFDO1FBRWQsdUJBQUEsSUFBSSx1QkFBZ0I7WUFDbkIsRUFBRSxFQUFF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QUMsT0FBTztRQUMzQixLQUFLLEVBQUUsdUJBQUEsSUFBSSxvQkFBTSxDQUFDLEtBQUs7UUFDdkIsUUFBUSxFQUFFLHVCQUFBLElBQUksb0JBQU0sQ0FBQyxRQUFRO1FBQzdCLFdBQVcsRUFBRSx1QkFBQSxJQUFJLG9CQUFNLENBQUMsV0FBVztRQUNuQyxNQUFNLEVBQUUsdUJBQUEsSUFBSSxvQkFBTSxDQUFDLE1BQU07UUFDekIsU0FBUyxFQUFFLFNBQVM7UUFDcEIsTUFBTSxFQUFFLHVCQUFBLElBQUksb0JBQU0sQ0FBQyxNQUFNO1FBQ3pCLEtBQUssRUFBRSx1QkFBQSxJQUFJLG9CQUFNLENBQUMsS0FBSztRQUN2QixNQUFNLEVBQUUsdUJBQUEsSUFBSSxvQkFBTSxDQUFDLE1BQU07S0FDekIsQ0FBQztJQUVGLE9BQU8sTUFBTSxDQUFDO0FBQ2YsQ0FBQztBQTJGRixrQkFBZSxNQUFNLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ3VybCBmcm9tIFwiLi9jdXJsXCI7XG5pbXBvcnQgQ29uZmlnIGZyb20gXCIuL2NvbmZpZ1wiO1xuXG5leHBvcnQgdHlwZSBUVXJsID0ge1xuXHR1cmV0dXJuPzogc3RyaW5nO1xuXHR1Y2FuY2VsPzogc3RyaW5nO1xuXHR1bm90aWZ5Pzogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgVEJ1eWVyID0ge1xuXHRuYW1lPzogc3RyaW5nO1xuXHRlbWFpbD86IHN0cmluZztcblx0cGhvbmU/OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBUQ29kID0ge1xuXHRwaWNrdXBBcmVhPzogc3RyaW5nO1xuXHRwaWNrdXBBZGRyZXNzPzogc3RyaW5nO1xuXHRkZWxpdmVyeUFyZWE/OiBzdHJpbmc7XG5cdGRlbGl2ZXJ5QWRkcmVzcz86IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFRDYXJ0ID0ge1xuXHRwcm9kdWN0PzogQXJyYXk8c3RyaW5nPjtcblx0cXVhbnRpdHk/OiBBcnJheTxzdHJpbmc+O1xuXHRwcmljZT86IEFycmF5PHN0cmluZz47XG5cdGRlc2NyaXB0aW9uPzogQXJyYXk8c3RyaW5nPjtcblx0d2VpZ2h0PzogQXJyYXk8bnVtYmVyPjtcblx0aGVpZ2h0PzogQXJyYXk8bnVtYmVyPjtcblx0bGVuZ3RoPzogQXJyYXk8bnVtYmVyPjtcblx0d2lkdGg/OiBBcnJheTxudW1iZXI+O1xuICAgIGRpbWVuc2lvbj86IEFycmF5PHN0cmluZz47XG59O1xuXG50eXBlIFRDcmVkZW50aWFsID0ge1xuXHR2YT86IHN0cmluZyB8IG51bGw7XG5cdGFwaUtleT86IHN0cmluZyB8IG51bGw7XG59O1xuXG5jbGFzcyBJcGF5bXUgZXh0ZW5kcyBDdXJsIHtcblx0I2FwaUtleT86IHN0cmluZyB8IG51bGw7XG5cdCN2YT86IHN0cmluZyB8IG51bGw7XG5cdCNjb25maWc6IENvbmZpZztcblx0I2NyZWRlbnRpYWxzOiBUQ3JlZGVudGlhbDtcblx0I2Ftb3VudD86IHN0cmluZztcblx0I2V4cGlyZWQ6IG51bWJlciA9IDE7XG5cdCN1cmV0dXJuPzogc3RyaW5nO1xuXHQjdWNhbmNlbD86IHN0cmluZztcblx0I3Vub3RpZnk/OiBzdHJpbmc7XG5cdCNidXllcj86IFRCdXllcjtcblx0I2NvZD86IFRDb2Q7XG5cdCNjb21tZW50cz86IHN0cmluZztcblx0I2NhcnQ6IFRDYXJ0O1xuXG5cdGNvbnN0cnVjdG9yKGFwaUtleT86IHN0cmluZyB8IG51bGwsIHZhPzogc3RyaW5nIHwgbnVsbCwgcHJvZD86IGJvb2xlYW4pIHtcblx0XHRzdXBlcigpO1xuXG5cdFx0dGhpcy4jYXBpS2V5ID0gYXBpS2V5O1xuXHRcdHRoaXMuI3ZhID0gdmE7XG5cdFx0dGhpcy4jY29uZmlnID0gbmV3IENvbmZpZyhwcm9kIHx8IGZhbHNlKTtcblxuXHRcdHRoaXMuI2NyZWRlbnRpYWxzID0ge1xuXHRcdFx0dmE6IHZhLFxuXHRcdFx0YXBpS2V5OiBhcGlLZXksXG5cdFx0fTtcblx0fVxuXG5cdHNldCBhcGlLZXkoYXBpS2V5OiBzdHJpbmcpIHtcblx0XHR0aGlzLiNhcGlLZXkgPSBhcGlLZXk7XG5cblx0XHR0aGlzLiNjcmVkZW50aWFscyA9IHtcblx0XHRcdHZhOiB0aGlzLiN2YSxcblx0XHRcdGFwaUtleTogYXBpS2V5LFxuXHRcdH07XG5cdH1cblxuXHRzZXQgdmEodmE6IHN0cmluZykge1xuXHRcdHRoaXMuI3ZhID0gdmE7XG5cblx0XHR0aGlzLiNjcmVkZW50aWFscyA9IHtcblx0XHRcdHZhOiB2YSxcblx0XHRcdGFwaUtleTogdGhpcy4jYXBpS2V5LFxuXHRcdH07XG5cdH1cblxuXHRzZXQgYW1vdW50KGFtb3VudDogc3RyaW5nKSB7XG5cdFx0dGhpcy4jYW1vdW50ID0gYW1vdW50O1xuXHR9XG5cblx0c2V0IGV4cGlyZWQoZXhwaXJlZDogbnVtYmVyKSB7XG5cdFx0dGhpcy4jZXhwaXJlZCA9IGV4cGlyZWQ7XG5cdH1cblxuXHRzZXQgdXJsKHVybDogVFVybCkge1xuXHRcdHRoaXMuI3VyZXR1cm4gPSB1cmwudXJldHVybjtcblx0XHR0aGlzLiN1Y2FuY2VsID0gdXJsLnVjYW5jZWw7XG5cdFx0dGhpcy4jdW5vdGlmeSA9IHVybC51bm90aWZ5O1xuXHR9XG5cblx0c2V0IGJ1eWVyKGJ1eWVyOiBUQnV5ZXIpIHtcblx0XHR0aGlzLiNidXllciA9IGJ1eWVyO1xuXHR9XG5cblx0c2V0IGNvZChjb2Q6IFRDb2QpIHtcblx0XHR0aGlzLiNjb2QgPSBjb2Q7XG5cdH1cblxuXHRzZXQgY29tbWVudHMoY29tbWVudHM6IHN0cmluZykge1xuXHRcdHRoaXMuI2NvbW1lbnRzID0gY29tbWVudHM7XG5cdH1cblxuXHRzZXQgY2FydChjYXJ0OiBUQ2FydCkge1xuXHRcdHRoaXMuI2NhcnQgPSBjYXJ0O1xuXHR9XG5cblx0I2J1aWxkQ2FydHMoKTogVENhcnQge1xuXHRcdGxldCBkaW1lbnNpb246IEFycmF5PHN0cmluZz4gPSBbXTtcblxuXHRcdGlmICh0aGlzLiNjYXJ0IS5oYXNPd25Qcm9wZXJ0eShcInByb2R1Y3RcIikpIHtcblx0XHRcdHRoaXMuI2NhcnQucHJvZHVjdCA9IHRoaXMuI2NhcnQucHJvZHVjdC5tYXAoKGl0ZW0pID0+IGl0ZW0udHJpbSgpKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy4jY2FydCEuaGFzT3duUHJvcGVydHkoXCJxdWFudGl0eVwiKSkge1xuXHRcdFx0dGhpcy4jY2FydC5xdWFudGl0eSA9IHRoaXMuI2NhcnQucXVhbnRpdHkubWFwKChpdGVtKSA9PiBpdGVtLnRyaW0oKSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuI2NhcnQhLmhhc093blByb3BlcnR5KFwicHJpY2VcIikpIHtcblx0XHRcdHRoaXMuI2NhcnQucHJpY2UgPSB0aGlzLiNjYXJ0LnByaWNlLm1hcCgoaXRlbSkgPT4gaXRlbS50cmltKCkpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLiNjYXJ0IS5oYXNPd25Qcm9wZXJ0eShcImRlc2NyaXB0aW9uXCIpKSB7XG5cdFx0XHR0aGlzLiNjYXJ0LmRlc2NyaXB0aW9uID0gdGhpcy4jY2FydC5kZXNjcmlwdGlvbi5tYXAoKGl0ZW0pID0+IGl0ZW0udHJpbSgpKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy4jY2FydCEuaGFzT3duUHJvcGVydHkoXCJsZW5ndGhcIikgJiYgdGhpcy4jY2FydCEuaGFzT3duUHJvcGVydHkoXCJ3aWR0aFwiKSAmJiB0aGlzLiNjYXJ0IS5oYXNPd25Qcm9wZXJ0eShcImhlaWdodFwiKSkge1xuXHRcdFx0dGhpcy4jY2FydC5sZW5ndGguZm9yRWFjaCgobGVuZ3RoLCBrZXkpID0+IHtcblx0XHRcdFx0bGV0IHdpZHRoID0gdGhpcy4jY2FydC53aWR0aFtrZXldIHx8IDA7XG5cdFx0XHRcdGxldCBoZWlnaHQgPSB0aGlzLiNjYXJ0LndlaWdodFtrZXldIHx8IDA7XG5cblx0XHRcdFx0ZGltZW5zaW9uW2tleV0gPSBsZW5ndGggKyBcIjpcIiArIHdpZHRoICsgXCI6XCIgKyBoZWlnaHQ7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRsZXQgcGFyYW1zID0ge1xuXHRcdFx0cHJvZHVjdDogdGhpcy4jY2FydC5wcm9kdWN0LFxuXHRcdFx0cHJpY2U6IHRoaXMuI2NhcnQucHJpY2UsXG5cdFx0XHRxdWFudGl0eTogdGhpcy4jY2FydC5xdWFudGl0eSxcblx0XHRcdGRlc2NyaXB0aW9uOiB0aGlzLiNjYXJ0LmRlc2NyaXB0aW9uLFxuXHRcdFx0d2VpZ2h0OiB0aGlzLiNjYXJ0LndlaWdodCxcblx0XHRcdGRpbWVuc2lvbjogZGltZW5zaW9uLFxuXHRcdFx0bGVuZ3RoOiB0aGlzLiNjYXJ0Lmxlbmd0aCxcblx0XHRcdHdpZHRoOiB0aGlzLiNjYXJ0LndpZHRoLFxuXHRcdFx0aGVpZ2h0OiB0aGlzLiNjYXJ0LmhlaWdodCxcblx0XHR9O1xuXG5cdFx0cmV0dXJuIHBhcmFtcztcblx0fVxuXG5cdHB1YmxpYyBhc3luYyBoaXN0b3J5VHJhbnNhY3Rpb24oZGF0YTogYW55KTogUHJvbWlzZTxhbnk+IHtcblx0XHRyZXR1cm4gYXdhaXQgdGhpcy5yZXF1ZXN0KHRoaXMuI2NvbmZpZy5oaXN0b3J5LCBkYXRhLCB0aGlzLiNjcmVkZW50aWFscyk7XG5cdH1cblxuXHRwdWJsaWMgYXN5bmMgY2hlY2tCYWxhbmNlKCk6IFByb21pc2U8YW55PiB7XG5cdFx0cmV0dXJuIGF3YWl0IHRoaXMucmVxdWVzdChcblx0XHRcdHRoaXMuI2NvbmZpZy5iYWxhbmNlLFxuXHRcdFx0e1xuXHRcdFx0XHRhY2NvdW50OiB0aGlzLiN2YSxcblx0XHRcdH0sXG5cdFx0XHR0aGlzLiNjcmVkZW50aWFsc1xuXHRcdCk7XG5cdH1cbiAgICBcbiAgICBwdWJsaWMgYXN5bmMgY2hlY2tUcmFuc2FjdGlvbihpZDogc3RyaW5nIHwgbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMucmVxdWVzdChcblx0XHRcdHRoaXMuI2NvbmZpZy50cmFuc2FjdGlvbixcblx0XHRcdHtcblx0XHRcdFx0dHJhbnNhY3Rpb25JZDogaWQsXG5cdFx0XHR9LFxuXHRcdFx0dGhpcy4jY3JlZGVudGlhbHNcblx0XHQpO1xuICAgIH1cbiAgICBcbiAgICBwdWJsaWMgYXN5bmMgcmVkaXJlY3RQYXltZW50KHBheW1lbnREYXRhPzogYW55KSB7XG4gICAgICAgIGNvbnN0IGNhcnQgPSB0aGlzLiNidWlsZENhcnRzKCk7XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gYXdhaXQgdGhpcy5yZXF1ZXN0KFxuICAgICAgICAgICAgdGhpcy4jY29uZmlnLnJlZGlyZWN0cGF5bWVudCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50OiB0aGlzLiN2YSxcbiAgICAgICAgICAgICAgICBwcm9kdWN0OiBjYXJ0LnByb2R1Y3QsXG4gICAgICAgICAgICAgICAgcXR5OiBjYXJ0LnF1YW50aXR5LFxuICAgICAgICAgICAgICAgIHByaWNlOiBjYXJ0LnByaWNlLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBjYXJ0LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIG5vdGlmeVVybDogdGhpcy4jdW5vdGlmeSxcbiAgICAgICAgICAgICAgICByZXR1cm5Vcmw6IHRoaXMuI3VyZXR1cm4sXG4gICAgICAgICAgICAgICAgY2FuY2VsVXJsOiB0aGlzLiN1Y2FuY2VsLFxuICAgICAgICAgICAgICAgIHdlaWdodDogY2FydC53ZWlnaHQsXG4gICAgICAgICAgICAgICAgZGltZW5zaW9uOiBjYXJ0LmRpbWVuc2lvbixcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLiNidXllcj8ubmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy4jYnV5ZXI/LmVtYWlsLFxuICAgICAgICAgICAgICAgIHBob25lOiB0aGlzLiNidXllcj8ucGhvbmUsXG4gICAgICAgICAgICAgICAgcGlja3VwQXJlYTogdGhpcy4jY29kPy5waWNrdXBBcmVhLFxuICAgICAgICAgICAgICAgIHBpY2t1cEFkZHJlc3M6IHRoaXMuI2NvZD8ucGlja3VwQWRkcmVzcyxcbiAgICAgICAgICAgICAgICBidXllck5hbWU6IHRoaXMuI2J1eWVyPy5uYW1lLFxuICAgICAgICAgICAgICAgIGJ1eWVyRW1haWw6IHRoaXMuI2J1eWVyPy5lbWFpbCxcbiAgICAgICAgICAgICAgICBidXllclBob25lOiB0aGlzLiNidXllcj8ucGhvbmUsXG4gICAgICAgICAgICAgICAgcmVmZXJlbmNlSWQ6IHBheW1lbnREYXRhPy5yZWZlcmVuY2VJZCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLiNjcmVkZW50aWFsc1xuICAgICAgICApXG4gICAgfVxuICAgIFxuICAgIHB1YmxpYyBhc3luYyBkaXJlY3RQYXltZW50KGRhdGE/OiBhbnkpIHtcbiAgICAgICAgY29uc3QgY2FydCA9IHRoaXMuI2J1aWxkQ2FydHMoKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnJlcXVlc3QoXG4gICAgICAgICAgICB0aGlzLiNjb25maWcuZGlyZWN0cGF5bWVudCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY2NvdW50OiB0aGlzLiN2YSxcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLiNidXllcj8ubmFtZSxcbiAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy4jYnV5ZXI/LmVtYWlsLFxuICAgICAgICAgICAgICAgIHBob25lOiB0aGlzLiNidXllcj8ucGhvbmUsXG4gICAgICAgICAgICAgICAgYW1vdW50OiB0aGlzLiNhbW91bnQsXG4gICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZDogZGF0YT8ucGF5bWVudE1ldGhvZCxcbiAgICAgICAgICAgICAgICBwYXltZW50Q2hhbm5lbDogZGF0YT8ucGF5bWVudENoYW5uZWwsXG4gICAgICAgICAgICAgICAgbm90aWZ5VXJsOiB0aGlzLiN1bm90aWZ5LFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBjYXJ0LmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZUlkOiBkYXRhPy5yZWZlcmVuY2VJZCxcbiAgICAgICAgICAgICAgICBwcm9kdWN0OiBjYXJ0LnByb2R1Y3QsXG4gICAgICAgICAgICAgICAgcXR5OiBjYXJ0LnF1YW50aXR5LFxuICAgICAgICAgICAgICAgIHByaWNlOiBjYXJ0LnByaWNlLFxuICAgICAgICAgICAgICAgIHdlaWdodDogY2FydC53ZWlnaHQsXG4gICAgICAgICAgICAgICAgbGVuZ3RoOiBjYXJ0Lmxlbmd0aCxcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FydC53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhcnQuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIGRlbGl2ZXJ5QXJlYTogdGhpcy4jY29kPy5kZWxpdmVyeUFyZWEsXG4gICAgICAgICAgICAgICAgZGVsaXZlcnlBZGRyZXNzOiB0aGlzLiNjb2Q/LmRlbGl2ZXJ5QWRkcmVzcyxcbiAgICAgICAgICAgICAgICBwaWNrdXBBcmVhOiB0aGlzLiNjb2Q/LnBpY2t1cEFyZWEsXG4gICAgICAgICAgICAgICAgcGlja3VwQWRkcmVzczogdGhpcy4jY29kPy5waWNrdXBBZGRyZXNzLFxuICAgICAgICAgICAgICAgIGV4cGlyZWQ6IGRhdGE/LmV4cGlyZWQgfHwgdGhpcy4jZXhwaXJlZCxcbiAgICAgICAgICAgICAgICBleHBpcmVkVHlwZTogZGF0YT8uZXhwaXJlZCB8fCAnZGF5cydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0aGlzLiNjcmVkZW50aWFsc1xuICAgICAgICApXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBJcGF5bXUiXX0=