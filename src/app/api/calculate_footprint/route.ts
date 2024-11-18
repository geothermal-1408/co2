import {NextRequest,NextResponse} from "next/server"
import {footprint_algo} from "../../utils/footprint_algo"

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        console.log(body);

        const { elctricity, fuel } = body;

        // Make sure to await the promise
        const result = await footprint_algo({ elctricity, fuel });

        // Return the result as JSON
        return NextResponse.json({ result });
    } catch (e:any) {
        return NextResponse.json({ message: "something went wrong", Code: 500, error: e.message });
    }
}

