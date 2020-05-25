// REF: https://medium.com/@Jekrb/process-streaming-json-with-node-js-d6530cde72e9
var pump = require('pump')
// var pipeline = require('stream').pipeline
var ndjson = require('ndjson')
var through = require('through2')
var hyperquest = require('hyperquest')

pump(
  hyperquest('http://localhost:9090'),
  ndjson.parse(),
  through.obj(write),
  process.stdout
)

function write (row, enc, next) {
  next(null, String(row.value * row.value) + '\n')
}