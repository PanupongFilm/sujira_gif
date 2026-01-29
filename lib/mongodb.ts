// lib/mongodb.ts
import mongoose from 'mongoose';

// Accept either MONGODB_URI or MONGODB_URL (some environments use different names)
const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGODB_URL;

// ป้องกันการสร้าง Connection ใหม่ทุกครั้งที่แก้โค้ด (Hot Reload)
let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (!MONGODB_URI) {
    const msg = 'MONGODB_URI หรือ MONGODB_URL ไม่ได้ถูกตั้งค่า — สร้าง .env.local ด้วยตัวแปรที่ถูกต้อง แล้วรีสตาร์ท dev server';
    console.error(msg);
    throw new Error(msg);
  }

  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      console.log('✅ เชื่อมต่อ MongoDB สำเร็จ');
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;