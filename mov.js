class movie {
    constructor(title, studio, rating = "PG", b) {
        this.title = title
        this.studio = studio
        this.rating = rating
        this.a = b
    }

    getName() {
        if (this.rating === "PG") {
            this.a.push(this.title)
            //console.log(this.title)
            // console.log(typeof this.title)
        }
    }
    out() {
        return this.a
    }
}


let title = ["ayan", "villan", "sura", "billa", "raja", "enthiran", "polladhavan", "casino royale"]
let studio = ["7studi", "sad", "bad", "you", "harm", "uhy", "ytg", "iuh"]
let rating = ["9.8", "8.5", "4", , "2", , "6", "8"]
var mov
let b = []
for (let i = 0; i < 8; i++) {
    mov = new movie(title[i], studio[i], rating[i], b)
    mov.getName(title[i], studio[i], rating[i], b[i])
    //console.log(mov.out())

}
console.log(mov.out())

// for (let i = 0; i < 8; i++) {
//     mov.getName(title[i], studio[i], rating[i])
// }
