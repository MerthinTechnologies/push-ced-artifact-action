"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core = require("@actions/core");
const cli_1 = require("@ced/cli");
const run = async function () {
    try {
        const cliToken = core.getInput('cli-token');
        const environment = core.getInput('environment');
        const version = core.getInput('version');
        const pushAsDraft = !!core.getInput('push-as-draft')
            ? core.getInput('push-as-draft').toLowerCase() !== 'false'
            : false;
        const path = core.getInput('path');
        if (path) {
            process.chdir(path);
        }
        const command = new cli_1.PushCommandHandler(cliToken);
        await command.run(environment, version, pushAsDraft);
    }
    catch (error) {
        core.setFailed(error.message);
    }
};
run();
//# sourceMappingURL=index.js.map