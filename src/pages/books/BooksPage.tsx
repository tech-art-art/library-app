import { useEffect, useState } from "react";
import api from "../../services/api";

interface Book {
  id: number;
  title: string;
}

export default function BooksPage() {
  const [books, setBooks] = useState<Book[]>([]);

  // useEffect(() => {
  //   api
  //     .get<Book[]>("http://localhost:8081/books")
  //     .then((res) => setBooks(res.data))
  //     .catch(() => alert("Failed to fetch books"));
  // }, []);

  return (
    <>
      <h2>Books</h2>
      {/* {books.map((b) => (
        <div key={b.id}>{b.title}</div>
      ))} */}
    </>
  );
}