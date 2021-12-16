const fs = require('fs')

let forward = 0
let depth = 0

fs.readFile(process.argv[2], function(err, f) {
  if (err) return console.error(err)

  const moves = f.toString().split('\n')

  moves.map(x => {
    const args = x.split(' ')
    if (args[0] == "forward") {
      forward += parseInt(args[1])
    } else if (args[0] == "up") {
      depth -= parseInt(args[1])
    } else {
      depth += parseInt(args[1])
    }
  })

  console.log(forward * depth)
})