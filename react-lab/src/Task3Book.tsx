// Завдання 3 — улюблена книга (функціональні компоненти)
import { book } from "./data";
import type { Review as ReviewType } from "./data";

function BookInfo({ title, author, genre, pages }: { title: string; author: string; genre: string; pages: number }) {
  return (
    <div>
      <h1>{title}</h1>
      <p><b>Автор:</b> {author}</p>
      <p><b>Жанр:</b> {genre}</p>
      <p><b>Кількість сторінок:</b> {pages}</p>
    </div>
  );
}

function Review({ author, text }: ReviewType) {
  return (
    <div className="review">
      <p>«{text}»</p>
      <small>— {author}</small>
    </div>
  );
}

export default function Task3Book() {
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
