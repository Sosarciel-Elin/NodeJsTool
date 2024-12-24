import { SourceThingRow } from "./SourceThing";




export type SourceThingTable = (Partial<SourceThingRow> & Pick<SourceThingRow,'id'>)[];