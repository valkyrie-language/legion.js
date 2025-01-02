import { program } from 'commander';
import chalk from 'chalk';
import { CommonOptions } from '../helpers/types.js';

export function registerExecCommand() {
    program
        .command('exec <command>')
        .description('Execute a command in project context')
        .option('--package <package>', 'Specify package to run in')
        .option('--workspace', 'Run in all workspaces')
        .action(execCommand);
}

async function execCommand(command: string, options: CommonOptions & { package?: string; workspace?: boolean }) {
    console.log(chalk.blue(`Executing command: ${command}`));
    // TODO: Implement command execution logic
}