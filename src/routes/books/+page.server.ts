/** @type {import('./$types').PageLoad} */

import prisma from "../../lib/prisma";
import type { Books } from '@prisma/client';

async function fetchBooks(): Promise<Books[]> {
  const Books = await prisma.books.findMany();
  return Books
}

function mapBooks(books: Books[]) {
  const obj1 = { ...books }
  return obj1
}

export async function load() {
  return {
    books: fetchBooks()
  }
}