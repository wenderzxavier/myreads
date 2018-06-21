import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
    static propTypes = {
        onChangeShelf: PropTypes.func.isRequired,
        bookData: PropTypes.object
    }

    addBookShelf(newShelf) {
        const { bookData, onChangeShelf } = this.props;
        onChangeShelf(bookData, newShelf);
    }

    render() {
        const { bookData } = this.props;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ backgroundImage: `url("${bookData.hasOwnProperty('imageLinks') ? bookData.imageLinks['thumbnail'] : " "}")` }}></div>
                        <div className="book-shelf-changer">
                            <select
                                defaultValue={ bookData.shelf || "none" }
                                onChange={(evt) => this.addBookShelf(evt.target.value)}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{bookData.title}</div>
                    <div className="book-authors">{bookData.hasOwnProperty('authors') ? bookData.authors.toString() : ""}</div>
                </div>
            </li>
        )
    }
}

export default Book;