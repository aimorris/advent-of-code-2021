const fs = require('fs')

let increases = 0

fs.readFile(process.argv[2], function(err, f) {
  if (err) return console.error(err)

  const depths = f.toString().split('\n').map(n => parseInt(n))

  depths.flatMap((_, i) => {
    if (i > depths.length - 3) return []
    const sumA = depths[i] + depths[i+1] + depths[i+2]
    const sumB = depths[i+1] + depths[i+2] + depths[i+3]
    if (sumB > sumA) increases++
  })

  console.log(increases)
})