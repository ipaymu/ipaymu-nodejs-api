class Config {
	readonly balance: string;
	readonly transaction: string;
	readonly history: string;
	readonly banklist: string;
	readonly redirectpayment: string;
	readonly directpayment: string;
	readonly codarea: string;
	readonly codrate: string;
	readonly codpickup: string;
	readonly codpayment: string;
	readonly codawb: string;
	readonly codtracking: string;
	readonly codhistory: string;

	constructor(prod: boolean) {
		let base = "https://sandbox.ipaymu.com/api/v2";

		if (prod) {
			base = "https://my.ipaymu.com/api/v2";
		}

		/**
		 * General API
		 **/
		this.balance = base + "/balance";
		this.transaction = base + "/transaction";
		this.history = base + "/history";
		this.banklist = base + "/banklist";

		/**
		 * Payment API
		 **/
		this.redirectpayment = base + "/payment";
		this.directpayment = base + "/payment/direct";

		/**
		 * COD Payment
		 **/
		this.codarea = base + "/cod/getarea";
		this.codrate = base + "/cod/getrate";
		this.codpickup = base + "/cod/pickup";
		this.codpayment = base + "/payment/cod";

		/**
		 * COD Tracking
		 **/
		this.codawb = base + "/cod/getawb";
		this.codtracking = base + "/cod/tracking";
		this.codhistory = base + "/cod/history";
	}
}

export default Config