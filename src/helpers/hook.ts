import { useEffect } from "react";
import Error from "./Error";
import { useDispatch } from "react-redux";
import { setErrorMsg } from "../store";
import { Dispatch } from "@reduxjs/toolkit";

type EventType = "paste" | "copy" | "cut"
interface RestrictCopyPasteProps {
    window: Window
    actions: [EventType?, EventType?, EventType?]
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