import { program } from 'commander';
import chalk from 'chalk';
import { CommonOptions } from '../helpers/types.js';
import { readConfig } from '../helpers/config.js';

export function registerAddCommand() {
    program
        .command('add [packages...]')
        .description('Add dependencies to the project')
        .option('-D, --dev', 'Add as development dependency')
        .option('--dry-run', 'Simulate installation')
        .action(doAdd);
}

export async function doAdd(packages: string[], options: CommonOptions & { dev?: boolean }) {
    const config = await readConfig();
    
    if (packages.length === 0) {
        console.log(chalk.red('Please specify packages to add'));
        return;
    }

    console.log(chalk.blue(`Adding ${options.dev ? 'dev dependencies' : 'dependencies'}:`), 
        chalk.green(packages.join(', ')));
    
    if (options.dryRun) {
        console.log(chalk.yellow('[Dry Run] Packages would be added to legion.json'));
        return;
    }

    // Implementation for actually adding packages
    // TODO: Implement package installation logic
}