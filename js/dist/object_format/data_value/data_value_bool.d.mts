import { PropertyType } from "../property_type/property_type.mjs";
export declare class DataValueBool {
    #private;
    constructor(inner: boolean);
    serialize(): "true" | "false";
    static deserialize(serializedDataValueType: PropertyType, serializedBool: string): DataValueBool | undefined;
    getType(): PropertyType;
}
