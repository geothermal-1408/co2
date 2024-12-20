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

import { NextRequest, NextResponse } from "next/server";
import { footprint_input } from "@/lib/types";
import evaluateCoalMine from "../../utils/footprint_algo";
// import { NextApiRequest, NextApiResponse } from "next";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const {
      coal_type,
      production,
      exclusion_factor,
      coal_conversion_factor,
      co2_emissions_factor,
    }: footprint_input = body;

    if (
      !coal_type ||
      !production ||
      !exclusion_factor ||
      !coal_conversion_factor ||
      !co2_emissions_factor
    ) {
      return NextResponse.json(
        { error: "Please provide all required fields." },
        { status: 400 }
      );
    }
    const { flag, emissions, messages } = evaluateCoalMine(
      coal_type.toLowerCase(),
      production,
      exclusion_factor,
      coal_conversion_factor,
      co2_emissions_factor
    );

    return NextResponse.json(
      {
        emissions,
        status: flag,
        messages,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error." },
      { status: 500 }
    );
  }
}
