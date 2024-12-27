import {Command, program} from "commander";
import fs from "node:fs/promises";
import {encodeWasm} from "@valkyrie-language/legion-wasm32-wasi";
import path from "path";

export function matchEncode() {
    program
    .command('encode <INPUT> [OUTPUT]')
    .description('Encode a file')
    .option('--dry-run', 'Simulate the encoding without actually encoding')
    .option('--generate-dwarf', 'Generate DWARF debug information')
    .action(encodeCommand);
}

interface EncodeOptions {
    dryRun: boolean;
    generateDwarf: boolean,
}

export async function encodeCommand(input: string, output: string | undefined, options: EncodeOptions) {
    try {
        let inputText = await fs.readFile(input, 'utf8');
        let bytes = encodeWasm(inputText, {
            generateDwarf: options.generateDwarf || false
        })
        if (output === undefined) {
            let inputPath = path.parse(input);
            output = `${inputPath.dir}/${inputPath.name}.wasm`;
        }
        await fs.writeFile(output, bytes);
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}