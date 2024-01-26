import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import { NextApiResponse } from "next";
import path from "path";

// let filePath = path.join(process.cwd(), "tmp", "links.json");
// let filePath = "/tmp/links.json";
let filePath = path.join("tmp", "links.json");

// export async function POST(req: Request, res: NextApiResponse) {
export async function POST(req: NextRequest, res: NextApiResponse) {
  const status = await req.json();
  const { key, name, link } = status;
  try {
    const file = fs.readFileSync(filePath, "utf-8");
    const data = JSON.parse(file);
    const newData = {
      name,
      link,
    };

    data[key].push(newData);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

    // return NextResponse.json(data);
    return new NextResponse(data, { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 400 });
  }
}
