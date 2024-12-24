

import { integer } from "@deepkit/type";

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

export type Column<T extends VaildExcelString, L = undefined> = {
    i:integer,
    t:T,
    d:StringToType<T>|undefined,
    literal:L
};

export const column = <T extends VaildExcelString, L = undefined>
    (i:number,t:T,d:StringToType<T>|undefined=undefined,literal:L=undefined as L):Column<T,L> =>
        ({i,t,d,literal});

export type FormatToRow<T extends Record<string,Column<any,any>>>= {
    [P in keyof T] : T[P]['literal'] extends Array<infer L>
        ? T[P]['literal']['length'] extends 0
            ? StringToType<T[P]['t']> : L
        : StringToType<T[P]['t']>
};


export type RowToJsonList
    <T extends Record<string,any>,R extends string> =
    (Partial<T> & Pick<T,R>)[];

