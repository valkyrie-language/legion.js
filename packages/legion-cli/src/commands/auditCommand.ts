import { program } from 'commander';
import chalk from 'chalk';
import { CommonOptions } from '../helpers/types.js';

export function registerAuditCommand() {
    program
        .command('audit')
        .description('Run security audit')
        .option('--fix', 'Automatically fix vulnerabilities')
        .option('--level <level>', 'Minimum level of vulnerability to show')
        .action(auditCommand);
}

async function auditCommand(options: CommonOptions & { fix?: boolean; level?: string }) {
    console.log(chalk.blue('Running security audit'));
    // TODO: Implement audit logic
}