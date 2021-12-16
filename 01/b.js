const fs = require('fs')

fs.readFile(process.argv[2], function(err, f) {
  if (err) return console.error(err)

  const depths = f.toString().split('\n').map(n => parseInt(n)).filter(x => !isNaN(x))

  console.log(depths.filter((_, i) => (i <= depths.length - 3) && (depths[i+1] + depths[i+2] + depths[i+3] > depths[i] + depths[i+1] + depths[i+2])).length)
})