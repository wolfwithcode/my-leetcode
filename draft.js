const ratePlans = {
  result: true,
  data: {
    Rooms: [
      {
        RoomId: "1500c17f-5936-1552017829-4198-b8d3-02c19ec07304",
        Name: "Traveliko - Deluxe Room",
        RatePlans: [
          {
            RatePlanId: "07b9a897-ed07-1552017844-4696-9830-b50500e203b6",
            Name: "Deluxe Room - Best Available Rate",
            GuestsIncluded: 1,
            AdultGuestsIncluded: 1,
            ChildGuestsIncluded: 0,
            MaxGuests: 1,
            ExtraGuestsConfig: "ADULT_CHILD",
            MinRoomRate: 0,
            MealsIncluded: {
              Breakfast: true,
              Lunch: false,
              Dinner: false,
              AllInclusive: false,
            },
            LastMinuteDefault: {
              NumberDaysInAdvance: 0,
              ValueChange: "INCREASE",
              ValueType: "FIXED_AMOUNT",
              Amount: 0,
            },
            BookingCondition: {
              BookingConditionId: "756f287d-e3da-4e2d-9f4f-85085ac2fa5b",
              DepositType: 0,
              CancellationRules: [
                {
                  PolicyId: "2c7401d4-67e5-1526373225-44c1-b937-618ea46cc8a4",
                  DaysPriorCheckin: -1,
                  PenaltyType: 2,
                  PenaltyAmount: 20,
                  Action: "Get",
                },
                {
                  PolicyId: "a52bbbc7-641a-1526373225-4a80-a9bc-ef714a69e475",
                  DaysPriorCheckin: 0,
                  PenaltyType: 3,
                  PenaltyAmount: 0,
                  Action: "Get",
                },
                {
                  PolicyId: "cc2715ba-e375-1526373319-41e1-aaa2-ca810c006d12",
                  DaysPriorCheckin: 1,
                  PenaltyType: 1,
                  PenaltyAmount: 50,
                  Action: "Get",
                },
                {
                  PolicyId: "bc1e147a-b5ef-1526373508-40cc-9aa3-5ef3dcb059f9",
                  DaysPriorCheckin: 2,
                  PenaltyType: 0,
                  PenaltyAmount: 0,
                  Action: "Get",
                },
              ],
              Action: "Get",
            },
            RoomId: "1500c17f-5936-1552017829-4198-b8d3-02c19ec07304",
            Inclusions: "NOT_USED",
            InclusionsName: "",
            InclusionsDescription: "",
            Order: 803,
          },
        ],
        Order: 1,
      },
    ],
  },
  message: "Success",
  error: 0,
};

const room = {
  roomId: "1500c17f-5936-1552017829-4198-b8d3-02c19ec07304",
  name: "Traveliko - Deluxe Room",
  ratePlans: [
    {
      ratePlanId: "07b9a897-ed07-1552017844-4696-9830-b50500e203b6",
      name: "Deluxe Room - Best Available Rate",
      guestsIncluded: 1,
      adultGuestsIncluded: 1,
      childGuestsIncluded: 0,
      maxGuests: 1,
      mealsIncluded: {
        breakfast: true,
        lunch: false,
        dinner: false,
        allInclusive: false,
      },
      pricePerNightVND: 500000,
      pricePerNightUSD: 400,
    },
    {
        ratePlanId: "07b9a897-ed07-1552017844-4696-9830-b50500e203b7",
        name: "Deluxe Room - Premium Available Rate",
        guestsIncluded: 1,
        adultGuestsIncluded: 1,
        childGuestsIncluded: 0,
        maxGuests: 2,
        mealsIncluded: {
          breakfast: true,
          lunch: false,
          dinner: false,
          allInclusive: true,
        },
        pricePerNightVND: 400000,
        pricePerNightUSD: 300,
      },
  ],
};
