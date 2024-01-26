import { NextResponse } from "next/server";
import fs from "fs";
import { NextApiResponse } from "next";

const filePath = process.cwd() + "/data/links.json";
export async function POST(req: Request, res: NextApiResponse) {
  const status = await req.json();
  const { key, name, link } = status;

  const file = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(file);
  const newData = {
    name,
    link,
  };

  data[key].push(newData);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  return NextResponse.json(data);
  // return NextResponse.json(newData);
}
