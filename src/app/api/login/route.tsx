import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"; // Şifre doğrulama için
import db from 'lib/db'; // db'yi doğru şekilde import ediyoruz

export async function POST(req: Request) {
  const { email, password } = await req.json();

  try {
    // Veritabanında kullanıcıyı sorgula
    const [rows]: [any[], any] = await db.promise().query("SELECT * FROM users WHERE email = ?", [email]);

    // Eğer kullanıcı bulunmazsa
    if (rows.length === 0) {
      return NextResponse.json({ success: false, message: "User not found" });
    }

    const user = rows[0]; // İlk kullanıcıyı alıyoruz (eğer varsa)

    // Şifreyi karşılaştır
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (isPasswordValid) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, message: "Invalid password" });
    }
  } catch (error) {
    return NextResponse.json({ success: false, message: "An error occurred" });
  }
}
