const initialState = [
  {
    title: "Last Episode",
    id: 0,
    cards: [
      {
        id: 0,
        text: "we created a static list"
      },
      {
        id: 1,
        text: "we used material ui"
      }
    ]
  },
  {
    title: "This Episode",
    id: 0,
    cards: [
      {
        id: 0,
        text: "we created a dynamic list"
      },
      {
        id: 1,
        text: "we used redux"
      },
      {
        id: 2,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
      }
    ]
  }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default listsReducer;
