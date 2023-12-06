class uber {
    constructor(km, time, wait) {
        this.km = km
        this.time = time
        this.wait = wait
    }
    up() {
        if (this.time && this.km > 10) {
            console.log((this.km * 10) + (this.wait * 15))
        }
        else {
            console.log((this.km * 50) + (this.wait * 15))
        }
    }
}
let price = new uber(12, 28, 5)
price.up();
