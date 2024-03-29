import { linkInterface, linkTree } from "@/type";
import { Dispatch, SetStateAction } from "react";
import axios from "axios";

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

// export function fetchData(slug: string) {
//   const convertedSlug = slug.replace(/[-_]/, "");
//   const links: linkTree = data;
//   return links[convertedSlug];
// }

export async function postData(key: string, name: string, link: string) {
  const bodyData = {
    key,
    name,
    link,
  };
  const post = await fetch("/api/links/post", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(bodyData),
  });
  if (!post) return;
  const data = await post.json();
  return data;
}

export async function deleteData(key: string, title: string) {
  if (!key || !title) return;
  const deletedLink = await fetch("/api/links/delete", {
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

export async function updateData(
  key: string,
  name: string,
  link: string,
  index: string
) {
  if (!key || !name || !link || !index) return;
  const updatedData = await fetch("/api/links/", {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({ key, name, link, index }),
  });
  const data = await updatedData.json();
  return data;
}
