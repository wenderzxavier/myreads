import { getAll, update } from '../utils/BookAPI'

export const GET_BOOKLIST = 'GET_BOOKLIST'

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

export function updateShelf(book, shelf) {
    return (dispatch) => {
        update(book, shelf).then(
            dispatch(fetchBooks())
        )
    }
}
