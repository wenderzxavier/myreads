import React, { Component } from 'react';
import Book from './Book'
import PropTypes from 'prop-types'


class Shelves extends Component {
    static propTypes = {
        bookList: PropTypes.array.isRequired
    }

    render() {
        const shelves = ["currentlyReading", "wantToRead", "read"];
        const { bookList } = this.props;
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        {shelves.map((shelf, index) => {
                            return (
                                <div className="bookshelf" key={index}>
                                    <h2 className="bookshelf-title">{
                                        shelf === "currentlyReading" ? "Currently Reading" :
                                            shelf === "wantToRead" ? "Want to Read" :
                                                "Read"
                                    }</h2>
                                    <div className="bookshelf-books">
                                        <ol className="books-grid">
                                            {
                                                bookList.filter(item => item.shelf === shelf).map((book, idx) => {
                                                    return (
                                                        <Book
                                                            key={idx}
                                                            id={book.id}
                                                            title={book.title}
                                                            author={book.authors}
                                                            shelf={book.shelf}
                                                            cover={book.hasOwnProperty('imageLinks') ? book.imageLinks['thumbnail'] : ""}
                                                        />
                                                    )
                                                })
                                            }
                                        </ol>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Shelves;