"use client";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

export default function ToggleMode() {
  // this will the set the theme for the website default is false i.e dark theme
  const modeValue =
    typeof window !== "undefined" && window.localStorage.getItem("mode")
      ? JSON.parse(window.localStorage.getItem("mode") || "")
      : false;
  const [mode, setMode] = useState<boolean | null | string>(modeValue);
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (mode) {
      document.documentElement.classList.add("theme-dark");
    } else {
      document.documentElement.classList.remove("theme-dark");
    }

    window.localStorage.setItem("mode", JSON.stringify(mode));
  }, [mode]);

  if (!isClient) return false;
  return (
    <button onClick={() => setMode((prev) => !prev)} className="mode-toggler">
      {mode ? (
        <SunIcon width={30} height={30} />
      ) : (
        <MoonIcon width={30} height={30} />
      )}
    </button>
  );
}
