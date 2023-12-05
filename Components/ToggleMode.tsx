"use client";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

export default function ToggleMode() {
  // this will the set the theme for the website default is false i.e dark theme
  const [mode, setMode] = useState<boolean | null | string>(false);


  useEffect(() => {
    const modeValue = typeof window !== 'undefined' && window.localStorage ? JSON.parse(window.localStorage.getItem('mode') || "") : null;
    console.log(modeValue);
    if (modeValue && window.localStorage) {
      setMode(prev => prev = modeValue);
    }
  }, [])


  useEffect(() => {
    if (mode) {
      document.documentElement.classList.add("theme-light");
    }
    else {
      document.documentElement.classList.remove("theme-light");
    }

    window.localStorage.setItem('mode', JSON.stringify(mode));
  }, [mode])


  return (
    <button onClick={() => setMode(prev => !prev)} className="mode-toggler">
      {mode ? (
        <MoonIcon width={30} height={30} />
      ) : (
        <SunIcon width={30} height={30} />
      )}
    </button>
  );
}
