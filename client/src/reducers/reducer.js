export function userReducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        userName: action.payload.userName,
        userID: action.payload.userID,
      };
    default:
      return state;
  }
}

export function mapReducer(state, action) {
  switch (action.type) {
    case "SET_CITY":
      return {
        ...state,
        cityName: action.payload,
      };
    case "SET_SHOW_GRIDS":
      return {
        ...state,
        showGrids: action.payload,
      };

    case "SET_CUSTOMER_DENSITY":
      return {
        ...state,
        showCustomerDensity: action.payload,
      };
    default:
      return state;
  }
}
