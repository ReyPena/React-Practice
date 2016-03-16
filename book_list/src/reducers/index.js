import BooksReducer from "./reducer_books";
import { combineReducers } from "redux";
import ActiveBook from "./reducer_active_book";


const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
