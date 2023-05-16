import { TBuyer, TCart, TCod, TUrl } from "./ipaymu";
declare function setVa(va?: string): void;
declare function setApiKey(apiKey?: string): void;
declare function setURL(url: TUrl): void;
declare function setBuyer(buyer: TBuyer): void;
declare function setCOD(cod: TCod): void;
declare function setAmount(amount: string): void;
declare function setComments(comments: string): void;
declare function addCart(cart: TCart): void;
declare function historyTransaction(data: any): Promise<any>;
declare function checkBalance(): Promise<any>;
declare function checkTransaction(id: string | number): Promise<any>;
declare function redirectPayment(paymentData?: any): Promise<any>;
declare function directPayment(data?: any): Promise<any>;
declare function FAIL(msg: string): void;
export { setVa, setApiKey, setURL, setBuyer, setCOD, setAmount, setComments, addCart, historyTransaction, checkBalance, checkTransaction, redirectPayment, directPayment, FAIL };
//# sourceMappingURL=index.d.ts.map