const obj = {
  bookingId: "abc123",
  stripeId: "pi_3LL1D5GkajaYnm6i1xNGo5KN",
  amount: 150,
  amountRecieved: 150,
  billing: {
    currency: "usd",
    address: {
      city: "Ho Chi Minh",
      country: "VN",
      line1: "Citihome, Đường số 35 - CL, Cát Lái",
      line2: "citihome",
      postalCode: "70000",
      state: "Ho Chi Minh City",
    },
    email: "stbhcm@gmail.com",
    name: "Le Anh",
    phone: "+84333037357",
    cardType: "visa",
    expiryDate: "2/2032",
    cardEnding: "4242",
  },
  order: {
    hotelId: "hotelId1111",
    roomId: "DXTW",
    planId: "DXTW1",
    cruiseName: "Deluxe Twin ",
    planName: "Deluxe Twin1",
    quantity: "3",
    max: "2 Adults 0 Children",
    checkin: "2022-07-12",
    checkout: "2022-07-12",
    adults: 2,
    children: 0,
  },
};

console.log(JSON.stringify(obj));

const obj2 = {
  NotificationType: "New",
  BookingId: "OT25E11564027043",
  ExtBookingRef: "test-ext-ref",
  Currency: "VND",
  CheckIn: "2022-07-26",
  CheckOut: "2022-07-27",
  GuestDetail: {
    FirstName: "Trung",
    LastName: "PMS New",
    Email: "trung@whl.travel",
  },
  Rooms: [
    {
      RatePlanId: "d531d091-a12f-1654760592-4b04-a5da-08c14270e5be",
      Adults: "2",
      Children: "1",
      ExtraAdults: "1",
      ExtraChildren: "3",
      Discount: "50000",
      Deposit: "150000",
      Amount: "400000",
      RoomRate: {
        Commission: 2000,
        RatePerNights: [
          {
            Date: "2022-07-26",
            Rate: 400000,
          },
        ],
      },
    },
  ],
  Credential: {
    HotelId: "5994c2db-cd76-401c-ba2e-e178ae118a8d",
    HotelAuthenticationChannelKey: "74dd9b27c6d1fb5fb1289fae19878cac",
  },
  Lang: "en",
};


const obj3 = {
  bookingId: 'RZDU3OYQRF',
  stripeId: 'pi_3LLp0mGkajaYnm6i0ez2Jriy',
  amount: 200,
  amountRecieved: 200,
  billing: {
    currency: 'USD',
    address: {
      city: 'Ho Chi Minh',
      country: 'AF',
      line1: 'Citihome, Đường số 35 - CL, Cát Lái',
      line2: null,
      postalCode: 70000,
      state: 'Ho Chi Minh City'
    },
    email: 'stbhcm@gmail.com',
    name: 'Le Anh',
    phone: '+84333037357',
    cardType: 'visa',
    expiryDate: '3/2023',
    cardEnding: 4242
  },
  order: {
    hotelId: 'hotelId1111',
    roomId: 'DXTW',
    planId: 'DXTW1',
    cruiseName: 'Deluxe Twin ',
    planName: 'Deluxe Twin1',
    quantity: 4,
    max: '2 Adults 0 Children',
    checkin: '2022-07-12',
    checkout: '2022-07-12',
    adults: 2,
    children: 0
  }
}
console.log(JSON.stringify(obj3));