import { program } from 'commander';
import chalk from 'chalk';
import { BuildOptions } from '../helpers/types';
import { readConfig } from '../helpers/config';

export function registerBuildCommand() {
    program
        .command('build')
        .description('Build the project')
        .option('--release', 'Build in release mode')
        .option('--debug', 'Build in debug mode')
        .option('-O1', 'Basic optimizations')
        .option('-O2', 'Medium optimizations')
        .option('-O3', 'Aggressive optimizations')
        .option('-Os', 'Optimize for size')
        .option('-Oz', 'Optimize for size aggressively')
        .action(buildCommand);
}

async function buildCommand(options: BuildOptions) {
    const config = await readConfig();
    
    console.log(chalk.blue('Building project with options:'));
    if (options.release) console.log(chalk.green('- Release mode'));
    if (options.debug) console.log(chalk.green('- Debug mode'));
    if (options.optimization) console.log(chalk.green(`- Optimization level: ${options.optimization}`));

    // TODO: Implement build logic
}