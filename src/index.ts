import { hitRectangle } from './libs/hit'

function test(msg: string) {
  console.log(`hello ${msg}`)
}

test('zhangmin')

const r1 = {
  x: 0,
  y: 0,
  width: 100,
  height: 100
}

const r2 = {
  x: 0,
  y: 0,
  width: 100,
  height: 100
}

hitRectangle(r1, r2)