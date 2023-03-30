import { NextRequest, NextResponse } from 'next/server';
import { findId } from '@/helper/findId';

const API = "https://jsonplaceholder.typicode.com/users";

export async function GET(request) {
    const id = await findId(request);

    if (id) {
        const responseWithId = await fetch(`${API}/${id}`);
        const respDataWithId = await responseWithId.json();
        return NextResponse.json({ data: respDataWithId, status: "success" })
    }
    const responseAll = await fetch(API);
    const responseAllData = await responseAll.json();
    return NextResponse.json({ data: responseAllData, status: "success" })
}

export async function POST(request) {
    const req = await request.json();
    // const id = await findId(request);
    // const { nextUrl: { search } } = request;
    // const urlSearchParams = new URLSearchParams(search);
    // const params = Object.fromEntries(urlSearchParams.entries());
    const resp = await fetch(API, {
        method: 'POST',
        body: JSON.stringify(req),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    const respData = await resp.json();
    return NextResponse.json({ data: respData, status: "success" })
}

export async function PATCH(request) {

    const req = await request.json();
    const id = await findId(request);

    if (id) {
        const responseWithId = await fetch(`${API}/${id}`, {
            method: 'PATCH',
            body: JSON.stringify(req),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        const respDataWithId = await responseWithId.json();
        return NextResponse.json({ data: respDataWithId, status: "success" })
    }

    return NextResponse.json({ message: "I am Patch request", status: "failed" })
}

export async function DELETE(request) {
    const id = await findId(request);
    if (id) {
        await fetch(`${API}/${id}`, {
            method: 'DELETE'
        });
        return NextResponse.json({ data: `User ${id} is deleted successfully `, status: "success" })
    }

    return NextResponse.json({ message: "I am Delete request", status: "success" })
}



