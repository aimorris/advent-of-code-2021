const fs = require('fs')
let increases = 0

fs.readFile(process.argv[2], function(err, f) {
  if (err) return console.error(err)

  const depths = f.toString().split('\n').map(n => parseInt(n))

  for (let i = 1; i < depths.length; i++) {
    if (depths[i] > depths[i-1]) increases++
  }

  console.log(increases)
})