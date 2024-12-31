import { program } from 'commander';
import chalk from 'chalk';
import { CommonOptions } from '../helpers/types';

export function registerDoctorCommand() {
    program
        .command('doctor')
        .description('Check system and project health')
        .option('--fix', 'Try to fix issues')
        .action(doctorCommand);
}

async function doctorCommand(options: CommonOptions & { fix?: boolean }) {
    console.log(chalk.blue('Running system diagnostics'));
    // TODO: Implement doctor logic
}