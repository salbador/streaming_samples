var http = require('http')

http.createServer(infinite).listen(9090)

function infinite (req, res) {
  res.setHeader('Content-Type', 'application/json')
  var seq = 0
  setInterval(function () {
    seq = seq + 100
    res.write(JSON.stringify({value: seq++}) + '\n')
  }, 100)
}