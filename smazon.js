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


var aws = Meteor.npmRequire('aws-lib');
var amazon = Meteor.settings.amazon;
var options = {"host": "ecs.amazonaws.jp"};

var prodAdv = aws.createProdAdvClient(amazon.id, amazon.secret, amazon.assocId, options);

var options = {SearchIndex: "Books", Keywords: "Javascript"}

prodAdv.call("ItemSearch", options, function(err, result) {
  // console.log(result);
  console.log(result.Items);
})
