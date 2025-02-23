import * as core from '@actions/core'
import { faker } from '@faker-js/faker'

try {
  const module = core.getInput('module')
  const method = core.getInput('method')

  const value = faker[module][method]()

  core.setOutput('value', value)
} catch (error) {
  console.error(error)
  core.setFailed(error.message);
}
