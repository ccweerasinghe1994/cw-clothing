const INITIAL_STATE = {
  secction: [
    {
      title: "hats",
      imageUrl:
        "https://images.pexels.com/photos/101537/baby-boy-hat-covered-101537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 1,
      linkUrl: "hats"
    },
    {
      title: "jackets",
      imageUrl:
        "https://images.pexels.com/photos/1796102/pexels-photo-1796102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 2,
      linkUrl: ""
    },
    {
      title: "sneakers",
      imageUrl:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 3,
      linkUrl: ""
    },
    {
      title: "womens",
      imageUrl:
        "https://images.pexels.com/photos/3761026/pexels-photo-3761026.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      size: "large",
      id: 4,
      linkUrl: ""
    },
    {
      title: "mens",
      imageUrl:
        "https://images.pexels.com/photos/2897531/pexels-photo-2897531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      size: "large",
      id: 5,
      linkUrl: ""
    }
  ]
};

const DirectoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default DirectoryReducer;
