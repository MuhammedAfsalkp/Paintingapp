const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

ctx.fillStyle = "white"
ctx.fillRect(0, 0, 500, 500)

ctx.fillStyle = "black"

let brushColor = "black"
let brushWidth = 3;
let painting = false;

document.getElementById("color").addEventListener("change", function () {
    brushColor = this.value;
})
document.getElementById("thickness").addEventListener("change", function () {
    brushWidth = this.value;
})
document.getElementById("canvas").addEventListener("mousedown", paintingStart)
document.getElementById("canvas").addEventListener("mouseup", paintingEnd)
document.getElementById("canvas").addEventListener("mousemove", draw)

function paintingStart(e) {
    painting = true;
    //to draw a dot when start
    draw(e)
}
function paintingEnd(e) {
    painting = false;
    //to avoid drawing -joining paths
    ctx.beginPath()
}
function draw(e) {

    if (!painting) return

    let x = e.clientX;
    let y = e.clientY - canvas.offsetTop

    ctx.lineWidth = brushWidth;
    ctx.lineCap = "round"
    ctx.strokeStyle = brushColor
    ctx.lineTo(x, y)
    ctx.stroke()

}


