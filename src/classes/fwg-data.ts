import Books from '@/data/fwg-books.json';

export interface FwgBook {
    bookNum: number;
    title: string;
    shortTitle: string;
    fwgTitle: string;
    abbrev: string;
    chapters: number;
}

export interface FwgBooks {
    [key: string]: FwgBook;
}

export interface FwgDataRoot {
    books: FwgBooks;
}

export class FwgData {

    data() : FwgDataRoot {
        return Books as FwgDataRoot;
    }

    getBooks() : object[] {
        const books = this.data().books;
        let bookNum: keyof typeof books;
        const l : FwgBook[] = [];
        for (bookNum in books) {
            l.push(books[bookNum])
        }
        console.log(l);
        return l
    }
}
