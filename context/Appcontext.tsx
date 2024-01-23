import {
  createContext,
  ReactNode,
  useState,
  useContext,
  SetStateAction,
} from "react";

interface context {
  addLink: boolean;
  closeAddModal: () => void;
  titleString: string;
  setTitleString: React.Dispatch<SetStateAction<string>>;
  linkString: string;
  setLinkString: React.Dispatch<SetStateAction<string>>;
  handleAddLink: () => void;
}

export const linkContext = createContext<context | null>(null);

export default function LinkContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [addLink, setAddLink] = useState<boolean>(false);
  const [titleString, setTitleString] = useState<string>("");
  const [linkString, setLinkString] = useState<string>("");

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

  const closeAddModal = () => {
    setAddLink((prev) => (prev = false));
    document.body.classList.remove("notoverflow");
  };
  return (
    <linkContext.Provider
      value={{
        addLink,
        closeAddModal,
        titleString,
        linkString,
        setLinkString,
        setTitleString,
        handleAddLink,
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
