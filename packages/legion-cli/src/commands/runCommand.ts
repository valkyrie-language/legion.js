import { program } from 'commander';
import chalk from 'chalk';
import { CommonOptions } from '../helpers/types';
import { readConfig } from '../helpers/config';

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

async function runCommand(script: string, options: CommonOptions) {
    const config = await readConfig();
    
    if (!script) {
        console.log(chalk.red('Please specify a script to run'));
        return;
    }

    if (!config.scripts?.[script]) {
        console.log(chalk.red(`Script "${script}" not found in legion.json`));
        return;
    }

    console.log(chalk.blue(`Running script: ${script}`));
    // TODO: Implement script running logic
}