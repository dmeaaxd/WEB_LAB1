canvas = document.getElementById("canvas");
context = canvas.getContext("2d");
draw();

function draw() {
    context.beginPath();
    context.fillStyle = "rgba(91,95,201,0.58)";
    context.strokeStyle = "rgba(91,95,201,0.58)";

//часть круга
    context.moveTo(150, 150)
    context.arc(150, 150, 69, 1.5*Math.PI, Math.PI, true);

//прямоугольник
    context.fillRect(14, 150, 136, 68)

//треугольник
    context.moveTo(150, 150);
    context.lineTo(150, 82);
    context.lineTo(286, 150);
    context.lineTo(150, 150);

    context.fill();
    context.stroke();

    context.beginPath();

    context.lineWidth = 2;
    context.strokeStyle = 'black';
    context.fillStyle = "black";

//OY
    context.moveTo(150, 300);
    context.lineTo(150, 0);
    context.lineTo(153, 7);
    context.moveTo(150, 0);
    context.lineTo(147, 7);
    context.lineTo(154, 7);
    context.fillText("y", 135, 8);

//OX
    context.moveTo(0, 150);
    context.lineTo(300, 150);
    context.lineTo(293, 147);
    context.moveTo(300, 150);
    context.lineTo(293, 153);
    context.lineTo(293, 146);
    context.fillText("x", 292, 166);

//штрихи OX
    context.moveTo(14, 150);
    context.lineTo(14, 145);
    context.lineTo(14, 155);

    context.moveTo(82, 150);
    context.lineTo(82, 145);
    context.lineTo(82, 155);

    context.moveTo(218, 150);
    context.lineTo(218, 145);
    context.lineTo(218, 155);

    context.moveTo(286, 150);
    context.lineTo(286, 145);
    context.lineTo(286, 155);

//штрихи OY
    context.moveTo(150, 14);
    context.lineTo(145, 14);
    context.lineTo(155, 14);

    context.moveTo(150, 82);
    context.lineTo(145, 82);
    context.lineTo(155, 82);

    context.moveTo(150, 218);
    context.lineTo(145, 218);
    context.lineTo(155, 218);

    context.moveTo(150, 286);
    context.lineTo(145, 286);
    context.lineTo(155, 286);
    context.closePath();

    context.stroke();
}

context.lineWidth = 2;
context.strokeStyle = 'black';

function draw_point(x, y, r, isHit) {
    context.clearRect(0, 0, 300, 300);
    draw();
    if (!isHit){
        context.fillStyle ="rgb(141,31,70)";
        context.strokeStyle= "rgb(136,39,75)";
    }
    else{
        context.fillStyle = "rgb(98,208,103)";
        context.strokeStyle = "rgb(65,215,69)";
    }
    context.beginPath();
    context.arc(150 + x * 136 / r, 150 - 136 * y / r, 2, 0, 2 * Math.PI);
    context.fill();
    context.stroke();
    context.closePath();

}