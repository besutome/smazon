if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}


// config = require('settings');
var settings = Meteor.settings.aws;
// var aws = Meteor.npmRequire('aws-lib');

console.log(settings.id);

// var prodAdv = aws.createProdAdvClient(settings.id, settings.secret, settings.assocId);
//
// var options = {SearchIndex: "Books", Keywords: "Javascript"}
//
// prodAdv.call("ItemSearch", options, function(err, result) {
//   console.log(result);
// })
