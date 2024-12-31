import { program } from 'commander';
import chalk from 'chalk';
import { CommonOptions } from '../helpers/types';

export function registerLoginCommand() {
    program
        .command('login')
        .description('Login to package registry')
        .action(loginCommand);
}

async function loginCommand(options: CommonOptions) {
    console.log(chalk.blue('Logging in to registry'));
    
    // TODO: Implement login logic
}