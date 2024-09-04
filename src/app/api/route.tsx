"use server"

import { NextResponse } from "next/server"
import { TestSchema } from "../_models/schema"
import connectToDatabase from "../_middleware/mongodb";
import mongoose from "mongoose";

function add(a:any, b:any, c:any)
{
    return a+b+c;
}


async function gethandler(req: any) {
    await connectToDatabase();
    const a = 10;
    const b = 20;
    const c = 30;
    const sum = add(a,b,c)
    try {
        const Tests = mongoose.models.Test || mongoose.model('Test', TestSchema)
        const test = new Tests({
            a, b, c, sum
        })
        await test.save();
        return NextResponse.json({"message":"reading"})
    } 
    catch (e)
    {
        return NextResponse.json({"error":e})
    }
}

async function posthandler(req: any) {
    await connectToDatabase();
    let body;
    body = await req.json()
    const { a, b, c } = body;
    const Tests = mongoose.models.Test || mongoose.model('Test', TestSchema)
    const docs = await Tests.find({a:a, b:b, c:c});
    
    console.log(a, b, c);

    
    return NextResponse.json({"message":"success", docs: docs, sum: docs[0].a}, {status: 200})
    // return NextResponse.json({"message": "unsuccessful"}, {status: 400})
}

export {
    gethandler as GET,
    posthandler as POST
}