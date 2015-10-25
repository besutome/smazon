// Define a collection to hold our tasks
Tasks = new Mongo.Collection("tasks");

if (Meteor.isClient) {
  Meteor.startup(function () {
    React.render(<App />, document.getElementById("render-target"));
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {

    var aws = Meteor.npmRequire('aws-lib');
    var amazon = Meteor.settings.amazon;

    var prodAdv = aws.createProdAdvClient(amazon.id, amazon.secret, amazon.assocId, options);
    var options = {SearchIndex: "Books", Keywords: "Javascript", host: "ecs.amazonaws.jp"};


    prodAdv.call("ItemSearch", options, function(err, results) {
      console.log(results.Items);
    });



  });
}



