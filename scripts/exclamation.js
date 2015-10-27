// Description
//  Detects '!!!' and excites the robot
//
// Dependencies:
//  none
//
// Configuration:
//   none
//
// Commands:
//   !!! - You excite the robot.
//
// Notes:
//   none
//
// Author:
//   Keith Olenchak
/*global
 module
 */
/**
 *
 * @param robot
 */
module.exports = function (robot) {
  robot.hear(/!!!/i, function (response) {
    response.send('I\'m sooooo excited!!');
    // TODO: call google API.
  });
};
