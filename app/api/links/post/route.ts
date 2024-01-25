import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { key, name, link } = await req.json();

  // const file = fs.readFileSync(filePath, "utf-8");
  // const data = JSON.parse(file);
  // const newData = {
  //   name,
  //   link,
  // };

  // data[key].push(newData);
  // fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  return NextResponse.json({ name, link });
}
