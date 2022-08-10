const obj = {
  result: true,
  data: [
    {
      roomId: "DOUBLE",
      roomName: "Double",
      hotelId: "ad1083cd-4318-1628139888-44fd-9864-e847b931cb5a",
      hotelName: "Halonghub Hotel 3",
      hotelMarkup: 0,
      availabilities: 15,
      releasePeriod: 0,
      ratePackages: [
        {
          ratePlanId: "DOUBLE1",
          ratePlanName: "Double",
          adultGuestsIncluded: 2,
          childGuestsIncluded: 0,
          maxGuests: 4,
          freeBreakfast: false,
          freeLunch: false,
          freeDinner: false,
          freeAllInclusive: false,
          roomMarkup: 0,
          amountBeforeMarkup: 100000,
          amount: 100000,
          promotions: [],
          currency: "VND",
          stopSell: 0,
          stopSellText: "",
          minNights: 1,
          maxNights: 10,
          closeToArrival: 0,
          closeToArrivalText: "",
          closeToDeparture: 0,
          closeToDepartureText: "",
          inclusions: "NOT_USED",
          inclusionsName: "",
          inclusionsDescription: "",
          extraGuestsConfig: "ADULT_CHILD",
          fromDate: "2022-08-12",
          toDate: "2022-08-14",
          canBooking: true,
        },
      ],
    },
    {
      roomId: "SINGLE",
      roomName: "Single",
      hotelId: "ad1083cd-4318-1628139888-44fd-9864-e847b931cb5a",
      hotelName: "Halonghub Hotel 3",
      hotelMarkup: 0,
      availabilities: 26,
      releasePeriod: 0,
      ratePackages: [
        {
          ratePlanId: "SINGLE1",
          ratePlanName: "Single 1",
          adultGuestsIncluded: 3,
          childGuestsIncluded: 0,
          maxGuests: 5,
          freeBreakfast: false,
          freeLunch: true,
          freeDinner: true,
          freeAllInclusive: false,
          roomMarkup: 0,
          amountBeforeMarkup: 50,
          amount: 50,
          promotions: [],
          currency: "VND",
          stopSell: 0,
          stopSellText: "",
          minNights: 2,
          maxNights: 5,
          closeToArrival: 0,
          closeToArrivalText: "",
          closeToDeparture: 0,
          closeToDepartureText: "",
          inclusions: "NOT_USED",
          inclusionsName: "",
          inclusionsDescription: "",
          extraGuestsConfig: "ADULT_CHILD",
          fromDate: "2022-08-12",
          toDate: "2022-08-14",
          canBooking: true,
        },
        {
          ratePlanId: "SINGLE2",
          ratePlanName: "Single 2",
          adultGuestsIncluded: 3,
          childGuestsIncluded: 0,
          maxGuests: 5,
          freeBreakfast: true,
          freeLunch: false,
          freeDinner: false,
          freeAllInclusive: false,
          roomMarkup: 0,
          amountBeforeMarkup: 100,
          amount: 100,
          promotions: [],
          currency: "VND",
          stopSell: 0,
          stopSellText: "",
          minNights: 1,
          maxNights: 365,
          closeToArrival: 0,
          closeToArrivalText: "",
          closeToDeparture: 0,
          closeToDepartureText: "",
          inclusions: "NOT_USED",
          inclusionsName: "",
          inclusionsDescription: "",
          extraGuestsConfig: "ONLY_ADULT",
          fromDate: "2022-08-12",
          toDate: "2022-08-14",
          canBooking: true,
        },
      ],
    },
  ],
  message: "Success",
  error: 0,
};

const rooms = obj.data.map((item) => {
  const { roomId, roomName, hotelId, hotelName } = item;
  return { roomId, roomName, hotelId, hotelName };
});

console.log(JSON.stringify(rooms));