import { program } from 'commander';
import chalk from 'chalk';
import { CommonOptions } from '../helpers/types';
import { readConfig } from '../helpers/config';

export function registerCreateCommand() {
    program
        .command('create [name]')
        .description('Create a new project from template')
        .option('--template <template>', 'Specify template')
        .option('--dry-run', 'Simulate creation')
        .action(createCommand);
}

async function createCommand(name: string, options: CommonOptions & { template?: string }) {
    if (!name) {
        console.log(chalk.red('Please specify a project name'));
        return;
    }

    console.log(chalk.blue(`Creating new project: ${name}`));
    if (options.template) {
        console.log(chalk.blue(`Using template: ${options.template}`));
    }

    // TODO: Implement project creation logic
}