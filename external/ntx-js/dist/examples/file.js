"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const file_1 = require("../src/clients/file");
const fs = require("fs");
const util_1 = require("./util");
const rx_1 = require("../src/clients/rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/filter");
let endpoint = process.env.NTX_API_FILE_V2T_ENDPOINT;
const ntxToken = process.env.NTX_TASK_TOKEN;
if (!ntxToken) {
    console.log("set NTX_TASK_TOKEN env variable");
    process.exit(1);
}
if (!endpoint) {
    endpoint = util_1.fileV2tAPIEndpointFromNtxToken(ntxToken);
}
if (process.argv.length < 3) {
    console.log("missing [file] argument");
    process.exit(1);
}
const file = process.argv[2];
const fileBytes = fs.readFileSync(file);
const api = new file_1.FileAPI(endpoint, ntxToken);
const results = api.v2t(new file_1.FileBlob(fileBytes));
results.map(rx_1.eventsToText).filter(s => s.length > 0).subscribe(e => {
    console.log(e);
}, (err) => console.error("FAILED", err), () => console.log("DONE"));
//# sourceMappingURL=file.js.map