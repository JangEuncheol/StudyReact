class User {
  constructor(name, age) {
    this.id = Math.random();
    this.name = name;
    this.age = age;
  };

  getName() {
    return this.name;
  };

  getAge() {
    return this.age;
  };

  getId() {
    return this.id;
  }

}
export default User