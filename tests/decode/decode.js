import test from "node:test";
import {exec} from "node:child_process";

test('legion decode document', async (done) => {
    await exec('legion encode -h', (err, out) => {
        console.error(err);
        done();
    });
     exec('legion encode -help', (err, out) => {
        console.error(err);
        done();
    });
})

test('wat component to wasm', async (done) => {
     exec('legion decode tests/decode/decode_component.wasm', (err, out) => {
        console.error(err);
        done();
    });
})

test('wat component to wasm (fold instructions)', async (done) => {
    exec('legion decode tests/decode/decode_component.wasm -o tests/decode/decode_component_fold.wat', (err, out) => {
        console.error(err);
        done();
    });
})

test('wat component to wasm (skeleton only)', async (done) => {
    exec('legion decode tests/decode/decode_component.wasm -o tests/decode/decode_component_skeleton.wat', (err, out) => {
        console.error(err);
        done();
    });
})

test('wat component to wasm (name unnamed)', async (done) => {
    exec('legion decode tests/decode/decode_component.wasm -o tests/decode/decode_component_named.wat', (err, out) => {
        console.error(err);
        done();
    });
})
