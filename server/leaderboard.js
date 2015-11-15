Meteor.methods({
    'sendLogMessage': function(){
        console.log("Hello world");
    },
    'insertPlayerData': function(playerName, playerInitialScore){
        var currentUserId = Meteor.userId();
        PlayersList.insert({
          name: playerName,
          score: playerInitialScore,
          createdBy: currentUserId
        });
    },
    'removePlayerData': function(selectedPlayer){
        var currentUserId = Meteor.userId();
        PlayersList.remove({_id: selectedPlayer, createdBy: currentUserId});
    },
    'modifyPlayerScore': function(selectedPlayer, scoreValue){
        var currentUserId = Meteor.userId();
        PlayersList.update({_id: selectedPlayer, createdBy: currentUserId}, {$inc: {score: scoreValue}})
    }
})

Meteor.publish('thePlayers', function(){
  var currentUserId = this.userId;
  return PlayersList.find({createdBy: currentUserId});
});
