#!/usr/bin/env node

import {run as Legion} from '@valkyrie-language/legion-wasm32-wasi';

export function run() {
    Legion.run();
}

run();