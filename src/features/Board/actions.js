import {
  EDIT_TITLE_BOARD,
  DELETE_BOARD,
  ADD_BOARD,
  EDIT_TITLE_CARD,
  DELETE_CARD,
  ADD_CARD,
  UPDATE_DRAG,
  UPDATE_BOARD,
  UPDATE_DRAG_BOARD,
} from "./constants";

export const editTitleBoard = (id, title) => {
  return {
    type: EDIT_TITLE_BOARD,
    id,
    title,
  };
};

export const deleteBoard = (listId) => {
  return {
    type: DELETE_BOARD,
    listId,
  };
};

export const addBoard = (title) => {
  return {
    type: ADD_BOARD,
    title,
  };
};

export const editTitleCard = (cardId, listId, title) => {
  return {
    type: EDIT_TITLE_CARD,
    cardId,
    listId,
    title,
  };
};

export const deleteCard = (cardId, listId) => {
  return {
    type: DELETE_CARD,
    cardId,
    listId,
  };
};

export const addCard = (listId, title) => {
  return {
    type: ADD_CARD,
    listId,
    title,
  };
};

export const updateDrag = (newList) => {
  return {
    type: UPDATE_DRAG,
    newList,
  };
};

export const updateBoard = (newListSwap) => {
  return {
    type: UPDATE_BOARD,
    newListSwap,
  };
};

export const updateDragBoard = (board) => {
  return {
    type: UPDATE_DRAG_BOARD,
    board,
  };
};
