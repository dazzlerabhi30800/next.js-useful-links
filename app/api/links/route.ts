import { promises as fs } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

const filePath = process.cwd() + "/data/links.json";
export async function GET() {
  const file = await fs.readFile(filePath, "utf-8");
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

  const file = await fs.readFile(filePath, "utf-8");
  const data = JSON.parse(file);
  const newData = {
    name,
    link,
  };
  data[key].push(newData);
  fs.writeFile(filePath, JSON.stringify(data));
  // await fs.writeFile(data, updatedFile);
  return NextResponse.json(data);
  // return NextResponse.json(file);
}
