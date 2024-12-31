import { program } from 'commander';
import chalk from 'chalk';
import { CommonOptions } from '../helpers/types';
import { readConfig } from '../helpers/config';

export function registerCleanCommand() {
    program
        .command('clean')
        .description('Clean build artifacts')
        .option('--dry-run', 'Simulate cleaning')
        .action(cleanCommand);
}

async function cleanCommand(options: CommonOptions) {
    const config = await readConfig();
    
    console.log(chalk.blue('Cleaning project'));
    if (options.dryRun) {
        console.log(chalk.yellow('[Dry Run] Would clean build artifacts'));
        return;
    }

    // TODO: Implement clean logic
}