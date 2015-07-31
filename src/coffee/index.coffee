restfull.controller 'Index', ($scope, $http) ->
  $scope.create_json = (p_key, p_value) ->
    return { key: p_key, value: p_value }

  $scope.send_request = ->
    $('#response').hide()
    $('#loading').show()

    make_request()

    return

  make_request = ->
    method  = $('#method').val()

    $.ajax
      type        : method
      url         : url_params()
      headers     : header_params()
      data        : body_params()
      dataType    : 'json'
      contentType : content_type()
      cache       : false
      processData : false
      success     : (data) ->
        $('#response').html '<h3>Your response is</h3>' + JSON.stringify data
        $('#loading').hide()
        $('#response').show()
        console.info data
        return
      error       : (data) ->
        $('#response').html '<h2>ERROR!</h2><h3>Your response is</h3>' + data.responseText
        $('#loading').hide()
        $('#response').show()
        console.info data
        return

    return

  body_params = ->
    if $('#file_field').val() == ''
      params = {}
      $.each $('#form_body').serializeArray(), ->
        if @name != 'body_param_key' and @name != 'body_param_value' and @name != 'file_field'
          params[@name] = @value
        return
      params = JSON.stringify(params)
    else
      params = new FormData(document.getElementById('form_body'))
      params.delete 'body_param_key'
      params.delete 'body_param_value'
    params

  content_type  = ->
    type  = ''
    if($('#file_field').val() == '')
      return 'application/json'
    else
      return false
    return

  # Compose url params
  url_params   = ->
    url     = $('#url').val()
    params  = {}

    return url

  # Compose header params
  header_params  = ->
    params  = {}
    $('input[type=hidden][name=headers\\[\\]]').each ->
      item  = $.parseJSON($(this).val())
      params[item.key] = item.value

      return

    return params
  return
