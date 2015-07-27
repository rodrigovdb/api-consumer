$(document).ready(function (e) {
  $("#file_form").on('submit',(function(e) {
    url             = $('#url').val();
    token           = $('#token').val();
    accept_version  = $('#accept_version').val();
    method          = $('#method').val();

    e.preventDefault();

    $('#response').hide();
    $('#loading').show();
    $.ajax({
      type        : method,
      url         : url,
      data        : new FormData(this),
      headers : {
      'Accept-Version'  : accept_version,
      'XAuthToken'      : token,
      },
      dataType    : 'json',
      contentType : false,
      cache       : false,
      processData : false,
      success: function(data) {
        $('#response').html('<h3>Your response is</h3>'+ data);

        $('#loading').hide();
        $('#response').show();

        console.info(data);
      }
    });
  }));

  $("#url_form").on('submit', function(e){
    url             = $('#url').val();
    token           = $('#token').val();
    accept_version  = $('#accept_version').val();
    method          = $('#method').val();

    e.preventDefault();

    $('#response').hide();
    $('#loading').show();
    $.ajax({
      type        : method,
      url         : url,
      //data        : $(this).serialize(),
      data        : new FormData(this),
      headers : {
      'Accept-Version'  : accept_version,
      'XAuthToken'      : token,
      },
      dataType    : 'json',
      contentType : false,
      cache       : false,
      processData : false,
      success: function(data) {
        $('#response').html('<h3>Your response is</h3>'+ data);

        $('#loading').hide();
        $('#response').show();

        console.info(data);
      }
    });
  });
});
