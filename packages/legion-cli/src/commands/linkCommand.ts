import { program } from 'commander';
import chalk from 'chalk';
import { CommonOptions } from '../helpers/types.js';

export function registerLinkCommand() {
    program
        .command('link [package]')
        .description('Link local package for development')
        .option('--force', 'Force linking')
        .option('--global', 'Link globally')
        .action(linkCommand);
}

async function linkCommand(pkg: string, options: CommonOptions & { force?: boolean; global?: boolean }) {
    console.log(chalk.blue(`Linking package: ${pkg || 'current directory'}`));
    // TODO: Implement link logic
}