'use strict';

const AWS = require('aws-sdk');
const uuid = require('uuid');
const moment = require('moment');

const documentClient = new AWS.DynamoDB.DocumentClient();

exports.addTodo = function(event, context, callback){
	const dateTime = moment(new Date()).format();
	const params = {
		Item : {
			"todoId" : uuid.v1(),
			"text" : event.text,
			"dateTime" : dateTime
		},
		TableName : process.env.TABLE_NAME
	};

	documentClient.put(params, function(err, data){
		callback(err, data);
	});
}
