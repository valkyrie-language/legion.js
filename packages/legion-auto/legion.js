#!/usr/bin/env node

import {runLegion} from "./index.js";
// skip 2, 0='node', 1='legion.js'
await runLegion(process.argv.slice(2))