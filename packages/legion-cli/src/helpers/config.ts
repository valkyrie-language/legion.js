import * as fs from 'node:fs/promises';
import * as path from 'path';
import chalk from 'chalk';
import { LegionConfig } from './types';

export async function readConfig(configPath?: string): Promise<LegionConfig> {
    const defaultPath = path.join(process.cwd(), 'legion.json');
    const targetPath = configPath || defaultPath;

    try {
        const configContent = await fs.readFile(targetPath, 'utf-8');
        return JSON.parse(configContent);
    } catch (error) {
        if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
            console.log(chalk.yellow('No legion.json found, using default configuration'));
            return {};
        }
        throw error;
    }
}