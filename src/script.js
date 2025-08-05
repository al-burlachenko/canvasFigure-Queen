function drawQueen() {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");

  const config = {
    base: { x: 35, y: 160, width: 60, height: 10 },
    secSeg: { width: 30, height: 10 },
    thirdSeg: { widthBottom: 20, widthTop: 15, height: 40 },
    botCross: { width: 45, height: 5, distance: 25 },
    topCross: { width: 25, height: 5, distance: 10 },
    shift: 5,
    radius: 8,
  };

  const angle = Math.atan(5 / (2 * config.radius));

  ctx.beginPath();
  let x = config.base.x;
  let y = config.base.y;
  let mirror = 1;

  x += config.base.width / 2;
  ctx.moveTo(x, y);

  x += (config.base.width / 2) * mirror;
  ctx.lineTo(x, y);

  y -= config.base.height * mirror;
  ctx.lineTo(x, y);

  x -= config.base.width / 2 - config.secSeg.width / 2;
  ctx.lineTo(x, y);

  y -= config.secSeg.height * mirror;
  ctx.lineTo(x, y);

  x -= (config.secSeg.width - config.thirdSeg.widthBottom) / 2;
  ctx.lineTo(x, y);

  x -= (config.thirdSeg.widthBottom - config.thirdSeg.widthTop) / 2;
  y -= config.thirdSeg.height * mirror;
  ctx.lineTo(x, y);

  x -= config.thirdSeg.widthTop / 2 - config.botCross.width / 2;
  ctx.lineTo(x, y);

  y -= config.botCross.height * mirror;
  ctx.lineTo(x, y);

  x -= config.botCross.width / 2 - config.shift / 2;
  ctx.lineTo(x, y);

  ctx.arc(
    x - (config.shift * mirror) / 2,
    y - (config.botCross.distance * mirror) / 2,
    config.radius,
    (Math.PI / 2) * mirror - angle,
    (-Math.PI / 2) * mirror + angle,
    true
  );
  y -= config.botCross.distance * mirror;
  ctx.lineTo(x, y);

  x -= config.shift / 2 - config.topCross.width / 2;
  ctx.lineTo(x, y);

  y -= config.topCross.height * mirror;
  ctx.lineTo(x, y);

  x += config.shift / 2 - config.topCross.width / 2;
  ctx.lineTo(x, y);

  y -= config.topCross.distance * mirror;
  ctx.lineTo(x, y);

  x -= config.shift / 2;
  ctx.lineTo(x, y);
  // !! // // !! //// !! //// !! //// !! //// !! //// !! //
  mirror = -1;
  x -= config.shift / 2;
  ctx.lineTo(x, y);

  y -= config.topCross.distance * mirror;
  ctx.lineTo(x, y);

  x += config.shift / 2 - config.topCross.width / 2;
  ctx.lineTo(x, y);

  y -= config.topCross.height * mirror;
  ctx.lineTo(x, y);

  x -= config.shift / 2 - config.topCross.width / 2;
  ctx.lineTo(x, y);

  ctx.arc(
    x - (config.shift * mirror) / 2,
    y - (config.botCross.distance * mirror) / 2,
    config.radius,
    (Math.PI / 2) * mirror - angle,
    (-Math.PI / 2) * mirror + angle,
    true
  );
  y -= config.botCross.distance * mirror;
  ctx.lineTo(x, y);

  x -= config.botCross.width / 2 - config.shift / 2;
  ctx.lineTo(x, y);

  y -= config.botCross.height * mirror;
  ctx.lineTo(x, y);

  x -= config.thirdSeg.widthTop / 2 - config.botCross.width / 2;
  ctx.lineTo(x, y);

  x -= (config.thirdSeg.widthBottom - config.thirdSeg.widthTop) / 2;
  y -= config.thirdSeg.height * mirror;
  ctx.lineTo(x, y);

  x -= (config.secSeg.width - config.thirdSeg.widthBottom) / 2;
  ctx.lineTo(x, y);

  y -= config.secSeg.height * mirror;
  ctx.lineTo(x, y);

  x -= config.base.width / 2 - config.secSeg.width / 2;
  ctx.lineTo(x, y);

  y -= config.base.height * mirror;
  ctx.lineTo(x, y);

  x += config.base.width / 2;
  ctx.lineTo(x, y);

  ctx.fill();
  // ctx.closePath();
  ctx.stroke();
}
drawQueen();
