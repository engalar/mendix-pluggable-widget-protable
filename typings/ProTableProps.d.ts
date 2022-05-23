/**
 * This file was generated from ProTable.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix UI Content Team
 */
import { CSSProperties } from "react";
import { EditableValue, ListValue, ListAttributeValue } from "mendix";

export interface ProTableContainerProps {
    name: string;
    class: string;
    style?: CSSProperties;
    tabIndex?: number;
    sampleText: string;
    attribute?: EditableValue<string>;
    datasource: ListValue;
    att2?: ListAttributeValue<string>;
}

export interface ProTablePreviewProps {
    className: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    sampleText: string;
    attribute: string;
    datasource: {} | { type: string } | null;
    att2: string;
}
