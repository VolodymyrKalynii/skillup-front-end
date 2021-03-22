class User {
    constructor(name) {
        this.__name = name;

    }
    printName() {
        console.log(this.__name);
    }
}

export default User;