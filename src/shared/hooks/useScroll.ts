import { useEffect, useState } from "react";

export type IDirection = "up" | "down";

interface ScrollState {
    direction: IDirection | null;
    isTop: boolean;
}

const useScroll = (threshold: number = 4): ScrollState => {
    const [scrollState, setScrollState] = useState<ScrollState>({
        direction: null,
        isTop: true,
    });

    useEffect(() => {
        let lastScrollTop = 0;

        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const isTop = scrollTop <= 0;
            const distance = Math.abs(scrollTop - lastScrollTop);

            if (distance < threshold) return;

            const direction = scrollTop > lastScrollTop ? "down" : "up";

            setScrollState((prev) => ({
                direction: direction !== prev.direction ? direction : prev.direction,
                isTop,
            }));

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [threshold]);

    return scrollState;
};

export default useScroll;
