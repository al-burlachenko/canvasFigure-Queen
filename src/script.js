function drawQueen() {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");

  const config = {
    base: { x: 70, y: 160, width: 60, height: 10 },
    secSeg: { width: 40, height: 10 },
    thirdSeg: { widthBottom: 20, widthTop: 10, height: 40 },
    botCross: { width: 50, height: 5, distance: 40 },
    topCross: { width: 25, height: 5, distance: 10 },
    shift: 5,
    radius: 12,
  };

  const angle = Math.atan(5 / (2 * config.radius));

  ctx.beginPath();
  let x = config.base.x;
  let y = config.base.y;

  function drawHalfFigure(mirror) {
    x = config.base.x;
    y = config.base.y;
    ctx.moveTo(x, y);

    x += (config.base.width * mirror) / 2;
    ctx.lineTo(x, y);

    y -= config.base.height;
    ctx.lineTo(x, y);

    x -= (config.base.width * mirror) / 2 - (config.secSeg.width * mirror) / 2;
    ctx.lineTo(x, y);

    y -= config.secSeg.height;
    ctx.lineTo(x, y);

    x -=
      (config.secSeg.width * mirror) / 2 -
      (config.thirdSeg.widthBottom * mirror) / 2;
    ctx.lineTo(x, y);

    x -=
      (config.thirdSeg.widthBottom * mirror) / 2 -
      (config.thirdSeg.widthTop * mirror) / 2;
    y -= config.thirdSeg.height;
    ctx.lineTo(x, y);

    x -=
      (config.thirdSeg.widthTop * mirror) / 2 -
      (config.botCross.width * mirror) / 2;
    ctx.lineTo(x, y);

    y -= config.botCross.height;
    ctx.lineTo(x, y);

    x -= (config.botCross.width * mirror) / 2 - (config.shift * mirror) / 2;
    ctx.lineTo(x, y);

    x -= (config.shift * mirror) / 2;
    y -= config.botCross.distance / 2;
    ctx.arc(
      x,
      y,
      config.radius,
      Math.PI / 2 - angle * mirror,
      -Math.PI / 2 + angle * mirror,
      mirror > -1
    );

    x += (config.shift * mirror) / 2;
    y -= config.botCross.distance / 2;
    ctx.lineTo(x, y);

    x -= (config.shift * mirror) / 2 - (config.topCross.width * mirror) / 2;
    ctx.lineTo(x, y);

    y -= config.topCross.height;
    ctx.lineTo(x, y);
    x -= (config.topCross.width * mirror) / 2 - (config.shift * mirror) / 2;
    ctx.lineTo(x, y);

    y -= config.topCross.distance;
    ctx.lineTo(x, y);

    x -= (config.shift * mirror) / 2;
    ctx.lineTo(x, y);
  }

  function drawCrown() {
    ctx.beginPath();
    const figureHeight =
      config.base.height +
      config.secSeg.height +
      config.thirdSeg.height +
      config.botCross.height +
      config.botCross.distance +
      config.topCross.height +
      config.topCross.distance;
    // ctx.strokeStyle = "aqua";
    // ctx.fillStyle = "blue";
    let x = config.base.x;
    let y = config.base.y - figureHeight;
    const crownWidth = 30;
    const crownHeight = 10;
    ctx.moveTo(x, y);
    ctx.lineTo(x - crownWidth / 2, y - crownHeight);
    ctx.lineTo(x + crownWidth / 2, y - crownHeight);
    ctx.fill();
    // ctx.rect(x - 15, y - 15, 5, -8);

    const rectCount = 5;
    const rectWidth = 2;
    const rectHeight = 8;
    for (let i = 0; i < rectCount; i += 1) {
      ctx.rect(
        x -
          crownWidth / 2 +
          ((crownWidth - rectWidth * rectCount) / (rectCount - 1) + rectWidth) *
            i,
        y - crownHeight,
        rectWidth,
        -rectHeight
      );
      ctx.fill();
    }
    // ctx.arc(
    //   config.base.x,
    //   config.base.y - figureHeight - 9,
    //   20,
    //   0,
    //   2 * Math.PI
    // );
  }

  drawHalfFigure(1);
  drawHalfFigure(-1);
  ctx.fill();

  drawCrown();
  ctx.stroke();
}

drawQueen();
