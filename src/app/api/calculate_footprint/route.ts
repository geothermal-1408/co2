// import {NextRequest,NextResponse} from "next/server"
// import {footprint_algo} from "../../utils/footprint_algo"

// export async function POST(req: NextRequest) {
//     try {
//         const body = await req.json();

//         const { elctricity, fuel } = body;

//         // Make sure to await the promise
//         const result = await footprint_algo({ elctricity, fuel });

//         // Return the result as JSON
//         return NextResponse.json({ result });
//     } catch (e:any) {
//         return NextResponse.json({ message: "something went wrong", Code: 500, error: e.message });
//     }
// }

import { NextApiRequest,NextApiResponse } from "next";
import {footprint_input} from "@/lib/types"
import analyzeEmission from "../../utils/footprint_algo"

export async function GET (req:NextApiRequest,res:NextApiResponse){
    const body:footprint_input = req.body()

    const {coal_type,production,exclusion_factor,coal_conversion_factor,co2_emissions_factor} = body
    try{
    const {message,flag,emmision} = analyzeEmission(
        coal_type.toLowerCase(),
        production,
        exclusion_factor,
        coal_conversion_factor,
        co2_emissions_factor
    )
    res.status(200).json({
        emmision,
        message,
        status:flag
        ?"Action recommended: Address identified issues to reduce CO2 emissions."
        : "Sustainable: CO2 emissions are within desired levels.",
    })
    } catch(e){
        res.status(500).json({
            error:"internal server Error"
        })
    }
}