class RequestHeaders {
    constructor() {
        this.headers = new Headers()
        this.headers.set('Content-Type', 'application/json')
        this.headers.set('charset', 'utf-8')
        this.formHeaders = new Headers()
        // this.formHeaders.set('charset', 'utf-8')
        this.formHeaders.append('Content-Type', 'multipart/form-data')
        this.formHeaders.append('Content-Length', '1000000')
    }

    set(key, value) {
        this.headers.set(key, value)
        this.formHeaders.set(key, value)
    }
}

export default new RequestHeaders()
