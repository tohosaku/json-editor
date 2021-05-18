const fs = require('fs')
const readline = require('readline')

async function rmImport (file) {
  const target = file + '_'
  const fileStream = fs.createReadStream(file, { encoding: 'utf8' })

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  })
  const reg = /import\(("[^"]+"|'[^']+')\)\./g
  let replaced = false

  const lines = []

  for await (const line of rl) {
    if (line.match(reg)) {
      lines.push(line.replace(reg, ''))
      replaced = true
    } else {
      lines.push(line)
    }
  }
  if (replaced) {
    fs.writeFileSync(target, lines.join('\r\n'))
    fs.renameSync(target, file)
  }
}

const arg = process.argv[2]

rmImport(arg)
