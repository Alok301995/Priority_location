export function userReducer(state, action) {
  switch (action.type) {
    case "SET_USER_ID":
      return {
        ...state,
        userID: action.payload,
      };
    case "SET_EMP_ID_VALIDITY":
      return {
        ...state,
        isEmpIdValid: action.payload,
      };
    case "SET_OTP_VALIDITY":
      return {
        ...state,
        isOtpValid: action.payload,
      };

    case "SET_USER_VALIDITY":
      return {
        ...state,
        isUserValid: action.payload,
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

    case "SET_SHOW_RECOMMENDED_LOCATION":
      return {
        ...state,
        showRecommendedLocation: action.payload,
      };

    case "RESET_STATE":
      return {
        cityName: "",
        showGrids: false,
        showCustomerDensity: false,
        showRecommendedLocation: false,
        // Keep other state properties if needed
      };

    default:
      return state;
  }
}
