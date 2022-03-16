import { ADD_CARD, UPDATE_CARD, DELETE_CARD, INIT_CARD } from "../actionTypes/cardsAT";

export const addCardAC = (payload) => {
  return {
    type: ADD_CARD,
    payload
  }
}
export const updateCardAC = (payload) => {
  return {
    type: UPDATE_CARD,
    payload
  }
}
export const deleteCardAC = (payload) => {
  return {
    type: DELETE_CARD,
    payload
  }
}
export const initCardAC = (payload) => {
  return {
    type: INIT_CARD,
    payload
  }
}
