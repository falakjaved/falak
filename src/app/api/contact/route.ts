import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  const data = await request.json();

  if (!data.name || !data.email) {
    return NextResponse.json({ error: "Please fill in all fields" }, { status: 400 });
  }

  // Path to save JSON file
  const filePath = path.join(process.cwd(), "data.json");

  // Read existing data
  let existingData: any[] = [];
  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    existingData = fileContent ? JSON.parse(fileContent) : [];
  }

  // Append new submission
  existingData.push({ ...data, submittedAt: new Date().toISOString() });

  // Write back to file
  fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2));

  return NextResponse.json({ message: "Form submitted successfully!" });
}
