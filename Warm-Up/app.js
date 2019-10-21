let api_key = 'CB3u9m9EcYrw3EnygcS0FX4P91gsyN8N';
let basseUrl = 'https://api.giphy.com/v1/gifs';

$('#searchSubmit').on('click', function() {
  const searchText = $('#gifSearch').val();
  const queryUrl =
    'https://api.giphy.com/v1/gifs/search?api_key=' +
    api_key +
    '&q=' +
    searchText +
    '&limit=25&offset=0&rating=G&lang=en';
  console.log(queryUrl);

  $.ajax({
    method: 'GET',
    url: queryUrl
  }).then(response => {
    const data = response.data;
    console.log(data);

    data.forEach(element => {
      console.log(element.images.fixed_height.url);

      $('.gifContainer').append(
        `<img src="${element.images.fixed_height.url}">`
      );
    });
  });
});
