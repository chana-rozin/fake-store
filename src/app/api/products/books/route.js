import { NextResponse } from 'next/server'; // Make sure to import this
import {getAllDocuments, connectDatabase, insertDocument} from '@/services/mongo.ts'


export async function GET() {
    const res = await getAllDocuments("GBooks");
    console.log('GET books', res)
    return NextResponse.json(res);
    // return  NextResponse.json(GBooks);
}

export async function POST(req) {
    const newBook = await req.json();
    console.log('POST body', newBook)
    const res = await insertDocument("GBooks", newBook);
    console.log('POST book', res)
    return NextResponse.json(res);
}



const GBooks = [
    {
        id: 1,
        title: "JavaScript: The Good Parts",
        price: 29.99,
        rate: 5,
        image: "https://covers.openlibrary.org/b/id/8091016-L.jpg"
    },
    {
        id: 2,
        title: "Eloquent JavaScript",
        price: 24.99,
        rate: 5,
        image: "https://covers.openlibrary.org/b/id/10528254-L.jpg"
    },
    {
        id: 3,
        title: "You Don't Know JS",
        price: 34.99,
        rate: 4,
        image: "https://covers.openlibrary.org/b/id/10528075-L.jpg"
    },
    {
        id: 4,
        title: "Clean Code",
        price: 39.99,
        rate: 5,
        image: "https://covers.openlibrary.org/b/id/8592224-L.jpg"
    },
    {
        id: 5,
        title: "The Pragmatic Programmer",
        price: 49.99,
        rate: 4,
        image: "https://covers.openlibrary.org/b/id/10482338-L.jpg"
    },
    {
        id: 6,
        title: "Design Patterns: Elements of Reusable Object-Oriented Software",
        price: 54.99,
        rate: 5,
        image: "https://covers.openlibrary.org/b/id/8231996-L.jpg"
    },
    {
        id: 7,
        title: "Introduction to Algorithms",
        price: 79.99,
        rate: 5,
        image: "https://covers.openlibrary.org/b/id/13518232-L.jpg"
    },
    {
        id: 8,
        title: "Refactoring: Improving the Design of Existing Code",
        price: 45.99,
        rate: 5,
        image: "https://covers.openlibrary.org/b/id/8275068-L.jpg"
    },
    {
        id: 9,
        title: "The Mythical Man-Month: Essays on Software Engineering",
        price: 39.99,
        rate: 4,
        image: "https://covers.openlibrary.org/b/id/8168310-L.jpg"
    },
    {
        id: 10,
        title: "Code Complete: A Practical Handbook of Software Construction",
        price: 49.99,
        rate: 5,
        image: "https://covers.openlibrary.org/b/id/8231990-L.jpg"
    }
];

