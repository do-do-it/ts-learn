interface Rectangle {
  x: number,
  y: number,
  width: number,
  height: number
}
function hitRectangle(r1: Rectangle, r2: Rectangle, center: boolean = false): boolean {
  // 矫正坐标为中心点
  if (!center) {
    r1.x += r1.width / 2
    r1.y += r1.height / 2
    r2.x += r2.width / 2
    r2.y += r2.height / 2
  }
  // 如果矩形中心坐标距离x方向和y方向都小于宽高一半之和，发生碰撞
  return Math.abs(r2.x - r1.x) < r1.width / 2 + r2.width / 2 && Math.abs(r2.y - r1.y) < r1.height / 2 + r2.height / 2
}

interface Circle {
  x: number,
  y: number,
  r: number
}
function hitCircle(r1: Circle, r2: Circle, center: boolean = false) {
  // 矫正坐标为中心点
  if (!center) {
    r1.x += r1.r
    r1.y += r1.r
    r2.x += r2.r
    r2.y += r2.r
  }
  return Math.sqrt(Math.abs(r2.x - r1.x) ** 2 + Math.abs(r2.y - r1.y) ** 2) < r1.r + r2.r
}

export {
  hitRectangle,
  hitCircle
}