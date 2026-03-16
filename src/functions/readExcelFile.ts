import type { Users } from "@customTypes/UserType";
import * as xlsx from "xlsx";


export default async function readExcelFile(excelFile: File): Promise<Users[]> {
  const uint8Array = new Uint8Array(await excelFile.arrayBuffer());
  try {
    const file = xlsx.read(uint8Array);
    let data: Users[] = [];
    const sheets = file.SheetNames;
    for (let i = 0; i < sheets.length; i++) {
      const temp = xlsx.utils.sheet_to_json<Users>(file.Sheets[sheets[i]]);
      temp.forEach((res) => {
        data.push(res);
      });
    }
    return data;
  } catch (err) {
    console.log(err);
    return []; // Importante: en caso de error, retorna un array vacío para mantener el tipo consistente
  }
}