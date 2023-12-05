import data from '@/data/links.json';
import { linkInterface, linkTree } from '@/type';
import { Dispatch, SetStateAction } from "react";

export function convertToCamelCase(str: string) {
    const splitStr = str.split(/[-_]/);
    return splitStr.map((str) => str.charAt(0).toUpperCase() + str.substring(1)).join(" ");
}




export function handleShow(link: string, setShow: Dispatch<SetStateAction<boolean>>) {
    let showTimeout: any;
    setShow(prevState => prevState = false);
    navigator.clipboard.writeText(link);
    setShow(prevState => prevState = true);
    showTimeout = setTimeout(() => {
        setShow(prevState => prevState = false);
    }, 3000);
    return () => clearTimeout(showTimeout);
}



export function fetchData(slug: string) {
    const convertedSlug = slug.replace(/[-_]/, "");
    const links: linkTree = data;
    return links[convertedSlug];
}