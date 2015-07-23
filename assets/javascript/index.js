$(document).ready(function (e) {
  $("#test_form").on('submit',(function(e) {
    url   = $('#test_form').attr('action');
    token = '6e5815b52f6a8af2ee2f65160c0dc991';

    e.preventDefault();

    $('#response').hide();
    $('#loading').show();
    $.ajax({
      type        : "POST",
      url         : url,
      data        : new FormData(this),
      headers : {
      'Accept-Version'  : 'v1',
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
});
