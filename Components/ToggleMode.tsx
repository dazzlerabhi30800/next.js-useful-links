"use client";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

export default function ToggleMode() {
  // this will the set the theme for the website default is false i.e dark theme
  const [mode, setMode] = useState<boolean | null | string>(false);

  useEffect(() => {
    if (mode) {
      document.documentElement.classList.add("theme-dark");
    }
    else {
      document.documentElement.classList.remove("theme-dark");
    }

    window.localStorage.setItem('mode', JSON.stringify(mode));
  }, [mode])


  return (
    <button onClick={() => setMode(prev => !prev)} className="mode-toggler">
      {mode ? (
        <SunIcon width={30} height={30} />
      ) : (
        <MoonIcon width={30} height={30} />
      )}
    </button>
  );
}
