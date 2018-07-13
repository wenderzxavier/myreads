import * as  BookAPI from '../utils/BookAPI'
import { CHANGE_SHELF, GET_BOOKLIST } from '../actions'

function reducer(state, action) {
    switch (action.type) {
        case GET_BOOKLIST:
            let bookList;
            getAllBooks = await BookAPI.getAll().then((result) => { bookList = result })
            return bookList;

        case CHANGE_SHELF:
            const { book, shelf } = action
            if (!book.hasOwnProperty('shelf')) {
                state.concat([book])
            }
            await BookAPI.update(book, shelf)
            return state;

        default:
            return state;
    }
}

export default reducer;