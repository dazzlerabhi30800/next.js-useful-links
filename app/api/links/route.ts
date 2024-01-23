import { promises as fsr } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";

const filePath = process.cwd() + "/data/links.json";
export async function GET() {
  const file = await fsr.readFile(filePath, "utf-8");
  const data = JSON.parse(file);
  return NextResponse.json(data);
}
// type postData = {
//   key: string;
//   name: string;
//   link: string;
// };

export async function POST(req: Request) {
  const { key, name, link } = await req.json();

  const file = await fsr.readFile(filePath, "utf-8");
  const data = JSON.parse(file);
  const newData = {
    name,
    link,
  };
  data[key].push(newData);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  return NextResponse.json(data);
}
