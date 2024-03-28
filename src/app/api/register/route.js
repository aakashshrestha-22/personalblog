import { connect } from "@/dbConfig/dbConfig.js";
import User from "@/models/User.js";
import { NextResponse } from "next/server";
var bcrypt = require("bcryptjs");

connect();

export async function POST(req) {
  try {
    const reqBody = await req.json();
    const { email, password } = reqBody;
    const user = await User.findOne({ email });

    if (!user) {
      // User does not exist, create a new one
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const newUser = new User({ email, password: hashedPassword });
      const savedUser = await newUser.save();
      console.log(savedUser, "user");
      return NextResponse.json(
        { message: "User Created Successfully" },
        { status: 201 }
      );
    }

    // User exists, check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return NextResponse.status(401).json({
        message: "Invalid email or password",
      });
    }

    // User exists and password is correct
    return NextResponse.json({ message: "User authenticated successfully" });
  } catch (error) {
    console.log(error);
    NextResponse.status(500).json({ message: "Internal server error" });
  }
}
