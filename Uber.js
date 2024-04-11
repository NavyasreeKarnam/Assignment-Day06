class Uber {
    constructor(source, destination, duration, price) {
      this.source = source;
      this.destination = destination;
      this.duration = duration;
      this._price = price;
    }
  
    getPrice() {
      return this._price;
    }
  
    setPrice(price) {
      this._price = price;
    }
  
    calculatePrice() {
      return this.duration * this._price;
    }
  }
  
  const myUberRide = new Uber("Home", "Work", 30, 10); // Assuming duration is in minutes and price is per minute
  console.log("Price:", myUberRide.calculatePrice());