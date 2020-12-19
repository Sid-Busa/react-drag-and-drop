const initialState = [
    {
      id: "1",
      title: "Bathroom floor",
      category:"year"
    },
    {
      id: "2",
      title: "Full window clean",
      category:""
    },
    {
      id: "3",
      title: "Lounge chair",
      category:""
    },
    {
      id: "4",
      title: "Dining room ",
      category:""
    },
    {
      id: "5",
      title: "High leval cleaning",
      category:""
    },
    {
      id: "6",
      title: "Vacant room clean",
      category:""
    },
    {
      id: "7",
      title: "Carpate stream",
      category:""
    },
  ];
export default (state = initialState, action) => {
    switch (action.type) {
        case "SET_PERIODICAL_CATEGORY":
            return action.payload
            
        default:
            return state;
    }
};
