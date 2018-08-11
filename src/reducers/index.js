import { GET_BOOKLIST } from '../actions'

const initialState = []

function reducer(state=initialState, action) {
    switch (action.type) {
        case GET_BOOKLIST:
            return action.books;
        default:
            return state;
    }
}

export default reducer;