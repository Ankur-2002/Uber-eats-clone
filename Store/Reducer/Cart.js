const initialState = {
  selectItem: {
    items: [],
    resturantName: '',
    price: 0,
  },
};
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CART':
      const { items, resturantName } = action.payload;
      const PreItem = state.selectItem.items;
      // const index = PreItem.findIndex(item => item.title === items.title);

      let newItem = [];
      if (items.checkbox) {
        newItem = [...PreItem, items];
      } else {
        newItem = PreItem.filter(item => item.title !== items.title);
      }
      // console.log(newItem, 'newItem');
      const Price = newItem
        .map(item => item.price)
        .reduce((a, b) => parseInt(a) + parseInt(b), 0);
      // const checkbox = action.payload.checkbox;
      const Name = resturantName;
      return {
        selectItem: {
          items: newItem,
          resturantName: Name,
          price: Price,
        },
      };
    case 'CLEAR_CART':
      return initialState;
    default:
      return state;
  }
};
