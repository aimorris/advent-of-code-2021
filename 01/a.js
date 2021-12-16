const fs = require('fs')

fs.readFile(process.argv[2], function(err, f) {
  if (err) {
    console.error(err)
    return
  }

  const lines = f.toString().split('\n')
  console.log(lines)
})