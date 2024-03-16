import { Dispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useFullScreenHandle } from "react-full-screen";
import { useDispatch } from "react-redux";
import { setErrorMsg } from "../store";

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
        const preventPaste = (e: Event) => {
            e.preventDefault();
            dispatch(setErrorMsg("Copying and pasting is not allowed!"))
        };
        props.actions?.forEach((action) => {
            action && window.addEventListener(action, preventPaste);
        })
        return () => {
            props.actions.forEach((action) => {
                action && window.removeEventListener(action, preventPaste);
            })
        };
    }, [props.window, props.actions,dispatch]);

}
export const useRestrictescape = (props: RestrictEscapeProps) => {
    const dispatch: Dispatch = useDispatch();
    const handle = useFullScreenHandle();
    useEffect(() => {
        const preventEscape = (e: Event) => {
            e.preventDefault();
            if (handle.active === false) {
                if (document.fullscreenElement !== null) {
                    document.exitFullscreen();
                }
                dispatch(setErrorMsg("Test window lost focus!"))
            }
        };
        props.actions?.forEach((action) => {
            action && window.addEventListener(action, preventEscape);
        })
        return () => {
            props.actions.forEach((action) => {
                action && window.removeEventListener(action, preventEscape);
            })
        };
    }, [props.window, props.actions, dispatch,handle]);


}