import { useState, useEffect } from "react";

export function useTypewriter({
    text,
    typeSpeed = 80,
    eraseSpeed = 40,
    pauseAfter = 1800,
}) {
    const [displayed, setDisplayed] = useState("");
    const [phase, setPhase] = useState("typing"); // "typing" | "erasing"

    useEffect(() => {
        let timeout;

        if (phase === "typing") {
            if (displayed.length < text.length) {
                timeout = setTimeout(() => {
                    setDisplayed(text.slice(0, displayed.length + 1));
                }, typeSpeed);
            } else {
                timeout = setTimeout(() => setPhase("erasing"), pauseAfter);
            }
        } else if (phase === "erasing") {
            if (displayed.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayed(text.slice(0, displayed.length - 1));
                }, eraseSpeed);
            } else {
                setPhase("typing");
            }
        }

        return () => clearTimeout(timeout);
    }, [displayed, phase, text, typeSpeed, eraseSpeed, pauseAfter]);

    return { displayed, isDone: displayed === text };
}
