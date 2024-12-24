import { Command } from 'commander';
import fs from 'fs';
import { UtilFT } from '@zwa73/utils';
import path from 'pathe';
import { NameFormatMap, addDataToXlsxSheet } from '@src/Util';
import exceljs from 'exceljs';

export const CmdBuildXlsx = (program: Command) => program
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
        const workbook = new exceljs.Workbook();
        fileDatas.forEach(({data,name}) => {
            const format = NameFormatMap[name];
            if(format==null){
                console.log("未找到格式",name);
                return;
            }
            addDataToXlsxSheet(workbook,name,format,data);
        });
        // 将工作簿写入文件
        workbook.xlsx.writeFile(output);
        console.log(`XLSX 文件已成功生成: ${output}`);
    });