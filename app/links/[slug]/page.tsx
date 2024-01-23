"use client";
import { useEffect } from "react";
import { ClipboardDocumentListIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Link from "next/link";
import Alert from "./Alert";
import {
  convertToCamelCase,
  fetchLinks,
  handleShow,
  postData,
} from "@/data/Funcs";
import { linkInterface } from "@/type";
import AddButton from "@/Components/AddButton";
import AddForm from "@/Components/AddForm";
import { linkContext, useLinkContext } from "@/context/Appcontext";

export default function LinkComp({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const [show, setShow] = useState<boolean>(false);
  const [linkData, setLinkData] = useState<linkInterface[]>([]);
  useEffect(() => {
    const convertedSlug = slug.replace(/[-_]/, "");
    fetchLinks().then((data) => setLinkData(data[convertedSlug]));
  }, []);

  // Context Hooks
  const { addLink } = useLinkContext();

  // const handlePost = async () => {
  //   const convertedSlug = slug.replace(/[-_]/, "");
  //   const data = await postData(convertedSlug);
  //   if (!data) return;
  //   console.log(data);
  // };

  if (!slug || linkData.length === 0) return false;

  return (
    <main>
      <h1>{convertToCamelCase(slug)}</h1>
      <div className="links-container">
        {linkData.map((item: linkInterface, index: number) => {
          return (
            <div className="link-outline" key={index}>
              <div className="sub-link">
                <h2>{item.name}</h2>
                <Link target="_blank" href={item.link}>
                  {item.link}
                </Link>
                <button
                  className="clipboard-btn"
                  onClick={() => handleShow(item.link, setShow)}
                >
                  <ClipboardDocumentListIcon className="clipboard-symbol" />
                </button>
              </div>
            </div>
          );
        })}
        <AddButton />
      </div>
      <Alert show={show} />
      {addLink && <AddForm slug={slug} setLinkData={setLinkData} />}
    </main>
  );
}
