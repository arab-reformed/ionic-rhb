import BooksData from '@/data/fwg-books.json';
import ChaptersData from '@/data/fwg-chapters.json';

export interface FwgBookIface {
    bookNum: number;
    title: string;
    shortTitle: string;
    fwgTitle: string;
    abbrev: string;
    chapters: number;
}

export interface FwgBooksIface {
    [key: string]: FwgBookIface;
}

export interface FwgBooksRootIface {
    books: FwgBooksIface;
}


export interface FwgChapterIface {
    chapterTitle: string;
    text: string;
}

export interface FwgChaptersChaptersIface {
    [key: string]: FwgChapterIface;
}

export interface FwgChaptersRootIface {
    [key: string]: FwgChaptersChaptersIface;
}

export class FwgData {

    booksData() : FwgBooksRootIface {
        return BooksData as FwgBooksRootIface;
    }

    getBooks() : FwgBookIface[] {
        const books = this.booksData().books;
        let bookNum: keyof typeof books;
        const l : FwgBookIface[] = [];
        for (bookNum in books) {
            l.push(books[bookNum])
        }
        // console.log(l);
        return l
    }

    getOtBooks() : FwgBookIface[] {
        const books = this.booksData().books;
        let bookNum: keyof typeof books;
        const l : FwgBookIface[] = [];
        for (bookNum in books) {
            if (parseInt(bookNum) < 40) {
                l.push(books[bookNum])
            }
        }
        // console.log(l);
        return l
    }

    getNtBooks() : FwgBookIface[] {
        const books = this.booksData().books;
        let bookNum: keyof typeof books;
        const l : FwgBookIface[] = [];
        for (bookNum in books) {
            if (parseInt(bookNum) >= 40) {
                l.push(books[bookNum])
            }
        }
        // console.log(l);
        return l
    }

    getBook(bn: number) : FwgBookIface {
        return this.booksData().books[bn];
    }

    chaptersData(): FwgChaptersRootIface {
        return ChaptersData as FwgChaptersRootIface;
    }

    getChapter(bn: number, cn: number) : FwgChapterIface {
        return this.chaptersData()[bn][cn];
    }
}
