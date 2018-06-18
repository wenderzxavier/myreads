import React, { Component } from 'react';
import * as BookAPI from './BookAPI'

class Book extends Component {
    handleSelect(evt) {
        BookAPI.update(this.props.id, evt).then( result => {
            console.log(result);
        })
    }

    render() {
        const { title, author, cover } = this.props;
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ backgroundImage: `url("${cover}")` }}></div>
                        <div className="book-shelf-changer">
                            <select id="" onChange={(evt) => this.handleSelect(evt.target.value)}>
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