import { Command } from 'commander';
import fs from 'fs';
import { UtilFT } from '@zwa73/utils';
import path from 'pathe';
import { NameFormatMap, parseToXlsx } from '@src/Util';
import * as XLSX from "xlsx";



export const CmdBuildSrt = (program: Command) => program
    .command("Build-Xlsx")
    .alias("buildxlsx")
    .description("根据json文件夹生成xlsx")
    .argument("<inputDir>", "输入文件夹")
    .argument("<output>", "输出文件")
    .action(async (inputDir:string,output:string) => {
        const files = await fs.promises.readdir(inputDir);
        const fileDatas = await Promise.all(files
            .filter(f => f.endsWith(".json"))
            .map(async f => ({
                data:await UtilFT.loadJSONFile(path.join(inputDir,f)) as any,
                name:path.parse(f).name,
            })));
        const workbook = XLSX.utils.book_new();
        fileDatas.forEach(({data,name}) => {
            const format = NameFormatMap[name];
            if(format==null){
                console.log("未找到格式",name);
                return;
            }
            const worksheet = parseToXlsx(format,data);
            XLSX.utils.book_append_sheet(workbook, worksheet,name);
        });
        // 将工作簿写入文件
        XLSX.writeFile(workbook, output);
        console.log(`XLSX 文件已成功生成: ${output}`);
    });