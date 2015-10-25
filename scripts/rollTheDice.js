/*global
 message
 module
 */
// Description
//  Detects 'rtd' and returns a random number between 1-6
//
// Dependencies:
//  none
//
// Configuration:
//   none
//
// Commands:
//   <rtd> - <returns a random number between 1-6>
//
// Notes:
//   none
//
// Author:
//   Andrew Ahern
/**
 *
 * @param robot
 */
function getRand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
module.exports = function (robot) {
  robot.hear(/rtd ?(\d+)* ?(\d+)*/i, function (response) {
      var sender = response.message.user.name
      var diceCount = escape(response.match[1])
      var diceSides = escape(response.match[2])
      var min = 1;
      var max = 6;
      if (typeof diceSides == 'number')
        diceSides = Math.floor(diceSides); //Force it into an Integer
        if (diceSides > 1) //Make sure die has more than one side.
          max = Math.min(diceSides, 100);
      var resp = sender + ' rolled '
      var i = 1;
      if (typeof diceCount == 'number')
        diceCount = Math.floor(diceCount); //Force it into an Integer
        if (diceCount > 0) //Make sure dice count is legitimate.
          i = Math.min(diceCount, 8);
      for (var j = true;i > 0;i--) {
          if (i > 1) {
            resp += getRand(min, max) + ', ';
            j = false;
          }
          else {
              if (j)
                  resp += 'a ' + getRand(min, max);
              else
                  resp += 'and ' + getRand(min, max);
          }
      }
    response.send(resp);
  });
};
