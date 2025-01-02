#!/usr/bin/env node

import {program} from 'commander';
import chalk from 'chalk';
import {registerAddCommand} from './commands/doAdd.js';
import {registerBuildCommand} from './commands/buildCommand.js';
import {registerRunCommand} from './commands/runCommand.js';
import {registerCreateCommand} from './commands/createCommand.js';
import {registerPublishCommand} from './commands/publishCommand.js';
import {registerUpdateCommand} from './commands/updateCommand.js';
import {registerUpgradeCommand} from './commands/upgradeCommand.js';
import {registerCleanCommand} from './commands/cleanCommand.js';
import {registerLoginCommand} from './commands/loginCommand.js';
import {registerTestCommand} from './commands/testCommand.js';
import {registerInitCommand} from './commands/initCommand.js';
import {registerLinkCommand} from './commands/linkCommand.js';
import {registerUnlinkCommand} from './commands/unlinkCommand.js';
import {registerAuditCommand} from './commands/auditCommand.js';
import {registerDoctorCommand} from './commands/doctorCommand.js';
import {registerInfoCommand} from './commands/infoCommand.js';
import {registerOutdatedCommand} from './commands/outdatedCommand.js';
import {registerCacheCommand} from './commands/cacheCommand.js';
import {registerExecCommand} from './commands/execCommand.js';
import {registerInstall} from './commands/installCommand.js';
import {registerPolyfill} from './commands/doPolyfill.js';

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