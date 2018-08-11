import { getAll, update } from '../utils/BookAPI'

export const CHANGE_SHELF = 'CHANGE_SHELF'
export const GET_BOOKLIST = 'GET_BOOKLIST'

export function changeChange(book, shelf) {
    return {
        type: CHANGE_SHELF,
        book,
        shelf
    }
}

export function getBookList(books) {
    return {
        type: GET_BOOKLIST,
        books
    }
}

export function fetchBooks() {
    return (dispatch) => {
        getAll().then((books) => {
            return dispatch(getBookList(books))
        })
    }
}


        //     const { book, shelf } = action
        //     if (!book.hasOwnProperty('shelf')) {
        //         state.concat([book])
        //     }
        //     await BookAPI.update(book, shelf)

export function updateShelf(book, shelf) {
    return (dispatch, getState) => {
        if( !book.hasOwnProperty('shelf')) {
            update(book, shelf).then(() => {
                return dispatch(getBookList(getState().concat([book])))
            })
        }
    }
}
