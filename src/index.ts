import Ipaymu, { TBuyer, TCart, TCod, TUrl } from "./ipaymu";

const ipaymu = new Ipaymu();

function setIsProd(prod?: boolean) {
	ipaymu.isProd = prod;
}
function setVa(va?: string) {
	ipaymu.va = va;
}

function setApiKey(apiKey?: string) {
	ipaymu.apiKey = apiKey;
}

function setURL(url: TUrl) {
	ipaymu.url = url;
}

function setBuyer(buyer: TBuyer) {
	ipaymu.buyer = buyer;
}

function setCOD(cod: TCod) {
	ipaymu.cod = cod;
}

function setAmount(amount: string) {
	ipaymu.amount = amount;
}

function setComments(comments: string) {
	ipaymu.comments = comments;
}

function addCart(cart: TCart) {
    ipaymu.cart = cart
}

function historyTransaction(data: any): Promise<any> {
	return ipaymu.historyTransaction(data);
}

function checkBalance(): Promise<any> {
	return ipaymu.checkBalance();
}

function checkTransaction(id: string | number): Promise<any> {
	return ipaymu.checkTransaction(id);
}

function redirectPayment(paymentData?: any) {
	return ipaymu.redirectPayment(paymentData);
}

function directPayment(data?: any) {
	return ipaymu.directPayment(data);
}

function FAIL(msg: string) {
	throw new Error(msg);
}

export { setVa, setIsProd, setApiKey, setURL, setBuyer, setCOD, setAmount, setComments, addCart, historyTransaction, checkBalance, checkTransaction, redirectPayment, directPayment, FAIL };
