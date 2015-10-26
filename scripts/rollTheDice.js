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
        var sender = response.message.user.name;
        var resp = sender + ' rolled ';
        var diceSides = parseInt(response.match[1]);
        var diceCount = parseInt(response.match[2]);
        var min = 1;
        var max = 6;
        if (typeof diceSides == 'number' && diceSides > 1)
            max = Math.min(diceSides, 30);
        if (typeof diceCount == 'number' && diceCount > 0)
            diceCount = Math.min(diceCount, 8);
        else
            diceCount = 1;
        for (var j = true;diceCount > 0;diceCount--) {
            if (diceCount > 1) {
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
