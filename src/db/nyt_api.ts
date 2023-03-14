import fs from 'node:fs';
import type BestSellerBook from '../interfaces/bestSellerBook';

const fetchBestSellerList = async (): Promise<BestSellerBook[]> => {
    const key = 'CacSe9aOqszrrMYbC0iZ6iKjY7IIfUBB'
    const url = `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${key}`;
    const response = await fetch(url);
    const data = await response.json();

    return data.results.books.map((book: any) => ({
        title: book.title,
        author: book.author,
        description: book.description,
        contributor: book.contributor,
        contributor_note: book.contributor_note,
        publisher: book.publisher,
        primary_isbn13: book.primary_isbn13,
        primary_isbn10: book.primary_isbn10,
        rank: book.rank,
        rank_last_week: book.rank_last_week,
        weeks_on_list: book.weeks_on_list,
        amazon_product_url: book.amazon_product_url,
        book_image: book.book_image,
        book_image_width: book.book_image_width,
        book_image_height: book.book_image_height,
    }));
};

function writeJSONtoFile(jsonData: BestSellerBook[]) {
    fs.writeFile('test.json', JSON.stringify(jsonData), (err) => {
        if (err) {
          console.error("Error writing file:", err);
        } else {
          console.log("File has been saved.");
        }
      });
}
// Usage
fetchBestSellerList().then((bestSellerList) => {
    console.log(bestSellerList);
    writeJSONtoFile(bestSellerList)
});
