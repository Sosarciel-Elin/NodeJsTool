import { Column, SourceRecipeFormat, SourceThingFormat } from "./Schema";
import { PRecord } from "@zwa73/utils";
import exceljs from 'exceljs';


export const columnCount = (format: Record<string, Column<any>>)=>
    Math.max(...Object.values(format).map(col => col.i));

export const getHeader = (format: Record<string, Column<any>>) =>
    Object.entries(format).reduce((acc,[k, v]) =>
        (acc[v.i] = k,  acc), Array<string>(columnCount(format)).fill(''));

export const getTypes = (format: Record<string, Column<any>>) =>
    Object.entries(format).reduce((acc,[,v]) =>
        (acc[v.i] = v.t , acc), Array<string>(columnCount(format)).fill(''));

const a2s = (i:any) => Array.isArray(i) ? i.join(','):i;

//export const parseToXlsx = <T extends Record<string, Column<any>>>
//    (format: T, data: Array<Record<string, any>>) => {
//    const headers = getHeader(format);
//    const types = getTypes(format);
//    return XLSX.utils.aoa_to_sheet([headers,types,[],
//        ...data.map(item => headers.map(header => a2s(item[header]) ?? a2s(format[header].d ?? ''))
//    )]);
//};


export const addDataToXlsxSheet = <T extends Record<string, Column<any>>>
    (workbook:exceljs.Workbook,sheetname:string,format: T, data: Array<Record<string, any>>) => {
    const headers = getHeader(format);
    const types = getTypes(format);

    const worksheet = workbook.addWorksheet(sheetname);
    // 添加表头
    worksheet.addRow(headers);
    worksheet.addRow(types);
    worksheet.addRow([]); // 空行

    // 添加数据
    data.forEach(item => {
        const row = headers.map(header => {
            const value = item[header] ?? format[header].d ?? '';
            if (Array.isArray(value))
                return value.join(','); // 将数组转换为逗号分隔的字符串

            return value;
        });
        worksheet.addRow(row);
    });

    return workbook; // 返回工作簿
};

export type SourceFormat = Record<string, Column<any,any>>;

export const NameFormatMap:PRecord<string,SourceFormat> = {
    things:SourceThingFormat,
    recipes:SourceRecipeFormat,
}
