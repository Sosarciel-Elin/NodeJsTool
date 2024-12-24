import { SchemaString } from "@zwa73/utils";
import { column, FormatToRow, StringToType } from "./Common";


const RenderDataList = [
    '@obj_S flat' as const,
    'SchemaString' as SchemaString,
];
const TagList = [[
    "noQuality"       as const,
    "noMaterialChange"as const,
    'SchemaString' as SchemaString,
]];
const FilterList = [[
    "gacha" as const,
    'SchemaString' as SchemaString,
]]
const CatrgoryList = [
    "_item" as const,
    'SchemaString' as SchemaString,
]

export const SourceThingFormat = {
    id           : column(0 ,'string'  ,'')             ,
    name_JP      : column(1 ,'string'  ,'')             ,
    unknown_JP   : column(2 ,'string'  ,'')             ,
    unit_JP      : column(3 ,'string'  ,'')             ,
    naming       : column(4 ,'string'  ,'')             ,
    name         : column(5 ,'string'  ,'')             ,
    unit         : column(6 ,'string'  ,'')             ,
    unknown      : column(7 ,'string'  ,'')             ,
    category     : column(8 ,'string'  ,'',CatrgoryList),
    "***"        : column(9 ,'string'  ,'')             ,
    sort         : column(10,'int'     ,100)            ,
    _tileType    : column(11,'string'  ,'')             ,
    _idRenderData: column(12,'string'  ,'@obj_S flat',RenderDataList),
    tiles        : column(13,'int[]'   ,[])             ,
    altTiles     : column(14,'int[]'   ,[])             ,
    anime        : column(15,'int[]'   ,[])             ,
    skins        : column(16,'int[]'   ,[])             ,
    size         : column(17,'int[]'   ,[])             ,
    colorMod     : column(18,'int'     ,100)            ,
    colorType    : column(19,'string'  ,'')             ,
    recipeKey    : column(20,'string'  ,'')             ,
    factory      : column(21,'string[]',[])             ,
    components   : column(22,'string[]',['-'])          ,
    disassemble  : column(23,'string[]',[])             ,
    defMat       : column(24,'string'  ,'oak')          ,
    tierGroup    : column(25,'string'  ,'')             ,
    value        : column(26,'int'     ,0)              ,
    LV           : column(27,'int'     ,1)              ,
    chance       : column(28,'int'     ,1000)           ,
    quality      : column(29,'int'     ,0)              ,
    HP           : column(30,'int'     ,100)            ,
    weight       : column(31,'int'     ,100)            ,
    electricity  : column(32,'int'     ,0)              ,
    trait        : column(33,'string[]',[])             ,
    elements     : column(34,'string[]',[])             ,
    range        : column(35,'int'     ,1)              ,
    attackType   : column(36,'string'  ,'')             ,
    offense      : column(37,'int[]'   ,[])             ,
    substats     : column(38,'int[]'   ,[])             ,
    defense      : column(39,'int[]'   ,[])             ,
    lightData    : column(40,'string'  ,'')             ,
    idExtra      : column(41,'string'  ,'')             ,
    idToggleExtra: column(42,'string'  ,'')             ,
    idActorEx    : column(43,'string'  ,'')             ,
    idSound      : column(44,'string'  ,'')             ,
    tag          : column(45,'string[]',[],TagList)     ,
    workTag      : column(46,'string'  ,'')             ,
    filter       : column(47,'string[]',[],FilterList)  ,
    roomName_JP  : column(48,'string'  ,'')             ,
    roomName     : column(49,'string'  ,'')             ,
    detail_JP    : column(50,'string'  ,'')             ,
    detail       : column(51,'string'  ,'')             ,
};

export type SourceThingFormat = typeof SourceThingFormat;

export type SourceThingRow = FormatToRow<SourceThingFormat>;
