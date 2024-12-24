import { RowToJsonList } from "./Common";
import { SourceRecipeRow } from "./SourceRecipe";
import { SourceThingRow } from "./SourceThing";




export type SourceThingTable = RowToJsonList<SourceThingRow,'id'>;

export type SourceRecipeTable = RowToJsonList<SourceRecipeRow,'id'|'factory'|'ing1'>;