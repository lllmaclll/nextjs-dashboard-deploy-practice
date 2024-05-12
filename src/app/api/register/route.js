import { NextResponse } from "next/server";
import { connectMongoDB } from "../../../../lib/mongodb";
import User from "../../../../models/user";
import bcrypt from "bcryptjs"; // ใช้ในการเข้ารหัส หรือ hash รหัส

export async function POST(req) {
    try {
        
        const { name, email, password } = await req.json();
        const hashPassword = await bcrypt.hash(password, 10);

        await connectMongoDB()
        await User.create({ name, email, password: hashPassword });

        console.log("Name: ", name)
        console.log("Email: ", email)
        console.log("Password: ", password)

        return NextResponse.json({ message: "User registered." }, { status: 201 }) // status: 201 = (created)

    } catch (error) {
        return NextResponse.json({ message: "An error occured while registrating the user." }, { status: 500 })
    }
}