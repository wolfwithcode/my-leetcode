const obj = {
  bookingId: "1WYVMLXHDA",
  stripeId: "pi_3LOcFrGkajaYnm6i1eOQxSgT",
  amount: 240,
  amountRecieved: 240,
  billing: {
    currency: "USD",
    address: {
      city: "Ho Chi Minh",
      country: "VN",
      line1: "No 33, Pham Van Cheo",
      line2: null,
      postalCode: 70000,
      state: "Hồ Chí Minh (Sài Gòn)",
    },
    email: "manwithcode1@outtlook.com",
    firstName: "Anh",
    lastName: "Le",
    phone: "+84333037357",
    cardType: "visa",
    expiryDate: "2/2042",
    cardEnding: 4242,
  },
  order: {
    hotelId: "hotelId1111",
    roomId: "JRDL",
    planId: "JRDL1",
    cruiseName: "Deluxe Sea View (DSV)",
    planName: "Deluxe Sea View1",
    quantity: 1,
    max: "2 Adults 0 Children",
    checkin: "2022-07-23",
    checkout: "2022-07-25",
    adults: 2,
    children: 0,
  },
};

console.log(JSON.stringify(obj));
