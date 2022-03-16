import { ADD_CARD, UPDATE_CARD, DELETE_CARD, INIT_CARD } from "../actionTypes/cardsAT";

const initialState = {cards: []}

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case ADD_CARD:
      const newCard = {
        id: action.payload.id,
        name: action.payload.name, 
        description: action.payload.description,
        imgLink: action.payload.imgLink,
        price: action.payload.price,
      }
      return {
         ...state, cards: state.cards ? [...state.cards, newCard]:
         [newCard]
      }

    case INIT_CARD:
      return { ...state}

    case DELETE_CARD:
      return { ...state, cards: state.cards.filter(el => el.id !== action.payload)}

    case UPDATE_CARD:
      return { ...state, cards: state.cards.map(el => {
        if (el.id === action.payload.id) {
          return {
            ...el, 
            name: action.payload.name, 
            description: action.payload.description,
            imgLink: action.payload.imgLink,
            price: action.payload.price,
          }
        } else {
          return el
        }
      })}

    default:
      return state;
  }
}

export default cardReducer;
