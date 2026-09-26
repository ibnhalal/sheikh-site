// Helpers to resolve a single lesson (by numeric id) from a "book" object.
// A book is either:
//  - a simple numbered book: { total, buildUrl(i) }
//  - an explicit-file book: { files: [...], buildUrlFromFile(fileName) }

export function getLessonCount(book) {
  if (!book) return 0;
  if (book.files) return book.files.length;
  return book.total || 0;
}

export function getLessonSrc(book, id) {
  if (book.files && book.buildUrlFromFile) {
    const fileName = book.files[id - 1];
    return fileName ? book.buildUrlFromFile(fileName) : null;
  }
  if (book.buildUrl) return book.buildUrl(id);
  return null;
}

// Returns { id, src } or null if the id is out of range / invalid.
export function getLesson(book, lessonIdParam) {
  const id = parseInt(lessonIdParam, 10);
  const count = getLessonCount(book);
  if (!book || !id || id < 1 || id > count) return null;
  const src = getLessonSrc(book, id);
  if (!src) return null;
  return { id, src };
}

// Display label for a lesson number, respecting the book's numbering style.
export function formatLessonLabel(book, id) {
  if (book?.numbering === "padded2") return String(id).padStart(2, "0");
  return String(id);
}
