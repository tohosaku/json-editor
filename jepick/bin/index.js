#!/usr/bin/env node

const yargs = require('yargs')
const argv = yargs
  .usage('jepick - Build a subset of JSONEditor\n\nUsage: jepick [options]')
  .help('help').alias('help', 'h')
  .version('version', '0.1.0').alias('version', 'V')
  .options({
    output: {
      alias: 'o',
      description: '<filename> output file name',
      requiresArg: true,
      required: true
    }
  })
  .argv

console.log('Inspecting options')
console.dir(argv)
