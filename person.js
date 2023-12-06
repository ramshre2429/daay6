function student(name, email, phone) {
    this.name = name
    this.mail = email
    this.num = phone

    this.sayHello = function () {
        console.log(`hello! welcome ${this.name}`)
    }
    this.getData = function () {
        console.log(`name:${this.name},email:${this.mail},phone:${this.num}`)
    }
    this.getEmail = function () {
        console.log(`${this.mail}`)

    }
    this.getPhone = function () {
        console.log(`${this.num}`)
    }

}
let student1 = new student("ram", "lucifer2429@gmail.com", 9874563210)
student1.sayHello();
student1.getData()
student1.getEmail()
student1.getPhone()