const originObj = {
  bookingId: "RH7MVOITEH",
  stripeId: "pi_3LLpHSGkajaYnm6i0PPgVwCL",
  amount: 200,
  amountRecieved: 200,
};

const billing = {
  currency: "USD",
  address: {
    city: "Ho Chi Minh",
    country: "AF",
    line1: "Citihome, Đường số 35 - CL, Cát Lái",
    line2: null,
    postalCode: 70000,
    state: "Ho Chi Minh City",
  },
  email: "stbhcm@gmail.com",
  name: "Le Anh",
  phone: "+84333037357",
  cardType: "visa",
  expiryDate: "2/2032",
  cardEnding: 4242,
};
const order = {
  hotelId: "hotelId1111",
  roomId: "DXTW",
  planId: "DXTW1",
  cruiseName: "Deluxe Twin ",
  planName: "Deluxe Twin1",
  quantity: 4,
  max: "2 Adults 0 Children",
  checkin: "2022-07-16",
  checkout: "2022-07-17",
  adults: 2,
  children: 0,
};

const namePairs = [
  ["bookingId", "booking_id"],
  ["stripeId", "stripe_id"],
  ["amountRecieved", "amount_recieved"],
  ["cardType", "card_type"],
  ["expiryDate", "expiry_date"],
  ["cardEnding", "card_ending"],
  ["cruiseName", "cruise_name"],
  ["planName", "plan_name"],
  ["hotelId", "hotel_id"],
  ["roomId", "room_id"],
  ["rate_plan_id", "planId"],
];

const nameMap = namePairs.reduce((acc, [origin, target]) => {
  acc[origin] = target;
  acc[target] = origin;
  return acc;
}, {});

console.log(nameMap);

const renameProps = (obj) => {
  const newObj = {};
  for (let key in obj) {
    const newKey = nameMap[key] || key;
    newObj[newKey] = obj[key];
  }
  return newObj;
};

console.log(JSON.stringify(renameProps(originObj)));

console.log(JSON.stringify(renameProps(billing)));

console.log(JSON.stringify(renameProps(order)));
