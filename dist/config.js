"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Config {
    constructor(prod) {
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
exports.default = Config;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL2NvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLE1BQU0sTUFBTTtJQWVYLFlBQVksSUFBYTtRQUN4QixJQUFJLElBQUksR0FBRyxtQ0FBbUMsQ0FBQztRQUUvQyxJQUFJLElBQUksRUFBRTtZQUNULElBQUksR0FBRyw4QkFBOEIsQ0FBQztTQUN0QztRQUVEOztZQUVJO1FBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxHQUFHLGNBQWMsQ0FBQztRQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxVQUFVLENBQUM7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBRW5DOztZQUVJO1FBQ0osSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLEdBQUcsVUFBVSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxHQUFHLGlCQUFpQixDQUFDO1FBRTlDOztZQUVJO1FBQ0osSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLEdBQUcsY0FBYyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxHQUFHLGNBQWMsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxhQUFhLENBQUM7UUFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEdBQUcsY0FBYyxDQUFDO1FBRXhDOztZQUVJO1FBQ0osSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsYUFBYSxDQUFDO1FBQ25DLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxHQUFHLGVBQWUsQ0FBQztRQUMxQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxjQUFjLENBQUM7SUFDekMsQ0FBQztDQUNEO0FBRUQsa0JBQWUsTUFBTSxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQ29uZmlnIHtcblx0cmVhZG9ubHkgYmFsYW5jZTogc3RyaW5nO1xuXHRyZWFkb25seSB0cmFuc2FjdGlvbjogc3RyaW5nO1xuXHRyZWFkb25seSBoaXN0b3J5OiBzdHJpbmc7XG5cdHJlYWRvbmx5IGJhbmtsaXN0OiBzdHJpbmc7XG5cdHJlYWRvbmx5IHJlZGlyZWN0cGF5bWVudDogc3RyaW5nO1xuXHRyZWFkb25seSBkaXJlY3RwYXltZW50OiBzdHJpbmc7XG5cdHJlYWRvbmx5IGNvZGFyZWE6IHN0cmluZztcblx0cmVhZG9ubHkgY29kcmF0ZTogc3RyaW5nO1xuXHRyZWFkb25seSBjb2RwaWNrdXA6IHN0cmluZztcblx0cmVhZG9ubHkgY29kcGF5bWVudDogc3RyaW5nO1xuXHRyZWFkb25seSBjb2Rhd2I6IHN0cmluZztcblx0cmVhZG9ubHkgY29kdHJhY2tpbmc6IHN0cmluZztcblx0cmVhZG9ubHkgY29kaGlzdG9yeTogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHByb2Q6IGJvb2xlYW4pIHtcblx0XHRsZXQgYmFzZSA9IFwiaHR0cHM6Ly9zYW5kYm94LmlwYXltdS5jb20vYXBpL3YyXCI7XG5cblx0XHRpZiAocHJvZCkge1xuXHRcdFx0YmFzZSA9IFwiaHR0cHM6Ly9teS5pcGF5bXUuY29tL2FwaS92MlwiO1xuXHRcdH1cblxuXHRcdC8qKlxuXHRcdCAqIEdlbmVyYWwgQVBJXG5cdFx0ICoqL1xuXHRcdHRoaXMuYmFsYW5jZSA9IGJhc2UgKyBcIi9iYWxhbmNlXCI7XG5cdFx0dGhpcy50cmFuc2FjdGlvbiA9IGJhc2UgKyBcIi90cmFuc2FjdGlvblwiO1xuXHRcdHRoaXMuaGlzdG9yeSA9IGJhc2UgKyBcIi9oaXN0b3J5XCI7XG5cdFx0dGhpcy5iYW5rbGlzdCA9IGJhc2UgKyBcIi9iYW5rbGlzdFwiO1xuXG5cdFx0LyoqXG5cdFx0ICogUGF5bWVudCBBUElcblx0XHQgKiovXG5cdFx0dGhpcy5yZWRpcmVjdHBheW1lbnQgPSBiYXNlICsgXCIvcGF5bWVudFwiO1xuXHRcdHRoaXMuZGlyZWN0cGF5bWVudCA9IGJhc2UgKyBcIi9wYXltZW50L2RpcmVjdFwiO1xuXG5cdFx0LyoqXG5cdFx0ICogQ09EIFBheW1lbnRcblx0XHQgKiovXG5cdFx0dGhpcy5jb2RhcmVhID0gYmFzZSArIFwiL2NvZC9nZXRhcmVhXCI7XG5cdFx0dGhpcy5jb2RyYXRlID0gYmFzZSArIFwiL2NvZC9nZXRyYXRlXCI7XG5cdFx0dGhpcy5jb2RwaWNrdXAgPSBiYXNlICsgXCIvY29kL3BpY2t1cFwiO1xuXHRcdHRoaXMuY29kcGF5bWVudCA9IGJhc2UgKyBcIi9wYXltZW50L2NvZFwiO1xuXG5cdFx0LyoqXG5cdFx0ICogQ09EIFRyYWNraW5nXG5cdFx0ICoqL1xuXHRcdHRoaXMuY29kYXdiID0gYmFzZSArIFwiL2NvZC9nZXRhd2JcIjtcblx0XHR0aGlzLmNvZHRyYWNraW5nID0gYmFzZSArIFwiL2NvZC90cmFja2luZ1wiO1xuXHRcdHRoaXMuY29kaGlzdG9yeSA9IGJhc2UgKyBcIi9jb2QvaGlzdG9yeVwiO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZpZyJdfQ==