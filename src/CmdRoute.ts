import { program } from "commander";
import { CmdBuildSrt } from "./Command/BuildXlsx";



export async function cliRoute() {
    CmdBuildSrt(program);
    program.parse(process.argv);
}