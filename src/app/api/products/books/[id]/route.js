import { NextResponse } from 'next/server'; // Make sure to import this
import { deleteDocument, updateDocument} from '@/services/mongo.ts'

export async function PUT(req, {params}) {
    const {id} = params;
    const updatedBook = await req.json();
    console.log('PUT body', updatedBook)
    const { _id, ...bookWithoutId } = updatedBook;
    const res = await updateDocument('GBooks',id, bookWithoutId);
    console.log('PUT book', res)
    return NextResponse.json(res);
}

export async function DELETE(req, { params }){
    const {id} = params;
    console.log('DELETE book', id)
    const res = await deleteDocument('GBooks',id);
    console.log('DELETE book', res)
    return NextResponse.json(res);
}