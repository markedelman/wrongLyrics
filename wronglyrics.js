var musicMatchApiUrl = "http://api.musixmatch.com/ws/1.1/"


// REQUEST DATA FROM API
function getDataFromApi(searchTerm, callback) {
    $.ajax({
        type: "GET",
        data: {
            apikey: '758a9c4eb110abe05628670f79cacb15',
            q: 'Disturbed',
            format: "jsonp",
            callback: "jsonp_callback"
        },
        url: "http://api.musixmatch.com/ws/1.1/track.search"
    }).done(function(data) {
        console.log(data);

    })
}

// SHOW SEARCH RESULTS
function displayMusixMatchData(data) {
    console.log(data);
    var resultElement = '';
    if (data.items.length > 0) {
        console.log(data.items);
        for (var i = 0; i < data.items.length; i++) {
            if (data.items[i].id.videoId)
                resultElement += "<a href='" + musicMatchApiUrl +
                data.items[i].id.videoId + "'><p>" + data.items[i].snippet.title +
                '</p></a>' + "<a href='" + musicMatchApiUrl + data.items[i].id.videoId +
                "'><img src='" + data.items[i].snippet.thumbnails.default.url +
                "' alt='thumbnail of video'></a>";
        };
    } else {
        resultElement += '<p>No results</p>';
    }

    $('.js-search-results').html(resultElement);
}

// EVENT LISTENER
function watchSubmit() {
    $('.js-search-form').submit(function(e) {
        e.preventDefault();
        var query = $('.js-search-form').find('.js-query').val();
        getDataFromApi(query, displayMusixMatchData);
    });
}

$(function() { watchSubmit(); });
