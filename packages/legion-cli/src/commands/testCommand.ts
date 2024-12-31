import { program } from 'commander';
import chalk from 'chalk';
import { CommonOptions } from '../helpers/types';
import { readConfig } from '../helpers/config';

export function registerTestCommand() {
    program
        .command('test')
        .description('Run tests')
        .option('--watch', 'Watch mode')
        .option('--coverage', 'Generate coverage report')
        .option('--verbose', 'Verbose output')
        .action(testCommand);
}

async function testCommand(options: CommonOptions & { coverage?: boolean; verbose?: boolean }) {
    const config = await readConfig();
    console.log(chalk.blue('Running tests'));
    // TODO: Implement test logic
}