import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { update as changeShelf } from './BookAPI'

class Book extends Component {
/*    onChangeShelf = (bookId, shelf) => {
        changeShelf(bookId, shelf).then(result => {
            this.setState({
                bookList: result
            })
        })
    }
*/
    static propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        shelf: PropTypes.string.isRequired,
        author: PropTypes.array,
        cover: PropTypes.string
    }

    render() {
        const { id, title, author, cover, shelf } = this.props;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ backgroundImage: `url("${cover}")` }}></div>
                        <div className="book-shelf-changer">
                            <select defaultValue={shelf} onChange={(evt) => console.log(id, evt.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{title}</div>
                    <div className="book-authors">{author}</div>
                </div>
            </li>
        )
    }
}

export default Book;