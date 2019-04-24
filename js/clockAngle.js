let hourPos = (h, m) =>
    5*((h % 12) + (m / 60))

let clockAngle = (h, m) => {
    let angle = Math.abs(6*(m-hourPos(h, m)))
    
    return Math.min(angle, 360 - angle)
}