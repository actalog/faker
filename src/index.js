const core = require('@actions/core');

try {
  const module = core.getInput('module')
  const method = core.getInput('method')

  console.log({
    module,
    method,
  })

  core.setOutput('value', 'contato@gabrielrufino.com')
} catch (error) {
  core.setFailed(error.message);
}
