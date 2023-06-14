import axios, { AxiosResponse } from "axios";
import { createHash, createHmac } from "crypto";

class Curl {
	#genSignature(data: any, credentials: any): string {
		let body = JSON.stringify(data);
		let reqBody = createHash("sha256").update(body).digest("hex").toLowerCase();
		let secret = credentials.apiKey;
		let va = credentials.va;
		let string_to_sign = `POST:${va}:${reqBody}:${secret}`;

		let hmac = createHmac("sha256", secret);
		const signature = hmac.update(Buffer.from(string_to_sign, "utf-8")).digest("hex");

		return signature;
	}

	#getTimestamp(date?: Date): string {
		let dateObj: Date = date || new Date();

		let year = dateObj.getFullYear().toString();
		let month = dateObj.getMonth() < 9 ? "0" + (dateObj.getMonth() + 1) : (dateObj.getMonth() + 1).toString();
		let day = dateObj.getDate() < 10 ? "0" + dateObj.getDate() : dateObj.getDate().toString();
		let hour = dateObj.getHours() < 10 ? "0" + dateObj.getHours() : dateObj.getHours().toString();
		let minute = dateObj.getMinutes() < 10 ? "0" + dateObj.getMinutes() : dateObj.getMinutes().toString();
		let second = dateObj.getSeconds() < 10 ? "0" + dateObj.getSeconds() : dateObj.getSeconds().toString();

		return year + month + day + hour + minute + second;
	}

	request(config: string, params: any, credentials: any): any {
		if (credentials.va === undefined) {
			throw new Error("VA Not Found");
		}

		if (credentials.apiKey === undefined) {
			throw new Error("Api Key Not Found");
		}

		const signature: string = this.#genSignature(params, credentials);
		const timestamp: string = this.#getTimestamp();

		return axios
			.post(config, JSON.stringify(params), {
				headers: {
					"Content-Type": "application/json",
					va: credentials.va,
					signature: signature,
					timestamp: timestamp,
				},
			})
			.then((res) => res.data)
			.catch((err) => err.response.data);
	}
}

export default Curl;
