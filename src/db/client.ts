import { PrismaClient, Books, Prisma } from '@prisma/client';

import BestSellerBookData from './test.json' assert { type: "json" };
import type BestSellerBook from '../interfaces/bestSellerBook';
import { createClient } from '@supabase/supabase-js';

function mapJSONToBooks() {
    //const data = JSON.parse(json);
    let data = BestSellerBookData;
    let items: { title: string; author: string; description: string; contributor: string; contributor_note: string; publisher: string; ISBN: string; amazon_product_url: string; book_image: string; book_image_width: number; book_image_height: number; }[]= [];
    data.map((item: BestSellerBook) => (items.push({
        title: item.title,
        author: item.author,
        description: item.description,
        contributor: item.contributor,
        contributor_note: item.contributor_note,
        publisher: item.publisher,
        ISBN: item.primary_isbn13,
        amazon_product_url: item.amazon_product_url,
        book_image: item.book_image,
        book_image_width: item.book_image_width,
        book_image_height: item.book_image_height
    })));


    return items
}


const prisma = new PrismaClient();



async function saveBooksToDB() {
    const temp = mapJSONToBooks();
    console.log(temp);
    const createMany = await prisma.books.createMany({
        data: temp
    })


}

saveBooksToDB()
// const globalForPrisma = global as unknown as { prisma: PrismaClient }

// export const prisma =
//     globalForPrisma.prisma ||
//     new PrismaClient({
//         log: [ 'query' ],
//     })

// if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma