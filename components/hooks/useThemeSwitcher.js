import {useEffect, useState} from "react";

const useThemeSwitcher = () => {
    const [mode, setMode] = useState("");

    useEffect(() => {
        const userPreference = window.localStorage.getItem("theme") || "light";
        setMode(userPreference);
        document.documentElement.classList.toggle("dark", userPreference === "dark");
    }, []);

    const setThemeMode = (selectedMode) => {
        setMode(selectedMode);
        window.localStorage.setItem("theme", selectedMode);
        document.documentElement.classList.toggle("dark", selectedMode === "dark");
    };

    return [mode, setThemeMode];
};

export default useThemeSwitcher;
