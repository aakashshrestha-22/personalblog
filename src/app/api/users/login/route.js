import { connect } from "@/dbConfig/dbConfig.js";
import User from "@/models/User.js";
import { NextResponse } from "next/server";
var bcrypt = require("bcryptjs");
import jwt from "jsonwebtoken";
connect();

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;
    //if user exist
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }
    //if pw is correct
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        { error: "Password is invalid" },
        { status: 400 }
      );
    }

    //create token data
    const tokenData = {
      id: user._id,
      email: user.email,
    };
    //create token
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });

    const response = NextResponse.json(
      {
        message: "Login Successful",
        token,
      },
      { status: 200 }
    );
    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
