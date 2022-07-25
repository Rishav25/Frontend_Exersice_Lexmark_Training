var passengerDetails = new Map();
var price = 150;
var id = 0;

function loadingFunction() {
  var totalPrice = getPrice();
  var passengerList = passengerDetails;
  return { passengers: passengerList, total: totalPrice };
}

function addPassenger() {
  let name = document.getElementById("passengerName").value;
  let age = document.getElementById("passengerAge").value;
  let gender = document.getElementById("passengerGender").value;
  let seatPreference = document.getElementById("passengerSeatPreference").value;
  let meal = document.getElementById("passengerMeal").value;

  if (name === "" || age === "" || gender === "") {
    console.log("Wrong Input");
    alert("Please fill passenger details properly");
    return null;
  }

  passengerDetails.set(id, {
    name: name,
    age: age,
    gender: gender,
    seatPreference: seatPreference,
    meal: meal,
  });

  var size = passengerDetails.size;
  if (size === 1) {
    let topDiv = document.createElement("div");
    topDiv.innerHTML =
      `<table style="table-layout:fixed;margin:0rem 10rem 0rem 11rem;width:700px;padding:0rem 5rem;color: rgb(242, 105, 36)"><tr><th>` +
      "Name" +
      "</th>" +
      "<th>" +
      "Age" +
      "</th>" +
      "<th>" +
      "Gender" +
      "</th>" +
      "<th>" +
      "Seat Preference" +
      "</th>" +
      "<th>" +
      "Meal Preference" +
      "</th></tr></table>";
    let mainDiv = document.getElementById("passengerListId");
    topDiv.setAttribute("id", "tableHeadings");
    mainDiv.appendChild(topDiv);
  }
  let div1 = document.createElement("div");
  div1.className = "passengerListBox2";
  div1.innerHTML = `<div style="display:flex">
                    <table style="table-layout:fixed;width:700px"><tr><td>${name}</td><td>${age}</td><td>${gender}</td><td>${seatPreference}</td><td>${meal}</td></tr></table>
                                  <button onclick="removePassenger(${id})" type="button" class="btn" style="background-color:rgb(241, 166, 128);color:white;border:none;float:right;margin-bottom:0rem">
                                                  <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="18"
                                                    height="18"
                                                    fill="currentColor"
                                                    class="bi bi-trash"
                                                    viewBox="0 0 16 16"
                                                    style="color: white"
                                                  >
                                                    <path
                                                      d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                                                    />
                                                    <path
                                                      fill-rule="evenodd"
                                                      d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                                    />
                                                  </svg>
                                                  Remove Passenger
                                    </div>`;
  let mainDiv = document.getElementById("passengerListId");
  div1.setAttribute("id", `passenger${id}`);
  mainDiv.appendChild(div1);

  let priceDiv = document.getElementById("totalPriceChild");
  priceDiv.remove();

  let mainPriceDiv = document.getElementById("totalPrice");
  let newPriceDiv = document.createElement("div");
  newPriceDiv.setAttribute("id", "totalPriceChild");
  newPriceDiv.innerHTML = `<div style="margin:0rem 10rem;font-size:1.2rem;color:rgb(242, 105, 36)" id = "totalPriceChild">
  Total Price : ${getPrice()}
  </div>`;
  mainPriceDiv.appendChild(newPriceDiv);

  document.getElementById("passengerForm").reset();
  id++;

  console.log(loadingFunction());
  return;
}

function removePassenger(index) {
  const removedPassenger = document.getElementById(`passenger${index}`);
  console.log(removedPassenger);
  removedPassenger.remove();
  passengerDetails.delete(index);
  console.log(passengerDetails);
  console.log(passengerDetails.size);
  if (passengerDetails.size === 0) {
    const tableHeadings = document.getElementById("tableHeadings");
    console.log(tableHeadings);
    tableHeadings.remove();
  }

  let priceDiv = document.getElementById("totalPriceChild");
  priceDiv.remove();

  let mainPriceDiv = document.getElementById("totalPrice");
  let newPriceDiv = document.createElement("div");
  newPriceDiv.setAttribute("id", "totalPriceChild");
  newPriceDiv.innerHTML = `<div style="margin:0rem 10rem;font-size:1.2rem;color:rgb(242, 105, 36)" id = "totalPriceChild">
  Total Price : ${getPrice()}
                                    </div>`;
  mainPriceDiv.appendChild(newPriceDiv);

  console.log(loadingFunction());
}

function getPrice() {
  var totalPrice = price * passengerDetails.size;
  return totalPrice + "$";
}

function bookTikcet() {
  if (passengerDetails.size < 1) {
    alert("Please add passengers");
    return;
  }
  if (document.getElementById("contactNumber").value === "") {
    alert("Please enter contact details");
    return;
  }

  alert(`Total Price of Ticket is : ${getPrice()}`);
}
