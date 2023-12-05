"use client";
import { SunIcon, MoonIcon } from "@heroicons/react/20/solid"
import { useState } from 'react';


export default function ToggleMode() {
    // this will the set the theme for the website default is false i.e dark theme
    const [mode, setMode] = useState<boolean>(false);
    function handleMode() {
        if (mode) {
            setMode(prev => prev = false);
            document.documentElement.classList.remove('theme-light');
            return;
        }

        setMode(prev => prev = true);
        document.documentElement.classList.add('theme-light');
    }
    return (
        <button onClick={handleMode} className="mode-toggler">
            {mode ?
                <MoonIcon width={30} height={30} />
                :
                <SunIcon width={30} height={30} />
            }
        </button>
    )
}