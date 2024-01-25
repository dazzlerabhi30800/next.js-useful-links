const filePath = process.cwd() + "/data/links.json";
import { linkInterface } from "@/type";
import fs from "fs";
import { NextResponse } from "next/server";

export async function getStaticProps(req: Request) {
  const { key, title } = await req.json();
  const file = fs.readFileSync(filePath, "utf-8");
  const data = JSON.parse(file);
  const index = data[key].findIndex(
    (link: linkInterface) => link.name === title
  );
  data[key].splice(index, 1);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));

  return NextResponse.json(data);
}
