"use client";
import { ClipboardDocumentListIcon } from "@heroicons/react/20/solid"
import { useState } from "react";
import Link from "next/link";
import Alert from "./Alert";
import { convertToCamelCase, fetchData, handleShow } from "@/data/Funcs";
import { linkInterface } from "@/type";

export default function LinkComp({ params: { slug } }: { params: { slug: string } }) {
    const [show, setShow] = useState<boolean>(false);

    if (!slug) return false;
    return (
        <main>
            <h1>{convertToCamelCase(slug)}</h1>
            <div className="links-container">
                {fetchData(slug).map((item: linkInterface, index: number) => {
                    return (
                        <div className="link-outline" key={index}>
                            <div className="sub-link">
                                <h2>{item.name}</h2>
                                <Link target="_blank" href={item.link}>
                                    {item.link}
                                </Link>
                                <button className="clipboard-btn" onClick={() => handleShow(item.link, setShow)}><ClipboardDocumentListIcon className="clipboard-symbol" /></button>
                            </div>
                        </div>

                    )
                })}
            </div>
            <Alert show={show} />
        </main>
    )
}