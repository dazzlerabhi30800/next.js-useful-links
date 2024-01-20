"use client";

import LinkContextProvider from "@/context/Appcontext";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <LinkContextProvider>{children}</LinkContextProvider>;
}
