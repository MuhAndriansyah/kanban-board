import { v4 as uuidv4 } from "uuid";
import {
  EDIT_TITLE_BOARD,
  ADD_BOARD,
  EDIT_TITLE_CARD,
  DELETE_CARD,
  ADD_CARD,
  UPDATE_DRAG_CARD,
  UPDATE_BOARD,
  UPDATE_DRAG_BOARD,
} from "./constants";

const reducer = (state, action) => {
  switch (action.type) {
    case EDIT_TITLE_BOARD:
      return {
        ...state,
        lists: state.lists.map((item) => ({
          ...item,
          title:
            item.id === action.id ? (item.title = action.title) : item.title,
        })),
      };

    case EDIT_TITLE_CARD:
      return {
        ...state,
        lists: state.lists.map((item) => ({
          ...item,
          cards:
            item.id === action.listId
              ? (item.cards = item.cards.map((card) => ({
                  ...card,
                  title:
                    card.id === action.cardId
                      ? (card.title = action.title)
                      : card.title,
                })))
              : item.cards,
        })),
      };

    case ADD_CARD:
      const newCard = {
        id: `card-${uuidv4()}`,
        title: action.title,
      };
      return {
        ...state,
        lists: state.lists.map((item) => ({
          ...item,
          cards:
            item.id === action.listId
              ? (item.cards = [...item.cards, newCard])
              : item.cards,
        })),
      };

    case DELETE_CARD:
      return {
        ...state,
        lists: state.lists.map((item) => ({
          ...item,
          cards:
            item.id === action.listId
              ? (item.cards = item.cards.filter(
                  (card) => card.id !== action.cardId,
                ))
              : item.cards,
        })),
      };

    case ADD_BOARD:
      const newBoard = {
        id: `list-${uuidv4()}`,
        title: action.title,
        cards: [],
      };
      return {
        ...state,
        lists: [...state.lists, newBoard],
      };

    case UPDATE_DRAG_CARD:
      return {
        ...state,
        lists: state.lists.map((board) => ({
          ...board,
          board: board.id === action.listId ? (board = action.newList) : board,
        })),
      };

    case UPDATE_BOARD:
      let getLists = [...state.lists];
      let selectedLists = action.newListSwap;
      const key = "id";
      getLists.map((item) => {
        let found = selectedLists.find((s) => s[key] === item[key]);
        if (found) {
          item = Object.assign(item, found);
        }
        return item;
      });
      return {
        ...state,
        lists: getLists,
      };
    case UPDATE_DRAG_BOARD:
      return {
        ...state,
        lists: action.board,
      };
    default:
      return state;
  }
};

export default reducer;
