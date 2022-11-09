const CHECK_STATUS = 'bookstore/categories/CHECK_STATUS';

// const initialState = [];

// export const checkStatusAction = () => ({
//   type: CHECK_STATUS,
//   payload: 'UNDER-CONSTRUCTION',
// });

// const categoriesReducer = (state = initialState, action = {}) => {
//   switch (action.type) {
//     case CHECK_STATUS:
//       return action.payload;
//     default:
//       return state;
//   }
// };

export const checkStatusAction = () => ({
  type: CHECK_STATUS,
});

const categoriesReducer = (state = '', action) => {
  const information = 'UNDER-CONSTRUCTION';
  switch (action.type) {
    case CHECK_STATUS:
      return information;
    default:
      return state;
  }
};

export default categoriesReducer;
