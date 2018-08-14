import React, { Component } from 'react';
import Book from './Book'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchBooks } from '../actions';

class Shelves extends Component {
    componentDidMount() {
        this.props.dispatch(fetchBooks());
    }

    render() {
        return (
            <div>
                <div className="list-books">
                    <div className="list-books-title">
                        <h1>MYREADSFLIX</h1>
                    </div>
                    <div className="jumbotron jumbotron-fluid">
                        <div className="container">
                            <h1 className="display-4">Myreadflix</h1>
                            <p className="lead">Your virtual library to search books that you already read or want to read.<br />
                                Because books are better than movies.</p>
                            <Link to="/search" className="btn btn-info btn-lg">Start Searching</Link>
                        </div>
                    </div>
                    <div className="list-books-content">
                        <div>
                            {["currentlyReading", "wantToRead", "read"].map((shelf, index) => {
                                return (
                                    <div className="bookshelf" key={index}>
                                        <h2 className="bookshelf-title">{
                                            shelf === "currentlyReading" ? "Currently Reading" :
                                                shelf === "wantToRead" ? "Want to Read" :
                                                    "Read"
                                        }</h2>
                                        <div className="bookshelf-books">
                                            <ol className="books-grid">
                                                {this.props.bookList !== undefined && this.props.bookList.filter(item => item.shelf === shelf).map((book) => {
                                                    return (
                                                        <Book
                                                            key={book.id}
                                                            bookData={book}
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

function mapStateToProps(state) {
    return {
        bookList: state
    }
}

export default connect(mapStateToProps)(Shelves);