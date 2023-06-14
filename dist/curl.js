"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Curl_instances, _Curl_genSignature, _Curl_getTimestamp;
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const crypto_1 = require("crypto");
class Curl {
    constructor() {
        _Curl_instances.add(this);
    }
    request(config, params, credentials) {
        if (credentials.va === undefined) {
            throw new Error("VA Not Found");
        }
        if (credentials.apiKey === undefined) {
            throw new Error("Api Key Not Found");
        }
        const signature = __classPrivateFieldGet(this, _Curl_instances, "m", _Curl_genSignature).call(this, params, credentials);
        const timestamp = __classPrivateFieldGet(this, _Curl_instances, "m", _Curl_getTimestamp).call(this);
        return axios_1.default
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
_Curl_instances = new WeakSet(), _Curl_genSignature = function _Curl_genSignature(data, credentials) {
    let body = JSON.stringify(data);
    let reqBody = (0, crypto_1.createHash)("sha256").update(body).digest("hex").toLowerCase();
    let secret = credentials.apiKey;
    let va = credentials.va;
    let string_to_sign = `POST:${va}:${reqBody}:${secret}`;
    let hmac = (0, crypto_1.createHmac)("sha256", secret);
    const signature = hmac.update(Buffer.from(string_to_sign, "utf-8")).digest("hex");
    return signature;
}, _Curl_getTimestamp = function _Curl_getTimestamp(date) {
    let dateObj = date || new Date();
    let year = dateObj.getFullYear().toString();
    let month = dateObj.getMonth() < 9 ? "0" + (dateObj.getMonth() + 1) : (dateObj.getMonth() + 1).toString();
    let day = dateObj.getDate() < 10 ? "0" + dateObj.getDate() : dateObj.getDate().toString();
    let hour = dateObj.getHours() < 10 ? "0" + dateObj.getHours() : dateObj.getHours().toString();
    let minute = dateObj.getMinutes() < 10 ? "0" + dateObj.getMinutes() : dateObj.getMinutes().toString();
    let second = dateObj.getSeconds() < 10 ? "0" + dateObj.getSeconds() : dateObj.getSeconds().toString();
    return year + month + day + hour + minute + second;
};
exports.default = Curl;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VybC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9jdXJsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsaUNBQTZDO0FBQzdDLG1DQUFnRDtBQUVoRCxNQUFNLElBQUk7SUFBVjs7SUFtREEsQ0FBQztJQXhCQSxPQUFPLENBQUMsTUFBYyxFQUFFLE1BQVcsRUFBRSxXQUFnQjtRQUNwRCxJQUFJLFdBQVcsQ0FBQyxFQUFFLEtBQUssU0FBUyxFQUFFO1lBQ2pDLE1BQU0sSUFBSSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7U0FDaEM7UUFFRCxJQUFJLFdBQVcsQ0FBQyxNQUFNLEtBQUssU0FBUyxFQUFFO1lBQ3JDLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUNyQztRQUVELE1BQU0sU0FBUyxHQUFXLHVCQUFBLElBQUksMkNBQWMsTUFBbEIsSUFBSSxFQUFlLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNsRSxNQUFNLFNBQVMsR0FBVyx1QkFBQSxJQUFJLDJDQUFjLE1BQWxCLElBQUksQ0FBZ0IsQ0FBQztRQUUvQyxPQUFPLGVBQUs7YUFDVixJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDckMsT0FBTyxFQUFFO2dCQUNSLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLEVBQUUsRUFBRSxXQUFXLENBQUMsRUFBRTtnQkFDbEIsU0FBUyxFQUFFLFNBQVM7Z0JBQ3BCLFNBQVMsRUFBRSxTQUFTO2FBQ3BCO1NBQ0QsQ0FBQzthQUNELElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQzthQUN2QixLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztDQUNEO2tGQWxEYyxJQUFTLEVBQUUsV0FBZ0I7SUFDeEMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxJQUFJLE9BQU8sR0FBRyxJQUFBLG1CQUFVLEVBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM1RSxJQUFJLE1BQU0sR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDO0lBQ2hDLElBQUksRUFBRSxHQUFHLFdBQVcsQ0FBQyxFQUFFLENBQUM7SUFDeEIsSUFBSSxjQUFjLEdBQUcsUUFBUSxFQUFFLElBQUksT0FBTyxJQUFJLE1BQU0sRUFBRSxDQUFDO0lBRXZELElBQUksSUFBSSxHQUFHLElBQUEsbUJBQVUsRUFBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDeEMsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVsRixPQUFPLFNBQVMsQ0FBQztBQUNsQixDQUFDLG1EQUVhLElBQVc7SUFDeEIsSUFBSSxPQUFPLEdBQVMsSUFBSSxJQUFJLElBQUksSUFBSSxFQUFFLENBQUM7SUFFdkMsSUFBSSxJQUFJLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzVDLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDMUcsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzFGLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUM5RixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsVUFBVSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDdEcsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBRXRHLE9BQU8sSUFBSSxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDcEQsQ0FBQztBQTRCRixrQkFBZSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MsIHsgQXhpb3NSZXNwb25zZSB9IGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgY3JlYXRlSGFzaCwgY3JlYXRlSG1hYyB9IGZyb20gXCJjcnlwdG9cIjtcblxuY2xhc3MgQ3VybCB7XG5cdCNnZW5TaWduYXR1cmUoZGF0YTogYW55LCBjcmVkZW50aWFsczogYW55KTogc3RyaW5nIHtcblx0XHRsZXQgYm9keSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuXHRcdGxldCByZXFCb2R5ID0gY3JlYXRlSGFzaChcInNoYTI1NlwiKS51cGRhdGUoYm9keSkuZGlnZXN0KFwiaGV4XCIpLnRvTG93ZXJDYXNlKCk7XG5cdFx0bGV0IHNlY3JldCA9IGNyZWRlbnRpYWxzLmFwaUtleTtcblx0XHRsZXQgdmEgPSBjcmVkZW50aWFscy52YTtcblx0XHRsZXQgc3RyaW5nX3RvX3NpZ24gPSBgUE9TVDoke3ZhfToke3JlcUJvZHl9OiR7c2VjcmV0fWA7XG5cblx0XHRsZXQgaG1hYyA9IGNyZWF0ZUhtYWMoXCJzaGEyNTZcIiwgc2VjcmV0KTtcblx0XHRjb25zdCBzaWduYXR1cmUgPSBobWFjLnVwZGF0ZShCdWZmZXIuZnJvbShzdHJpbmdfdG9fc2lnbiwgXCJ1dGYtOFwiKSkuZGlnZXN0KFwiaGV4XCIpO1xuXG5cdFx0cmV0dXJuIHNpZ25hdHVyZTtcblx0fVxuXG5cdCNnZXRUaW1lc3RhbXAoZGF0ZT86IERhdGUpOiBzdHJpbmcge1xuXHRcdGxldCBkYXRlT2JqOiBEYXRlID0gZGF0ZSB8fCBuZXcgRGF0ZSgpO1xuXG5cdFx0bGV0IHllYXIgPSBkYXRlT2JqLmdldEZ1bGxZZWFyKCkudG9TdHJpbmcoKTtcblx0XHRsZXQgbW9udGggPSBkYXRlT2JqLmdldE1vbnRoKCkgPCA5ID8gXCIwXCIgKyAoZGF0ZU9iai5nZXRNb250aCgpICsgMSkgOiAoZGF0ZU9iai5nZXRNb250aCgpICsgMSkudG9TdHJpbmcoKTtcblx0XHRsZXQgZGF5ID0gZGF0ZU9iai5nZXREYXRlKCkgPCAxMCA/IFwiMFwiICsgZGF0ZU9iai5nZXREYXRlKCkgOiBkYXRlT2JqLmdldERhdGUoKS50b1N0cmluZygpO1xuXHRcdGxldCBob3VyID0gZGF0ZU9iai5nZXRIb3VycygpIDwgMTAgPyBcIjBcIiArIGRhdGVPYmouZ2V0SG91cnMoKSA6IGRhdGVPYmouZ2V0SG91cnMoKS50b1N0cmluZygpO1xuXHRcdGxldCBtaW51dGUgPSBkYXRlT2JqLmdldE1pbnV0ZXMoKSA8IDEwID8gXCIwXCIgKyBkYXRlT2JqLmdldE1pbnV0ZXMoKSA6IGRhdGVPYmouZ2V0TWludXRlcygpLnRvU3RyaW5nKCk7XG5cdFx0bGV0IHNlY29uZCA9IGRhdGVPYmouZ2V0U2Vjb25kcygpIDwgMTAgPyBcIjBcIiArIGRhdGVPYmouZ2V0U2Vjb25kcygpIDogZGF0ZU9iai5nZXRTZWNvbmRzKCkudG9TdHJpbmcoKTtcblxuXHRcdHJldHVybiB5ZWFyICsgbW9udGggKyBkYXkgKyBob3VyICsgbWludXRlICsgc2Vjb25kO1xuXHR9XG5cblx0cmVxdWVzdChjb25maWc6IHN0cmluZywgcGFyYW1zOiBhbnksIGNyZWRlbnRpYWxzOiBhbnkpOiBhbnkge1xuXHRcdGlmIChjcmVkZW50aWFscy52YSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJWQSBOb3QgRm91bmRcIik7XG5cdFx0fVxuXG5cdFx0aWYgKGNyZWRlbnRpYWxzLmFwaUtleSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJBcGkgS2V5IE5vdCBGb3VuZFwiKTtcblx0XHR9XG5cblx0XHRjb25zdCBzaWduYXR1cmU6IHN0cmluZyA9IHRoaXMuI2dlblNpZ25hdHVyZShwYXJhbXMsIGNyZWRlbnRpYWxzKTtcblx0XHRjb25zdCB0aW1lc3RhbXA6IHN0cmluZyA9IHRoaXMuI2dldFRpbWVzdGFtcCgpO1xuXG5cdFx0cmV0dXJuIGF4aW9zXG5cdFx0XHQucG9zdChjb25maWcsIEpTT04uc3RyaW5naWZ5KHBhcmFtcyksIHtcblx0XHRcdFx0aGVhZGVyczoge1xuXHRcdFx0XHRcdFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuXHRcdFx0XHRcdHZhOiBjcmVkZW50aWFscy52YSxcblx0XHRcdFx0XHRzaWduYXR1cmU6IHNpZ25hdHVyZSxcblx0XHRcdFx0XHR0aW1lc3RhbXA6IHRpbWVzdGFtcCxcblx0XHRcdFx0fSxcblx0XHRcdH0pXG5cdFx0XHQudGhlbigocmVzKSA9PiByZXMuZGF0YSlcblx0XHRcdC5jYXRjaCgoZXJyKSA9PiBlcnIucmVzcG9uc2UuZGF0YSk7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3VybDtcbiJdfQ==