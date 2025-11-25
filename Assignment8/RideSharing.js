class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicleDetails) {
        super(name, rating);
        this.vehicleDetails = vehicleDetails;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        try {
            if (this.distance === undefined || this.distance === null) {
                throw new Error("Distance is not provided");
            }
            if (this.distance < 0) {
                throw new Error("Distance cannot be negative");
            }
            const baseRate = 5;
            const perKmRate = 10;
            const fare = baseRate + (this.distance * perKmRate);
            return fare;
        } catch (error) {
            console.log("Error calculating fare: " + error.message);
            return null;
        }
    }
}

const driver = new Driver("John", 4.8, { model: "Honda", color: "Black" });
const trip = new Trip("Downtown", "Airport", 15);
console.log("Fare: $" + trip.calculateFare());

const invalidTrip = new Trip("Home", "Office", -5);
console.log(invalidTrip.calculateFare());