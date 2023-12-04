"use client";
import { ClipboardDocumentListIcon } from "@heroicons/react/20/solid"
import { useState } from "react";
import Link from "next/link";
import Alert from "./Alert";

export default function LinkComp({ params: { slug } }: { params: { slug: string } }) {
    const [show, setShow] = useState<boolean>(false);
    function handleShow() {
        navigator.clipboard.writeText("LinkedIn URL");
        // alert("Text Copied to Clipboard")
        setShow(prevState => prevState = true);
        setTimeout(() => {
            setShow(prevState => prevState = false);
        }, 3000);
    }
    return (
        <main>
            <h2>{slug}</h2>
            <div className="links-container">
                <div className="link-outline">
                    <div className="sub-link">
                        <h3>LinkedIn Link</h3>
                        <Link target="_blank" href="https://www.linkedin.com/in/abhishek-choudhary-00679621b/">
                            https://www.linkedin.com/in/abhishek-choudhary-00679621b
                        </Link>
                        <button className="clipboard-btn" onClick={handleShow}><ClipboardDocumentListIcon className="clipboard-symbol" /></button>
                    </div>
                </div>
            </div>
            <Alert show={show} />
        </main>
    )
}