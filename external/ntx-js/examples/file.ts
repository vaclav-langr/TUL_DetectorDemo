import {FileAPI, FileBlob} from "../src/clients/file";
import * as fs from "fs";
import {fileV2tAPIEndpointFromNtxToken} from "./util";
import {eventsToText} from "../src/clients/rx";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";

let endpoint = process.env.NTX_API_FILE_V2T_ENDPOINT;
const ntxToken = process.env.NTX_TASK_TOKEN;

if (!ntxToken) {
    console.log("set NTX_TASK_TOKEN env variable");
    process.exit(1);
}

if (!endpoint) {
    endpoint = fileV2tAPIEndpointFromNtxToken(ntxToken);
}

if (process.argv.length < 3) {
    console.log("missing [file] argument");
    process.exit(1);
}

const file = process.argv[2];

const fileBytes = fs.readFileSync(file);

const api = new FileAPI(endpoint, ntxToken);
const results = api.v2t(new FileBlob(fileBytes));

results.map(eventsToText).filter(s => s.length > 0).subscribe(e => {
    console.log(e);
}, (err) => console.error("FAILED", err), () => console.log("DONE"));
