// src/redux/reducer.js
import { TOGGLE_BUTTON } from '../reduxActions/appAction';

const initialState = {
  count: 0,
  isButtonActive: true, // New state for the button
  isMenuOpen: false,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case TOGGLE_BUTTON:
      return {
        ...state,
        isButtonActive: action.payload, // Toggle the boolean state
      };
    case "TOGGLE_MENU":
        return {
            ...state,
            isMenuOpen: action.payload, // Toggle the boolean state
        };
    default:
      return state;
  }
};

export default counterReducer;
