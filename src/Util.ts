import * as XLSX from "xlsx";
import { Column, SourceThingFormat } from "./Schema";
import { PRecord } from "@zwa73/utils";



export const columnCount = (format: Record<string, Column<any>>)=>
    Math.max(...Object.values(format).map(col => col.i));

export const getHeader = (format: Record<string, Column<any>>) =>
    Object.entries(format).reduce((acc,[k, v]) =>
        (acc[v.i] = k,  acc), Array<string>(columnCount(format)).fill(''));

export const getTypes = (format: Record<string, Column<any>>) =>
    Object.entries(format).reduce((acc,[,v]) =>
        (acc[v.i] = v.t , acc), Array<string>(columnCount(format)).fill(''));

const a2s = (i:any) => Array.isArray(i) ? i.join(','):i;

export const parseToXlsx = <T extends Record<string, Column<any>>>
    (format: T, data: Array<Record<string, any>>) => {
    const headers = getHeader(format);
    const types = getTypes(format);
    return XLSX.utils.aoa_to_sheet([headers, types,
        ...data.map(item => headers.map(header => a2s(item[header]) ?? a2s(format[header].d))
    )]);
};

export type SourceFormat = Record<string, Column<any,any>>;

export const NameFormatMap:PRecord<string,SourceFormat> = {
    things:SourceThingFormat
}
