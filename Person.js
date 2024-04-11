class Person{
    constructor(name,age,gender="Male",place,designation,guardian="NA"){
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.place = place;
        this.designation = designation;
        this.guardian = guardian;
    }
    getInfo() {
        return `Name ${this.name} Age ${this.age} Gender ${this.gender} Place ${this.place} Designation ${this.designation} Guardian ${this.guardian}`;
      }
    
      setName(name) {
        this.name = name;
      }
    
      getName() {
        return this.name;
      }
    
      getAge() {
        return this.age;
      }
    
      setAge(age) {
        this.age = age;
      }
      setGender(gender) {
        this.gender = gender;
      }
    
      getGender() {
        return this.gender;
      }
    
      getPlace() {
        return this.place;
      }
    
      setPlace(place) {
        this.place = place;
      }
      setDesignation(designation) {
        this.designation = designation;
      }
    
      getDesignation() {
        return this.designation;
      }
    
      getGuardian() {
        return this.guardian;
      }
    
      setGuardian(guardian) {
        this.guardian = guardian;
      }
}

const father = new Person("Jhon",45,"Male","UK","Engineer","NA");
const Mother = new Person("Lina",40,"Female","UK","Homemaker","NA");
const child = new Person("Tom",5,"Male","UK","NA","Father");
const gma = new Person();
gma.setName("Mary");
gma.setAge(70);
gma.setGender("Female");
gma.setDesignation("Landlord");
console.log(child.getInfo());
console.log(gma.getInfo());