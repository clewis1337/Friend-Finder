var friendsArray = require("../data/friends");

module.exports = function(app) {

  //API Requests
  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  // app.get("/api/waitlist", function(req, res) {
  //   res.json(waitListData);
  // });

  app.post("/api/friends", function(req, res) {
    let addUsr = req.body;
    let closestMatch = findFriend(addUsr);
    friendsArray.push(addUsr);
    console.log("TYPE OF MY ARRAY", typeof friendsArray)
    console.log("New Usr", addUsr);
    console.log("Closest Match: ", closestMatch);
    res.send(closestMatch);
  });

  function findFriend(User){
    let closestMatch = {};
    let closestDifference = 100;
    friendsArray.forEach(function (friend){
        let totalDifference = 0;
        for(let i = 0; i<friend.scores.length; i++){
           totalDifference += Math.abs(User.scores[i] - friend.scores[i]);
        }
        if(totalDifference < closestDifference){
           closestMatch = {name: friend.name, photo: friend.photo};
           closestDifference = totalDifference;
        }
    });

    return closestMatch;
  }

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function() {
    // Empty out the arrays of data
    tableData = [];
    waitListData = [];

    console.log(tableData);
  });
};
