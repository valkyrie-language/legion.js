import { program } from 'commander';
import chalk from 'chalk';
import { CommonOptions } from '../helpers/types';

export function registerUnlinkCommand() {
    program
        .command('unlink [package]')
        .description('Unlink local package')
        .option('--global', 'Unlink globally')
        .action(unlinkCommand);
}

async function unlinkCommand(pkg: string, options: CommonOptions & { global?: boolean }) {
    console.log(chalk.blue(`Unlinking package: ${pkg || 'current directory'}`));
    // TODO: Implement unlink logic
}