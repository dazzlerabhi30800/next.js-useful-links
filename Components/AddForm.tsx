import { useLinkContext } from "@/context/Appcontext";
import { postData } from "@/data/Funcs";
import { formProps } from "@/type";
import { FormEvent } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
export default function AddForm({ slug, setLinkData }: formProps) {
  const {
    setLinkString,
    setTitleString,
    titleString,
    linkString,
    closeAddModal,
  } = useLinkContext();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const convertedSlug = slug.replace(/[-_]/, "");
    if (titleString.length < 2 || linkString.length < 2) return;
    const data = await postData(convertedSlug, titleString, linkString);
    if (!data) return;
    setLinkData(data[convertedSlug]);
    closeAddModal();
  };
  return (
    <div className="form--wrapper">
      <form onSubmit={handleSubmit}>
        <div className="input--container">
          <label htmlFor="title">Title</label>
          <input
            onChange={(e) => setTitleString(e.target.value)}
            type="text"
            id="title"
            placeholder="enter the title"
          />
        </div>
        <div className="input--container">
          <label htmlFor="link">Link URL</label>
          <input
            onChange={(e) => setLinkString(e.target.value)}
            type="text"
            id="link"
            placeholder="enter the link"
          />
        </div>
        <button type="submit">Submit</button>
        <button
          className="close--btn"
          onClick={(e) => {
            e.preventDefault();
            closeAddModal();
          }}
        >
          <XMarkIcon />
        </button>
      </form>
    </div>
  );
}
