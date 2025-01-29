import test from "node:test";
import {polyfillCommand} from "../../dist/commands/legion.js";

test("wasm component to js", async () => {
    try {
        await polyfillCommand(
            'tests/polyfill/decode_component.wasm',
            'tests/polyfill/decode_component/',
            {
                guest: false,
                instantiation: false
            })
    } catch (e) {
        console.error(e)
    }
});