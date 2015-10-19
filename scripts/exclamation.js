/*global
 module
 */
// Description
//  Detects '!!!' and returns a random exclamation from google
//
// Dependencies:
//  none
//
// Configuration:
//   none
//
// Commands:
//   <!!!> - <returns a random exclamation from google>
//
// Notes:
//   none
//
// Author:
//   Keith Olenchak
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
