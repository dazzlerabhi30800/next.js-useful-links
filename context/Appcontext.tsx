import { createContext, ReactNode, useState, useContext } from "react";

interface context {
  show: boolean;
  handleShow: () => void;
}

const linkContextData = {
  show: false,
  handleShow: () => {},
};

export const linkContext = createContext<context>(linkContextData);

export default function LinkContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [show, setShow] = useState<boolean>(false);

  const handleShow = () => {
    setShow((prev) => !prev);
  };

  return (
    <linkContext.Provider value={{ show, handleShow }}>
      {children}
    </linkContext.Provider>
  );
}

export const useLinkContext = () => {
  const linkCont = useContext(linkContext);
  return linkCont;
};
