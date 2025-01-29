import {test} from "node:test";
import {exec} from "node:child_process";

test('legion encode document', async (done) => {
    await exec('legion encode -h', (err, out) => {
        console.error(err);
        done();
    });
    await exec('legion encode -help', (err, out) => {
        console.error(err);
        done();
    });
})

test('wasm component to wat', async (done) => {
    await exec('legion encode tests/encode/encode_component.wat', (err, out) => {
        console.error(err);
        done();
    });
})

test('wasm module to wat', async (done) => {
    await exec('legion encode tests/encode/encode_module.wat', (err, out) => {
        console.error(err);
        done();
    });
})



