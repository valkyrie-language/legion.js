import { program } from 'commander';
import chalk from 'chalk';
import { CommonOptions } from '../helpers/types';
import { readConfig } from '../helpers/config';

export function registerUpdateCommand() {
    program
        .command('update [packages...]')
        .description('Update dependencies')
        .option('--dry-run', 'Simulate update')
        .action(updateCommand);
}

async function updateCommand(packages: string[], options: CommonOptions) {
    const config = await readConfig();
    
    console.log(chalk.blue('Updating packages'));
    if (packages.length > 0) {
        console.log(chalk.green(`Packages to update: ${packages.join(', ')}`));
    } else {
        console.log(chalk.green('Updating all packages'));
    }

    // TODO: Implement update logic
}