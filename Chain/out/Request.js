"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TRequest {
    constructor(url, body) {
        this.url = url;
        this.body = body;
        this.headers = [];
    }
    setHeaders(headers) {
        this.headers = headers;
    }
    addHeader(name, value) {
        let h = this.getHeader(name);
        if (h)
            h.value = value;
        else
            this.headers.push({
                name,
                value
            });
    }
    setBody(body) {
        this.body = body;
    }
    getBody() {
        return this.body;
    }
    getHeader(name) {
        return this.headers.find((h) => {
            if (h.name == name)
                return true;
        });
    }
    getUrl() {
        return this.url;
    }
}
exports.default = TRequest;
