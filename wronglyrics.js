$(document).ready(function(){
var musicMatchApiUrl = 'http://api.musixmatch.com/ws/1.1/'
var objectKey = '758a9c4eb110abe05628670f79cacb15'
$.ajax({
    type: "GET",
    data: {
        apikey: objectKey,
        q_artist: 'Disturbed',
        format:"jsonp",
        callback:"jsonp_callback"
    },
    url: "http://api.musixmatch.com/ws/1.1/track.search"
  }).done(function(data){
    console.log(data)
  })











})