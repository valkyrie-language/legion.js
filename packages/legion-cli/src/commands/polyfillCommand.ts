import {Command, program} from 'commander';
import fs from 'node:fs/promises';
import {wasiPolyfill} from '@valkyrie-language/legion-wasm32-wasi';
import path from 'path';

export function registerPolyfill() {
    program
        .command('polyfill <INPUT> [OUTPUT]')
        .alias('shim')
        .description('Convert wasi component to js modules')
        .option('--dry-run', 'Simulate the encoding without actually encoding')
        .option('--instantiation', 'Generate DWARF debug information')
        .option('--guest', 'Generate guest shim')
        .option('--generate-dwarf', 'Generate DWARF debug information')
        .action(polyfillCommand);
}
export interface PolyfillOptions {
    guest: boolean;
    dryRun: boolean;
    instantiation: boolean;
}
export async function polyfillCommand(input: string, output: string | undefined, options: PolyfillOptions) {
    try {
        let inputBytes = await fs.readFile(input);
        let files = wasiPolyfill(inputBytes, {
            guest: options.guest,
            debug: false,
            instantiation: options.instantiation,
            name: 'index',
            shim: []
        });
        if (output === undefined) {
            let inputPath = path.parse(input);
            output = `${inputPath.dir}/${inputPath.name}/`;
        }

        for (let file of files) {
            if (options.dryRun) {
                console.log(`[Dry Run] Writing to ${output}`);
            } else {
                console.log(`Writing to ${output}`);
                await fs.writeFile(`${output}/${file[0]}`, file[1]);
            }
        }
    } catch (e) {
        console.error(e);
        process.exit(1);
    }
}