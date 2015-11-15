Template.addPlayerForm.events({
  'submit form': function(event){
      event.preventDefault();
      var playerName = event.target.playerName.value;
      var playerInitialScore = Number(event.target.playerInitialScore.value);
      Meteor.call('insertPlayerData', playerName, playerInitialScore);
      event.target.playerName.value='';
      event.target.playerInitialScore.value=0;
  }
})
