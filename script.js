var bookings = [];

function bookTicket() {
    var username = document.getElementById("username").value;
    var from = document.getElementById("from").value;
    var to = document.getElementById("to").value;
    var date = document.getElementById("date").value;

    if (username === "" || from === "" || to === "" || date === "") {
        alert("Please fill in all the fields.");
        return;
    }

    var booking = {
        username:username,
        from: from,
        to: to,
        date: date
    };

    bookings.push(booking);
    displayBookings();
    clearForm();
}

function displayBookings() {
    var bookingList = document.getElementById("bookingItems");
    bookingList.innerHTML = "";

    for (var i = 0; i < bookings.length; i++) {
        var booking = bookings[i];
        var listItem = document.createElement("li");
        listItem.classList.add("booking-item");
        listItem.innerHTML = "<h3>Booking #" + (i + 1) + "</h3>" +
            "<p><strong>Username: </strong>" + booking.username + "</p>" +
            "<p><strong>From: </strong>" + booking.from + "</p>" +
            "<p><strong>To: </strong>" + booking.to + "</p>" +
            "<p><strong>Date: </strong>" + booking.date + "</p>";
        bookingList.appendChild(listItem);
    }
}

function clearForm() {
    document.getElementById("username").value = "";
    document.getElementById("from").value = "";
    document.getElementById("to").value = "";
    document.getElementById("date").value = "";
}
