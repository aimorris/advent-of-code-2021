const fs = require('fs')

fs.readFile(process.argv[2], function(err, f) {
  if (err) return console.error(err)

  const depths = f.toString().split('\n').map(n => parseInt(n))

  console.log(depths.filter((_, i) => depths[i] > depths[i-1]).length)
})