import {program} from 'commander';
import chalk from 'chalk';
import {CommonOptions} from '../helpers/types.js';
import {readConfig} from '../helpers/config.js';
import {watEncode} from '@valkyrie-language/legion-wasm32-wasi';
import fs from 'node:fs/promises';

export function registerRunCommand() {
    program
        .command('run [script]')
        .description('Run a script defined in legion.json')
        .option('--watch', 'Watch for changes')
        .option('--debug', 'Run in debug mode')
        .option('--release', 'Run in release mode')
        .option('--mode <mode>', 'Specify run mode')
        .action(runCommand);
}

export interface RunOptions extends CommonOptions {
    access?: 'public' | 'private';
}

async function runCommand(script: string, options: RunOptions) {
    const config = await readConfig();

    if (!script) {
        console.log(chalk.red('Please specify a script to run'));
        return;
    }

    if (script.endsWith('wat')) {
        const wat = await fs.readFile(script, 'utf-8');
        const wasm = watEncode(wat, {
            generateDwarf: true
        });
        const { instance } = await WebAssembly.instantiate(wasm, {});
        console.log(instance);
    }

    // if (!config.scripts?.[script]) {
    //     console.log(chalk.red(`Script "${script}" not found in legion.json`));
    //     return;
    // }

    console.log(chalk.blue(`Running script: ${script}`));
    // TODO: Implement script running logic
}
//
// program
// .description('Run WebAssembly code in Node.js')
// .argument('<wasmFile>', 'Path to the WebAssembly file')
// .action(async (wasmFile) => {
//     try {
//         // 读取 WASM 文件
//         const wasmBuffer = fs.readFileSync(path.resolve(wasmFile));
//
//         // 实例化 WASM 模块
//         const { instance } = await WebAssembly.instantiate(wasmBuffer);
//
//         // 从 WASM 模块中获取导出的函数
//         const { add, subtract } = instance.exports;
//
//         // 调用 WASM 函数
//         console.log(chalk.green(`1 + 2 = ${add(1, 2)}`));
//         console.log(chalk.green(`5 - 3 = ${subtract(5, 3)}`));
//     } catch (err) {
//         console.error(chalk.red('Error loading WASM:', err));
//     }
// });
//
// program.parse(process.argv);