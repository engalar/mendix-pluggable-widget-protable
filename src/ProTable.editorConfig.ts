import { Properties, StructurePreviewProps, transformGroupsIntoTabs } from "./piw-utils-internal";
import { ProTablePreviewProps } from "../typings/ProTableProps";

export function getProperties(
    values: ProTablePreviewProps,
    defaultProperties: Properties,
    platform: "web" | "desktop"
): Properties {
    console.log(values);
    if (platform === "web") {
        transformGroupsIntoTabs(defaultProperties);
    }
    return defaultProperties;
}
export function getPreview(values: ProTablePreviewProps): StructurePreviewProps | null {
    console.log(values);
    return null;
}
