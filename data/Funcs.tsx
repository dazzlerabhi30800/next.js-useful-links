import data from "@/data/links.json";
import { linkInterface, linkTree } from "@/type";
import { Dispatch, SetStateAction } from "react";

export function convertToCamelCase(str: string) {
  const splitStr = str.split(/[-_]/);
  return splitStr
    .map((str) => str.charAt(0).toUpperCase() + str.substring(1))
    .join(" ");
}

export function handleShow(
  link: string,
  setShow: Dispatch<SetStateAction<boolean>>
) {
  let showTimeout: any;
  setShow((prevState) => (prevState = false));
  navigator.clipboard.writeText(link);
  setShow((prevState) => (prevState = true));
  showTimeout = setTimeout(() => {
    setShow((prevState) => (prevState = false));
  }, 3000);
  return () => clearTimeout(showTimeout);
}

export async function fetchLinks() {
  const data = await fetch("/api/links/", { method: "GET" });
  const newData = await data.json();
  return newData;
}

export function fetchData(slug: string) {
  const convertedSlug = slug.replace(/[-_]/, "");
  const links: linkTree = data;
  return links[convertedSlug];
}

export async function postData(key: string, name: string, link: string) {
  const bodyData = {
    key,
    name,
    link,
  };
  const post = await fetch("/api/links/", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      // "Content-type": "application/json",
    },
    body: JSON.stringify(bodyData),
  });
  const data = await post.json();
  return data;
}

export async function deleteData(key: string, title: string) {
  if (!key || !title) return;
  console.log("hello");
  const deletedLink = await fetch("/api/links/", {
    method: "DELETE",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      // "Content-type": "application/json",
    },
    body: JSON.stringify({
      key,
      title,
    }),
  });
  const data = await deletedLink.json();
  return data;
}
