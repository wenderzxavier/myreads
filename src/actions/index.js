export const CHANGE_SHELF = 'CHANGE_SHELF'
export const GET_BOOKLIST = 'GET_BOOKLIST'

export function changeChange(book, shelf) {
    return{
        type: CHANGE_SHELF,
        book,
        shelf    
    }
}

export function getBookList() {
    return{
        type: GET_BOOKLIST
    }
}

