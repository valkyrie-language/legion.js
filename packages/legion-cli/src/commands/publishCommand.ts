import { program } from 'commander';
import chalk from 'chalk';
import { PublishOptions } from '../helpers/types.js';
import { readConfig } from '../helpers/config.js';

export function registerPublishCommand() {
    program
        .command('publish')
        .description('Publish package to registry')
        .option('--dry-run', 'Simulate publishing')
        .option('--access <access>', 'Package access (public/private)')
        .action(publishCommand);
}

async function publishCommand(options: PublishOptions) {
    const config = await readConfig();
    
    console.log(chalk.blue('Publishing package'));
    if (options.dryRun) {
        console.log(chalk.yellow('[Dry Run] Package would be published'));
        return;
    }

    // TODO: Implement publish logic
}