import { SchemaString } from "@zwa73/utils";
import { column, FormatToRow } from "./Common";

const TypeList = [
    "Food"       as const,
    "Resource"   as const,
    "None"       as const,
    "Dye"        as const,
    "Butcher"    as const,
    "Grind"      as const,
    "Sculpture"  as const,
    "Talisman"   as const,
    "Scratch"    as const,
    "Incubator"  as const,
    "Fortune"    as const,
    "" as SchemaString,
];
const FactoryList = [
    "Mill"          as const,
    "Spinner"       as const,
    "SawMill"       as const,
    "StoneCutter"   as const,
    "GemCutter"     as const,
    "Kiln"          as const,
    "Smelter"       as const,
    "DyeMaker"      as const,
    "Butcher"       as const,
    "BarrelMaker"   as const,
    "Grindstone"    as const,
    "Sculpture"     as const,
    "Talisman"      as const,
    "Scratch"       as const,
    "Incubator"     as const,
    "Fortune"       as const,
    "" as SchemaString,
];
const TagList = [[
    "known"     as const,
    "noCarbone" as const,
    "mod_eject" as const,
    "rust"      as const,
    "" as SchemaString,
]];



export const SourceRecipeFormat = {
    id       : column(0 , 'int'      , 0),
    factory  : column(1 , 'string'   , '',FactoryList),
    type     : column(2 , 'string'   , 'None', TypeList),
    thing    : column(3 , 'string'   , ''),
    num      : column(4 , 'string'   , '1'),
    sp       : column(5 , 'int'      , 1),
    time     : column(6 , 'int'      , 1),
    ing1     : column(7 , 'string[]' , []),
    ing2     : column(8 , 'string[]' , []),
    ing3     : column(9 , 'string[]' , []),
    tag      : column(10, 'string[]' , [],TagList)
};

export type SourceRecipeFormat = typeof SourceRecipeFormat;

export type SourceRecipeRow = FormatToRow<SourceRecipeFormat>;