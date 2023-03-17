import type BestSellerBook from '../interfaces/bestSellerBook';
import { createClient } from '@supabase/supabase-js'
const fetchBestSellerList = async (): Promise<BestSellerBook[]> => {
  const key = 'CacSe9aOqszrrMYbC0iZ6iKjY7IIfUBB'
  const url = `https://api.nytimes.com/svc/books/v3/lists.json?api-key=${key}`;
  const response = await fetch(url);
  const data = await response.json();

return  data.results.books.map((book:any) => ({
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
async function uploadJSONtoBucket(jsonData: BestSellerBook[]) {
  const supabase = createClient('https://hfslsfboqmcjmlnnrdol.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhmc2xzZmJvcW1jam1sbm5yZG9sIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzYwNjkzNDgsImV4cCI6MTk5MTY0NTM0OH0.zawrLvetx7kYtbeiw65iyJmVkv2nLrFw44ModJ81TZo')


  const file = Buffer.from(JSON.stringify(jsonData));
  const { data, error } = await supabase.storage
    .from('api-requests')
    .upload('public/bestSellerBookData.json', file)
  
  if(error){
    console.log(error);
  }else if (!error){
    console.log(data);
  }
}
// Usage
fetchBestSellerList().then((bestSellerList) => {
  console.log(bestSellerList);
  uploadJSONtoBucket(bestSellerList);
});
