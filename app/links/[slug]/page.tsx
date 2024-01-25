"use client";
import { useEffect } from "react";
import {
  ClipboardDocumentListIcon,
  XMarkIcon,
  PencilSquareIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import Link from "next/link";
import Alert from "./Alert";
import {
  convertToCamelCase,
  deleteData,
  fetchLinks,
  handleShow,
} from "@/data/Funcs";
import { linkInterface } from "@/type";
import AddButton from "@/Components/AddButton";
import AddForm from "@/Components/AddForm";
import { useLinkContext } from "@/context/Appcontext";
import UpdateForm from "@/Components/UpdateForm";

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
  const { addLink, handleUpdateLink, update, updateLink } = useLinkContext();

  if (!slug || linkData.length === 0) return false;

  return (
    <main>
      <h1>{convertToCamelCase(slug)}</h1>
      <div className="links-container">
        {linkData.map((item: linkInterface, index: number) => {
          return (
            <div className="link-outline" key={index}>
              <div className="sub-link">
                <button
                  className="remove--btn"
                  onClick={async () => {
                    const convertedSlug = slug.replace(/[-_]/, "");
                    const data = await deleteData(convertedSlug, item.name);
                    setLinkData(data[convertedSlug]);
                  }}
                >
                  <XMarkIcon width={30} height={30} />
                </button>
                <h2>{item.name}</h2>
                <Link target="_blank" href={item.link}>
                  {item.link}
                </Link>
                <div className="button--container">
                  <button
                    className="clipboard-btn"
                    onClick={() => handleShow(item.link, setShow)}
                  >
                    <ClipboardDocumentListIcon className="clipboard-symbol" />
                  </button>
                  <button
                    className="update--btn"
                    onClick={() =>
                      handleUpdateLink(item.name, item.link, index.toString())
                    }
                  >
                    <PencilSquareIcon
                      style={{
                        width: "var(--icon_dimension)",
                        height: "var(--icon_dimension)",
                      }}
                    />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        <AddButton />
      </div>
      <Alert show={show} />
      {addLink && <AddForm slug={slug} setLinkData={setLinkData} />}
      {update && <UpdateForm slug={slug} setLinkData={setLinkData} />}
    </main>
  );
}
