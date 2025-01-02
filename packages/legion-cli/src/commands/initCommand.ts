import { program } from 'commander';
import chalk from 'chalk';
import { CommonOptions } from '../helpers/types.js';

export function registerInitCommand() {
    program
        .command('init')
        .description('Initialize a new Legion project')
        .option('--yes', 'Skip prompts and use defaults')
        .option('--template <template>', 'Use specific template')
        .action(initCommand);
}

async function initCommand(options: CommonOptions & { yes?: boolean; template?: string }) {
    console.log(chalk.blue('Initializing new Legion project'));
    // TODO: Implement init logic
}