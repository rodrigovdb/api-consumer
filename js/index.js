$(document).ready(function(e) {
  $('#file_form').on('submit', function(e) {
    var accept_version, method, token, url;
    url = $('#url').val();
    token = $('#token').val();
    accept_version = $('#accept_version').val();
    method = $('#method').val();
    e.preventDefault();
    $('#response').hide();
    $('#loading').show();
    $.ajax({
      type: method,
      url: url,
      data: new FormData(this),
      headers: {
        'Accept-Version': accept_version,
        'XAuthToken': token
      },
      dataType: 'json',
      contentType: false,
      cache: false,
      processData: false,
      success: function(data) {
        $('#response').html('<h3>Your response is</h3>' + data);
        $('#loading').hide();
        $('#response').show();
        console.info(data);
      },
      error: function(data) {
        $('#response').html('<h2>ERROR!</h2><h3>Your response is</h3>' + data);
        $('#loading').hide();
        $('#response').show();
        console.info(data);
      }
    });
  });
  $('#url_form').on('submit', function(e) {
    var accept_version, method, token, url;
    url = $('#url').val();
    token = $('#token').val();
    accept_version = $('#accept_version').val();
    method = $('#method').val();
    e.preventDefault();
    $('#response').hide();
    $('#loading').show();
    $.ajax({
      type: method,
      url: url,
      data: new FormData(this),
      headers: {
        'Accept-Version': accept_version,
        'XAuthToken': token
      },
      dataType: 'json',
      contentType: false,
      cache: false,
      processData: false,
      success: function(data) {
        $('#response').html('<h3>Your response is</h3>' + data);
        $('#loading').hide();
        $('#response').show();
        console.info(data);
      },
      error: function(data) {
        $('#response').html('<h2>ERROR!</h2><h3>Your response is</h3>' + data);
        $('#loading').hide();
        $('#response').show();
        console.info(data);
      }
    });
  });
});
