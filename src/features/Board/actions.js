import {
  EDIT_TITLE_BOARD,
  DELETE_BOARD,
  ADD_BOARD,
  EDIT_TITLE_CARD,
  DELETE_CARD,
  ADD_CARD,
} from "./constants";

export const editTitleBoard = (listId, title) => {
  return {
    type: EDIT_TITLE_BOARD,
    listId,
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
