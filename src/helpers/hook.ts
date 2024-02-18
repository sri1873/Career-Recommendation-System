import { useEffect } from "react";
import Error from "./Error";
import { useDispatch } from "react-redux";
import { setErrorMsg } from "../store";
import { Dispatch } from "@reduxjs/toolkit";
import { useFullScreenHandle } from "react-full-screen";

type EventTypeCPC = "paste" | "copy" | "cut"
type EventTypeEF = 'blur'
interface RestrictCopyPasteProps {
    window: Window
    actions: [EventTypeCPC?, EventTypeCPC?, EventTypeCPC?]
}
interface RestrictEscapeProps {
    window: Window
    actions: [EventTypeEF?, EventTypeEF?]
}
export const useRestrictCopyPaste = (props: RestrictCopyPasteProps) => {
    const dispatch: Dispatch = useDispatch();
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
        dispatch(setErrorMsg("Copying and pasting is not allowed!"))
    };
}
export const useRestrictescape = (props: RestrictEscapeProps) => {
    const dispatch: Dispatch = useDispatch();
    const handle = useFullScreenHandle();
    useEffect(() => {
        props.actions?.forEach((action) => {
            action && window.addEventListener(action, preventEscape);
        })
        return () => {
            props.actions.forEach((action) => {
                action && window.removeEventListener(action, preventEscape);
            })
        };
    }, [props.window, props.actions]);

    const preventEscape = (e: Event) => {
        e.preventDefault();
        if (handle.active === false) {
            if (document.fullscreenElement !== null) {
                document.exitFullscreen();
            }
            dispatch(setErrorMsg("Test window lost focus!"))
        }
    };
}