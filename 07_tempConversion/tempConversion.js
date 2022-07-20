function ftoc (tempInF)
{
  /*
    C = 5/9 * (F - 32)
  */

  let tempC, rightOp;

  rightOp = (tempInF - 32);

  tempC = ((5 * rightOp)/9);

  return round(tempC);

}

function ctof (tempInC)
{
  /*
    F = (C * 9/5) + 32
  */

  let tempF, leftOp;

  leftOp = ((tempInC * 9)/5);

  tempF = leftOp + 32;

  return round(tempF);

}

function round (num)
{
  let rounded;

  rounded = (Math.round(num * 10)/ 10);

  return rounded;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
