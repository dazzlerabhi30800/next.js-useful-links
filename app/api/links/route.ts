// import { promises as fsr } from "fs";
import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import { linkInterface } from "@/type";

const filePath = process.cwd() + "/data/links.json";
export async function GET() {
  const file = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(file);
  return NextResponse.json(data);
}

export async function POST(req: Request) {
  const { key, name, link } = await req.json();

  const file = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(file);
  const newData = {
    name,
    link,
  };
  data[key].push(newData);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  return NextResponse.json(data);
}


export async function PUT(req: Request) {
  const { key, name, link, index } = await req.json();
  const file = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(file);
  data[key][index]["name"] = name;
  data[key][index]["link"] = link;
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  return NextResponse.json(data);
}
