/*global
 message
 module
 */
// Description
//  Detects 'draw a card' and returns a random card
//
// Dependencies:
//  none
//
// Configuration:
//   none
//
// Commands:
//   <draw a card> - <returns a random playing card>
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
function createDeck() {
  var deck = [];
  for (var i = 52; i > 0; i--) {
    var card = '';
    var j = i % 13
    switch (true) {
      case (j == 1):
        card += 'A';
        break;
      case (1 < j && j < 11):
        card += j;
        break;
      case (j == 11):
        card += 'J';
        break;
      case (j == 12):
        card += 'Q';
        break;
      case (j == 0):
        card += 'K';
        break;
    }
    j = i % 4;
    switch (true) {
      case (j == 0):
        card += '♠';
        break;
      case (j == 1):
        card += '♣';
        break;
      case (j == 2):
        card += '♥';
        break;
      case (j == 3):
        card += '♦';
        break;
    }
    deck.push(card);
  }
  return deck;
}
module.exports = function (robot) {
  robot.hear(/draw *a* *card/i, function (response) {
    var sender = response.message.user.name
    var resp = sender + ' drew a '
    var deck = createDeck();
    resp += deck[getRand(0,51)];
    response.send(resp);
  });
};
