import * as core from '@actions/core';
import { PushCommandHandler } from '@ced/cli';

const run = async function() {
  try {
    const cliToken = core.getInput('cli-token');
    const environment = core.getInput('environment');
    const version = core.getInput('version');
    const pushAsDraft = (core.getInput('push-as-draft')).toLowerCase() !== 'false';
    const command = new PushCommandHandler(cliToken);
    await command.run(environment, version, pushAsDraft);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();