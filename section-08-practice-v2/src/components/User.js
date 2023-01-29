class User {
    constructor (name, age) {
        this.name = name;
        this.age = age;
        this.id = Math.random()
    };

    getName() {
        return this.name;
    };

    getAge() {
        return this.age;
    };

    getId() {
        return this.id;
    };
}

export default User