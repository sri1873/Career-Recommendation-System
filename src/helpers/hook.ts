import { useEffect } from "react";

type EventType = "paste" | "copy" | "cut"

interface RestrictCopyPasteProps {
    window: Window
    actions: [EventType?, EventType?, EventType?]
}
export const useRestrictCopyPaste = (props: RestrictCopyPasteProps) => {
    useEffect(() => {
        props.actions?.forEach((action) => {
            action && window.addEventListener(action, preventPaste);
        })
        return () => {
            props.actions.forEach((action) => {
                action && window.removeEventListener(action, preventPaste);
            })
        };
    }, [props.window, props.actions]);

    const preventPaste = (e: Event) => {
        e.preventDefault();
        const message = "Copying and pasting is not allowed!";
        displayMessage(message);
    };

    const displayMessage = (message: string) => {
        const messageElement = document.createElement("div");
        messageElement.textContent = message;
        messageElement.style.position = "fixed";
        messageElement.style.top = "10px";
        messageElement.style.left = "50%";
        messageElement.style.transform = "translateX(-50%)";
        messageElement.style.backgroundColor = "#ff0000";
        messageElement.style.color = "#ffffff";
        messageElement.style.padding = "10px";
        messageElement.style.borderRadius = "5px";
        messageElement.style.zIndex = "9999";
        document.body.appendChild(messageElement);

        setTimeout(() => {
            document.body.removeChild(messageElement);
        }, 3000); // Remove message after 3 seconds
    };
}