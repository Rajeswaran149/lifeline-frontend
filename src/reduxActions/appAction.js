// src/redux/actions.js
export const TOGGLE_BUTTON = 'TOGGLE_BUTTON';

export const toggleButton = (data) => ({
  type: TOGGLE_BUTTON,
  payload: data,
});

export const toggleMenu = (data) => ({
  type: "TOGGLE_MENU",
  payload: data,
});