import { useState, useEffect } from "react";

export function useTypewriter({
    texts,
    typeSpeed = 130,
    eraseSpeed = 80,
    pauseAfter = 1800,
}) {
    const [displayed, setDisplayed] = useState("");
    const [phase, setPhase] = useState("typing"); // "typing" | "pausing" | "erasing"
    const [currentIndex, setCurrentIndex] = useState(0);

    const currentText = texts[currentIndex];

    useEffect(() => {
        let timeout;

        if (phase === "typing") {
            if (displayed.length < currentText.length) {
                // Still typing — add one character
                timeout = setTimeout(() => {
                    setDisplayed(currentText.slice(0, displayed.length + 1));
                }, typeSpeed);
            } else {
                // Finished typing — pause before erasing
                timeout = setTimeout(() => setPhase("erasing"), pauseAfter);
            }
        } else if (phase === "erasing") {
            if (displayed.length > 0) {
                // Still erasing — remove one character
                timeout = setTimeout(() => {
                    setDisplayed(currentText.slice(0, displayed.length - 1));
                }, eraseSpeed);
            } else {
                // Finished erasing — move to next text and start typing
                setCurrentIndex((prev) => (prev + 1) % texts.length);
                setPhase("typing");
            }
        }

        return () => clearTimeout(timeout);
    }, [displayed, phase, currentText, typeSpeed, eraseSpeed, pauseAfter, texts.length]);

    return { displayed, currentIndex };
}
