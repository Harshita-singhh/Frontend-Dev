function validateInput(name, email, seats) {
    const nameRegex = /^[A-Za-z\s]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const seatsRegex = /^(10|[1-9])$/;

    if (!nameRegex.test(name)) {
        return "Invalid name. Only alphabets are allowed.";
    }
    if (!emailRegex.test(email)) {
        return "Invalid email format.";
    }
    if (!seatsRegex.test(seats)) {
        return "Seats must be between 1 and 10.";
    }
    return null;
}

function bookTicket(name, email, seats) {
    const validationError = validateInput(name, email, seats);
    if (validationError) {
        console.log(validationError);
        return;
    }

    const bookingInfo = { name, email, seats };
    console.log("Ticket booked successfully!");
    console.log("Booking Details:", bookingInfo);
}

bookTicket("Harshita", "harshita@example.com", 5);
