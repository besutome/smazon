// var util = require('util'),
//     settings = require('settings'),
//     OperationHelper = require('apac').OperationHelper;
//
// var opHelper = new OperationHelper({
//     endPoint: settings.aws.endPoint,
//     awsId:     settings.aws.id,
//     awsSecret: settings.aws.secret,
//     assocId:   settings.aws.assocId,
//     // xml2jsOptions: an extra, optional, parameter for if you want to pass additional options for the xml2js module. (see https://github.com/Leonidas-from-XIV/node-xml2js#options)
//     version:   '2013-08-01'
//     // your version of using product advertising api, default: 2013-08-01
// });
//
//
// // execute(operation, params, callback)
// // operation: select from http://docs.aws.amazon.com/AWSECommerceService/latest/DG/SummaryofA2SOperations.html
// // params: parameters for operation (optional)
// // callback(err, parsed, raw): callback function handling results. err = potential errors raised from xml2js.parseString() or http.request(). parsed = xml2js parsed response. raw = raw xml response.
//
// opHelper.execute('ItemSearch', {
//   'SearchIndex': 'Books',
//   'Keywords': 'harry potter',
//   'ResponseGroup': 'ItemAttributes,Offers'
// }, function(err, results) { // you can add a third parameter for the raw xml response, "results" here are currently parsed using xml2js
//     console.log(results);
// });
//
// // output:
// // { ItemSearchResponse: 
// //    { '$': { xmlns: 'http://webservices.amazon.com/AWSECommerceService/2011-08-01' },
// //      OperationRequest: [ [Object] ],
// //      Items: [ [Object] ] } }
