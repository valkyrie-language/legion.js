#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';
import { registerAddCommand } from './commands/doAdd';
import { registerBuildCommand } from './commands/buildCommand';
import { registerRunCommand } from './commands/runCommand';
import { registerCreateCommand } from './commands/createCommand';
import { registerPublishCommand } from './commands/publishCommand';
import { registerUpdateCommand } from './commands/updateCommand';
import { registerUpgradeCommand } from './commands/upgradeCommand';
import { registerCleanCommand } from './commands/cleanCommand';
import { registerLoginCommand } from './commands/loginCommand';
import { registerTestCommand } from './commands/testCommand';
import { registerInitCommand } from './commands/initCommand';
import { registerLinkCommand } from './commands/linkCommand';
import { registerUnlinkCommand } from './commands/unlinkCommand';
import { registerAuditCommand } from './commands/auditCommand';
import { registerDoctorCommand } from './commands/doctorCommand';
import { registerInfoCommand } from './commands/infoCommand';
import { registerOutdatedCommand } from './commands/outdatedCommand';
import { registerCacheCommand } from './commands/cacheCommand';
import { registerExecCommand } from './commands/execCommand';
import { registerInstall } from './commands/installCommand.js';
import {registerPolyfill} from "./commands/doPolyfill";

console.log(chalk.blue('🦁 Legion CLI'));

program
    .name('legion')
    .description('Legion package manager CLI')
    .version('0.0.0')
    .option('-t, --timing', 'Measure the execution time');

// Register all commands
registerAddCommand();
registerBuildCommand();
registerRunCommand();
registerCreateCommand();
registerPublishCommand();
registerUpdateCommand();
registerUpgradeCommand();
registerCleanCommand();
registerLoginCommand();
registerTestCommand();
registerInitCommand();
registerLinkCommand();
registerUnlinkCommand();
registerAuditCommand();
registerDoctorCommand();
registerInfoCommand();
registerOutdatedCommand();
registerCacheCommand();
registerExecCommand();
registerInstall();
registerPolyfill();


program.parse(process.argv);

const options = program.opts();

if (!process.argv.slice(2).length) {
    program.outputHelp();
} else {
    if (options.timing) {
        console.time('Execution time');
    }

    if (options.timing) {
        console.timeEnd('Execution time');
    }
}