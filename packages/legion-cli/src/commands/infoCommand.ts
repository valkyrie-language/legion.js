import { program } from 'commander';
import chalk from 'chalk';
import { CommonOptions } from '../helpers/types.js';

export function registerInfoCommand() {
    program
        .command('info [package]')
        .description('Show information about packages')
        .option('--json', 'Output in JSON format')
        .action(infoCommand);
}

async function infoCommand(pkg: string, options: CommonOptions & { json?: boolean }) {
    console.log(chalk.blue(`Showing info for: ${pkg || 'project'}`));
    // TODO: Implement info logic
}