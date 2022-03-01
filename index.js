const express = require('express')
const app = express()
const port = 3001

app.use((req, res, next) => {
  const loadTimes = {
    'next.js': 1500,
    '3rd-party.js': 2000,
    'segment.js': 1000
  }

  let delay = 0
  for (const file in loadTimes) {
    if (req.path.endsWith(file)) {
      delay = loadTimes[file]
      break
    }
  }

  setTimeout(() => next(), delay)
})

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
