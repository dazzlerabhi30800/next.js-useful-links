import { useLinkContext } from "@/context/Appcontext";
// import { postData } from "@/data/Funcs";
// import { linkInterface } from "@/type";
import { FormEvent, SetStateAction } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { formProps } from "@/type";
import { updateData } from "@/data/Funcs";
export default function UpdateForm({ slug, setLinkData }: formProps) {
  const { updateLink, setUpdateLink, closeUpdateModal } = useLinkContext();
  const { name, link, index } = updateLink;
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const convertedSlug = slug.replace(/[-_]/, "");
    if (name.length < 2 || link.length < 2) return;
    const data = await updateData(convertedSlug, name, link, index);
    if (!data) return;
    setLinkData(data[convertedSlug]);
    closeUpdateModal();
  };
  return (
    <div className="form--wrapper">
      <form onSubmit={handleSubmit}>
        <div className="input--container">
          <label htmlFor="updateTitle">Title</label>
          <input
            onChange={(e) =>
              setUpdateLink({ ...updateLink, name: e.target.value })
            }
            value={name}
            type="text"
            id="updateTitle"
            placeholder="enter the title"
          />
        </div>
        <div className="input--container">
          <label htmlFor="updateLink">Link URL</label>
          <input
            onChange={(e) =>
              setUpdateLink({ ...updateLink, link: e.target.value })
            }
            value={link}
            type="text"
            id="updateLink"
            placeholder="enter the link"
          />
        </div>
        <button type="submit">Submit</button>
        <button
          className="close--btn"
          onClick={(e) => {
            e.preventDefault();
            closeUpdateModal();
          }}
        >
          <XMarkIcon />
        </button>
      </form>
    </div>
  );
}
