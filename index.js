import initWasm, { WasmClient, WasmDb, init_, decode_invoice } from "./pkg/minimint_bridge.js";
import { openDB } from "https://cdn.jsdelivr.net/npm/idb@7/+esm";
// start loading wasm as soon as possible
const wasmPromise = initWasm();
export var database;
(function (database) {
    async function read(name) {
        const db = await openDB(name, 1, {
            async upgrade(db) {
                db.createObjectStore("main");
            }
        });
        let cursor = await db.transaction("main").store.openCursor();
        const result = [];
        while (cursor) {
            result.push([new Uint8Array(cursor.key), cursor.value]);
            cursor = await cursor.continue();
        }
        return result;
    }
    database.read = read;
    async function save(name, entries) {
        const db = await openDB(name, 1, {
            async upgrade(db) {
                db.createObjectStore("main");
            }
        });
        const store = db.transaction("main", "readwrite").store;
        await store.clear();
        for (const [key, value] of entries) {
            store.put(value, key);
        }
    }
    database.save = save;
})(database || (database = {}));
globalThis.database = database;
export class WasmBridge {
    constructor() {
        this.client = undefined;
        // TODO: use this for more than one federations
        this.db = undefined;
    }
    async _init() {
        this.db = await WasmDb.load("fedimint");
        document.addEventListener("visibilitychange", () => {
            // save database on hidden visibility
            if (document.visibilityState == "hidden") {
                // NOTE: no need to await, js promises execute without await
                this.db.save();
            }
        });
        // db.clone(), yay rust like js
        this.client = await init_(this.db.clone());
    }
    // return true if user has joined federation
    async init() {
        return this.client !== undefined;
    }
    async joinFederation(configUrl) {
        this.client = await WasmClient.join_federation(this.db.clone(), configUrl);
    }
    async leaveFederation() {
        // TODO
    }
    async balance() {
        return this.client.balance();
    }
    decodeInvoice(invoice) {
        return decode_invoice(invoice);
    }
    async invoice(amount) {
        return await this.client.invoice(amount);
    }
    async pay(bolt11) {
        return await this.client.pay(bolt11);
    }
}
async function main() {
    await wasmPromise;
    globalThis.wasmBridge = new WasmBridge();
    // flutter is kind of weird
    await globalThis.wasmBridge._init();
}
const mainPromise = main();
async function load() {
    await mainPromise;
    // Download main.dart.js
    console.log("loading");
    const appRunnerPromise = globalThis._flutter.loader.loadEntrypoint({
        serviceWorker: {
            serviceWorkerVersion: globalThis.serviceWorkerVersion,
        }
    }).then(engineInitializer => engineInitializer.initializeEngine());
    const appRunner = await appRunnerPromise;
    await appRunner.runApp();
}
window.addEventListener('load', load);
