const core = require('@actions/core')
const { faker } = require('@faker-js/faker')

try {
  const module = core.getInput('module')
  const method = core.getInput('method')

  const value = faker[module][method]()

  core.setOutput('value', value)
} catch (error) {
  core.setFailed(error.message);
}
