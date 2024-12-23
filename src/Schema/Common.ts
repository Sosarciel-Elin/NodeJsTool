

import { integer } from "@deepkit/type";
import * as XLSX from "xlsx";
import fs from 'fs';

export type VaildExcelType = string | number | number[] | string[];
export type VaildExcelString = 'string'|'int'|'string[]'|'int[]';
export type TypeToString<T extends VaildExcelType> =
    T extends string ? 'string' :
    T extends integer ? 'int' :
    T extends string[] ? 'string[]' :
    T extends integer[] ? 'int[]' :
    never;

export type StringToType<T extends VaildExcelString> =
    T extends 'string' ? string :
    T extends 'int' ? integer :
    T extends 'string[]' ? string[] :
    T extends 'int[]' ? integer[] :
    never;

export type Column<T> = {
    i:integer,
    t:T
};
export const column = <T extends VaildExcelString>
    (i:number,t:T):Column<T> => ({i,t});

export type FormatToRow<T extends Record<string,Column<any>>>= {
    [P in keyof T] : StringToType<T[P]['t']>
};


export const columnCount = (format: Record<string, Column<any>>)=>
    Math.max(...Object.values(format).map(col => col.i));

export const getHeader = (format: Record<string, Column<any>>) =>
    Object.entries(format).reduce((acc,[k, v]) =>
        (acc[v.i] = k,  acc), Array<string>(columnCount(format)).fill(''));

export const getTypes = (format: Record<string, Column<any>>) =>
    Object.entries(format).reduce((acc,[,v]) =>
        (acc[v.i] = v.t , acc), Array<string>(columnCount(format)).fill(''));

// 解析为 XLSX
export const parseToXlsx = <T extends Record<string, Column<any>>>
    (format: T, data: Array<Record<string, any>>) => {
    const headers = getHeader(format);
    const types = getTypes(format);
    return XLSX.utils.aoa_to_sheet([headers, types,
        ...data.map(item => headers.map(header => item[header] ?? '')
    )]);
};


