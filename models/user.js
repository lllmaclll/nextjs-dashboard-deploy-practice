import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: false,
            default: "user"
        }
    },
    { timestamps: true }
)

const User = mongoose.models.User || mongoose.model("User", userSchema ); // เช็คถ้ามี user แล้วให้ใช้ User แต่ถ้าไม่มีให้ใช้จาก userSchema
export default User