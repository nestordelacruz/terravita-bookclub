interface ApiResponse<T> {
    status: string;
    num_results: number;
    results: T;
}

interface Book {
    title: string;
    author: string;
    description: string;
    contributor: string;
    contributor_note: string;
    publisher: string;
    primary_isbn13: string;
    primary_isbn10: string;
    book_image: string;
    buy_links: BuyLink[];
    rank: number;
    weeks_on_list: number;
    asterisk: number;
    dagger: number;
}

interface BuyLink {
    name: string;
    url: string;
}

interface BooksResponse {
    list_name: string;
    list_name_encoded: string;
    bestsellers_date: string;
    published_date: string;
    published_date_description: string;
    next_published_date: string;
    previous_published_date: string;
    display_name: string;
    normal_list_ends_at: number;
    updated: string;
    books: Book[];
}

interface ListsResponse {
    list_name: string;
    display_name: string;
    list_name_encoded: string;
    oldest_published_date: string;
    newest_published_date: string;
    updated: string;
    books: Book[];
}

interface Review {
    book_title: string;
    book_author: string;
    summary: string;
    url: string;
}

interface ReviewResponse {
    num_results: number;
    results: Review[];
}

interface Author {
    name: string;
    bio: string;
    image: string;
}

interface AuthorResponse {
    num_results: number;
    results: Author[];
}

interface Category {
    list_name: string;
    list_name_encoded: string;
    display_name: string;
    updated: string;
    books: Book[];
}

interface CategoryResponse {
    num_results: number;
    results: Category[];
}
interface BestSeller {
    author: string;
    book_image: string;
    description: string;
    primary_isbn10: string;
    primary_isbn13: string;
    publisher: string;
    title: string;
}

interface BestSellersResponse {
    status: string;
    num_results: number;
    results: {
        list_name: string;
        list_name_encoded: string;
        bestsellers_date: string;
        published_date: string;
        published_date_description: string;
        previous_published_date: string;
        next_published_date: string;
        display_name: string;
        books: BestSeller[];
    }[];
}

interface IsbnLookupResponse {
    status: string;
    results: {
        title: string;
        description: string;
        contributor: string;
        author: string;
        contributor_note: string;
        price: number;
        age_group: string;
        publisher: string;
        primary_isbn13: string;
        primary_isbn10: string;
        book_image: string;
        buy_links: {
            name: string;
            url: string;
        }[];
    }[];
}
