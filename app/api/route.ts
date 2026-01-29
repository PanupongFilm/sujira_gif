import connectDB from '@/lib/mongodb';
import Wish from '@/model/Wish';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    console.log('🟢 POST /api เริ่มต้น');
    await connectDB(); 
    console.log('✅ DB เชื่อมต่อสำเร็จ');
    
    const body = await req.json(); 
    const { wishName } = body || {};
    console.log('📝 wishName ที่ได้:', wishName);

    if (!wishName || typeof wishName !== 'string') {
      console.log('❌ wishName ว่างหรือไม่ใช่ string');
      return NextResponse.json({ success: false, error: 'wishName ต้องไม่ว่างและต้องเป็นข้อความ' }, { status: 400 });
    }

    console.log('💾 กำลัง Wish.create()...');
    const newWish = await Wish.create({ wishName, isAccept: false });
    console.log('✅ Wish.create() สำเร็จ:', newWish);

    return NextResponse.json({ success: true, data: newWish }, { status: 200 });

  } catch (error) {
    console.error('❌ API POST /api - error:', error);
    const detail = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, error: 'บันทึกไม่สำเร็จ', detail }, { status: 500 });
  }
}

// GET สำหรับทดสอบการเชื่อมต่อฐานข้อมูลและนับเอกสาร
export async function GET() {
  try {
    await connectDB();
    const count = await Wish.countDocuments();
    return NextResponse.json({ success: true, message: 'เชื่อมต่อ DB สำเร็จ', total: count }, { status: 200 });
  } catch (error) {
    console.error('API GET /api - error:', error);
    return NextResponse.json({ success: false, error: 'ไม่สามารถเชื่อมต่อ DB' }, { status: 500 });
  }
}