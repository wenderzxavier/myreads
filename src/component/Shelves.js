import React, { Component } from 'react';
import Book from '../component/Book'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Shelves extends Component {
    static propTypes = {
        bookList: PropTypes.array.isRequired,
        onChangeShelf: PropTypes.func.isRequired
    }

    render() {
        const shelves = ["currentlyReading", "wantToRead", "read"];
        const { bookList, onChangeShelf } = this.props;
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MYREADSFLIX</h1>
                    </div>
                    <div class="jumbotron jumbotron-fluid">
                        <div class="container">
                            <h1 class="display-4">Myreadflix</h1>
                            <p class="lead">Your virtual library to search books that you already read or want to read.<br/>
                            Because books are better than movies.</p>
                            <Link to="/search" class="btn btn-info btn-lg">Start Searching</Link>
                        </div>
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
                                                {bookList.filter(item => item.shelf === shelf).map((book) => {
                                                    return (
                                                        <Book
                                                            key={book.id}
                                                            bookData={book}
                                                            onChangeShelf={onChangeShelf}
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
                <div className="open-search" >
                    <Link to="/search">Add a book</Link>
                </div >
            </div>
        )
    }
}

export default Shelves;