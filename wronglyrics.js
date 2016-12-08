$(document).ready(function(){
var musicMatchApiUrl = 'http://api.musixmatch.com/ws/1.1/'

function getMusicMatchAPI(userQuery, callback){
	var apiKey = '758a9c4eb110abe05628670f79cacb15';

	var request = {
		apikey: apiKey,
		q: '' 
	}

	$.getJSON(musicMatchApiUrl, request, callback)

}













})