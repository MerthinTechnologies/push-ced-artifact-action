import * as core from '@actions/core';
import { PushCommandHandler } from '@ced/cli';

const run = async function() {
  try {
    const cliToken = core.getInput('cli-token') || process.env['CED_CLI_TOKEN'];
    const environment = core.getInput('environment') || process.env['CED_ENVIRONMENT'];
    const path = core.getInput('path') || process.env['CED_PROJECT_PATH'];
    const version = core.getInput('version');
    const pushAsDraft = !!core.getInput('push-as-draft') 
      ? core.getInput('push-as-draft').toLowerCase() !== 'false'
      : false;

    if (!cliToken) {
      throw new Error(`Missing CED CLI token. Provide a CLI token by "cli-token" input parameter or define a variable "CED_CLI_TOKEN".`)
    }

    if (environment) {
      console.log(`Using environment: ${environment}`);
    }

    if (path) {
      process.chdir(path);
      console.log(`Using ${path} as working directory`);
    }

    const command = new PushCommandHandler(cliToken);
    await command.run(environment, version, pushAsDraft);
  } catch (error) {
    console.log(error);
    core.setFailed(error.message);
  }
}

run();