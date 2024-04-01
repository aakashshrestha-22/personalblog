import { getDataFromToken } from "@/app/helpers/getDataFromToken";
import { NextResponse } from "next/server";
import User from "@/models/User";
import { connect } from "mongoose";
connect();

export async function GET(req) {
  try {
    const userId = await getDataFromToken(req);
    const user = await User.findOne({ _id: userId }).select("-password");
    return NextResponse.json({
      message: "User Found",
      data: user,
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
