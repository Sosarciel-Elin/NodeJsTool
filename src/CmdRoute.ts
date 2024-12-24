import { program } from "commander";
import { CmdBuildXlsx } from "./Command/BuildXlsx";



export async function cliRoute() {
    CmdBuildXlsx(program);
    program.parse(process.argv);
}