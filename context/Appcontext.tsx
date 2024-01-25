import {
  createContext,
  ReactNode,
  useState,
  useContext,
  SetStateAction,
} from "react";

type updateLink = {
  name: string;
  link: string;
  index: string;
};

interface context {
  addLink: boolean;
  update: boolean;
  closeAddModal: () => void;
  closeUpdateModal: () => void;
  updateLink: updateLink;
  setUpdateLink: React.Dispatch<SetStateAction<updateLink>>;
  titleString: string;
  setTitleString: React.Dispatch<SetStateAction<string>>;
  linkString: string;
  setLinkString: React.Dispatch<SetStateAction<string>>;
  handleAddLink: () => void;
  handleUpdateLink: (name: string, link: string, index: string) => void;
}

export const linkContext = createContext<context | null>(null);

export default function LinkContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [addLink, setAddLink] = useState<boolean>(false);
  const [update, setUpdate] = useState<boolean>(false);

  const [titleString, setTitleString] = useState<string>("");
  const [linkString, setLinkString] = useState<string>("");

  const [updateLink, setUpdateLink] = useState<updateLink>({
    name: "",
    link: "",
    index: "0",
  });

  const handleAddLink = () => {
    if (!addLink) {
      setAddLink((prev) => (prev = true));
      document.body.classList.add("notoverflow");
      window.scrollTo(0, 0);
    } else {
      setAddLink((prev) => (prev = false));
      document.body.classList.remove("notoverflow");
    }
  };

  const handleUpdateLink = (name: string, link: string, index: string) => {
    if (!update) {
      setUpdate((prev) => (prev = true));
      setUpdateLink({ name: name, link: link, index: index });
      document.body.classList.add("notoverflow");
      window.scrollTo(0, 0);
    } else {
      setUpdate((prev) => (prev = false));
      document.body.classList.remove("notoverflow");
    }
  };

  const closeAddModal = () => {
    setAddLink((prev) => (prev = false));
    document.body.classList.remove("notoverflow");
  };
  const closeUpdateModal = () => {
    setUpdate((prev) => (prev = false));
    setUpdateLink({ name: "", link: "", index: "0" });
    document.body.classList.remove("notoverflow");
  };

  return (
    <linkContext.Provider
      value={{
        addLink,
        update,
        updateLink,
        setUpdateLink,
        closeAddModal,
        closeUpdateModal,
        titleString,
        linkString,
        setLinkString,
        setTitleString,
        handleAddLink,
        handleUpdateLink,
      }}
    >
      {children}
    </linkContext.Provider>
  );
}

export const useLinkContext = () => {
  const linkCont = useContext(linkContext);
  if (!linkCont) throw new Error("context not found");
  return linkCont;
};
