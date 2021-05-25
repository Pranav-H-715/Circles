var canvas=document.getElementById("canvas")
var context=canvas.getContext("2d")
var colour = "red"
canvas.addEventListener("mousedown",md)
var radius = 40
function md (e){
    colour = document.getElementById("colour").value
    radius = document.getElementById("radius").value
    var mouseX = e.clientX-canvas.offsetLeft
    var mouseY = e.clientY-canvas.offsetTop
    circle(mouseX,mouseY)
}
function circle(mouseX,mouseY){
    context.beginPath()
    context.strokeStyle=colour
    context.lineWidth=2
    context.arc(mouseX,mouseY,radius,0,Math.PI*2)//arc(x, y, radius, startAngle, endAngle)
    context.stroke() //draw it
}
function clearArea(){
    context.clearRect(0,0,canvas.width,canvas.height)
}
