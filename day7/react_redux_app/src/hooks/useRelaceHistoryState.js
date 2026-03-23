import { useCallback } from "react";

export function useReplaceHistoryState() {
    const replaceState = useCallback((data = {}, title = document.title, url) => {
        if (typeof window !== "undefined") {
            window.history.replaceState(data, title, url);
        }
    }, []);

    return replaceState;
}