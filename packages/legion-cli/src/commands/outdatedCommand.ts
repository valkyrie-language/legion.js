import { program } from 'commander';
import chalk from 'chalk';
import { CommonOptions } from '../helpers/types.js';

export function registerOutdatedCommand() {
    program
        .command('outdated')
        .description('Check for outdated dependencies')
        .option('--json', 'Output in JSON format')
        .option('--all', 'Show all packages, not just outdated ones')
        .action(outdatedCommand);
}

async function outdatedCommand(options: CommonOptions & { json?: boolean; all?: boolean }) {
    console.log(chalk.blue('Checking for outdated packages'));
    // TODO: Implement outdated logic
}