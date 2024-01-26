import { NextResponse } from "next/server";
import fs from "fs";

const filePath = process.cwd() + "/data/links.json";
export async function POST(req: Request) {
  const { key, name, link } = await req.json();
  if (!key || !name || !link) return;

  const file = fs.readFileSync(filePath, "utf-8");
  console.log({ key, name, link });
  const data = JSON.parse(file);
  const newData = {
    name,
    link,
  };
  console.log("fine 1");

  data[key].push(newData);
  console.log("fine 2");
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  console.log("fine 3");
  return NextResponse.json(data);
}
