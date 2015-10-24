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
module.exports = function (robot) {
  robot.hear(/rtd/i, function (response) {
      var sender = message.user.name
      var min = 1;
      var max = 6;
      var rand = Math.floor(Math.random() * (max - min + 1)) + min;
    response.send(sender + ' rolled a ' + rand);
  });
};
