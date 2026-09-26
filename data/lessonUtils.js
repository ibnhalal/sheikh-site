// Builds a uniform [{ n, label, src }] lessons array from any book config,
// regardless of whether it uses buildUrl(i), buildUrlFromFile(file), or a plain "slug" pattern.
export function buildLessons(book, lessonWord) {
  if (!book) return [];

  if (book.files && book.buildUrlFromFile) {
    return book.files.map((fileName, idx) => ({
      n: idx + 1,
      label: `${lessonWord} ${String(idx + 1).padStart(2, "0")}`,
      src: book.buildUrlFromFile(fileName),
    }));
  }

  const total = book.total || 0;
  return Array.from({ length: total }, (_, idx) => {
    const i = idx + 1;
    const numLabel =
      book.numbering === "padded2" ? String(i).padStart(2, "0") : String(i);
    return {
      n: i,
      label: `${lessonWord} ${numLabel}`,
      src: book.buildUrl(i),
    };
  });
}
