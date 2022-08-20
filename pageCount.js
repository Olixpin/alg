function pageCount(n, p) {
  let totalPages = Math.floor(n / 2);
  let leftPages = Math.floor(p / 2);
  let rightPages = totalPages - leftPages;
  return Math.min(leftPages, rightPages);
}

console.log(pageCount(5, 2));
