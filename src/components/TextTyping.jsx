import { useTypewriter } from "/src/hook/useTypewriter";

export default function TextTyping() {
    const { displayed } = useTypewriter({
        text,
        typeSpeed: speed,
        eraseSpeed: speed,
        pauseAfter: Infinity, // type-once: never erase
    });

    return <span>{displayed}</span>
}