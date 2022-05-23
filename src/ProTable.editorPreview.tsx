import { parseStyle } from "./piw-utils-internal";
import { createElement } from "react";
import { ProTablePreviewProps } from "../typings/ProTableProps";

declare function require(name: string): string;

export function preview(props: ProTablePreviewProps) {
    return <div style={parseStyle(props.style)}></div>;
}

export function getPreviewCss(): string {
    return require("./ui/index.scss");
}
