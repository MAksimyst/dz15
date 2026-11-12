// Завдання 4 — улюблена книга (класові компоненти)
import React from "react";
import { book } from "./data";
import type { Review as ReviewType } from "./data";

interface BookInfoProps {
  title: string;
  author: string;
  genre: string;
  pages: number;
}

class BookInfo extends React.Component<BookInfoProps> {
  render() {
    const { title, author, genre, pages } = this.props;
    return (
      <div>
        <h1>{title}</h1>
        <p><b>Автор:</b> {author}</p>
        <p><b>Жанр:</b> {genre}</p>
        <p><b>Кількість сторінок:</b> {pages}</p>
      </div>
    );
  }
}

class Review extends React.Component<ReviewType> {
  render() {
    return (
      <div className="review">
        <p>«{this.props.text}»</p>
        <small>— {this.props.author}</small>
      </div>
    );
  }
}

export default class Task4BookClass extends React.Component {
  render() {
    return (
      <div className="card">
        <BookInfo title={book.title} author={book.author} genre={book.genre} pages={book.pages} />
        <h2>Рецензії</h2>
        {book.reviews.map((r, i) => (
          <Review key={i} author={r.author} text={r.text} />
        ))}
      </div>
    );
  }
}
