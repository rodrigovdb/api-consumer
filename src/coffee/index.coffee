restfull.controller 'Index', ($scope) ->

  $scope.create_json = (p_key, p_value) ->
    return { key: p_key, value: p_value }

  $scope.send_request = ->
    $('#response').hide()
    $('#loading').show()

    method  = $('#method').val()

    $.ajax
      type        : method
      url         : url_params()
      headers     : header_params()
      data        : JSON.stringify(body_params())
      dataType    : 'json'
      contentType : 'application/json'
      cache       : false
      processData : false
      success     : (data) ->
        $('#response').html '<h3>Your response is</h3>' + data
        $('#loading').hide()
        $('#response').show()
        console.info data
        return
      error       : (data) ->
        $('#response').html '<h2>ERROR!</h2><h3>Your response is</h3>' + data
        $('#loading').hide()
        $('#response').show()
        console.info data
        return

    return

  # Compose url params
  url_params  = () ->
    url         = $('#url').val()
    url_params  = {}

    return url

  # Compose header params
  header_params = () ->
    params = {}
    $('input[type=hidden][name=headers\\[\\]]').each ->
      item  = $.parseJSON($(this).val())
      params[item.key] = item.value

      return

    return params

  # Compose body params
  body_params = () ->
    params   = {}
    $('input[type=hidden][name=bodies\\[\\]]').each ->
      item  = $.parseJSON($(this).val())
      params[item.key] = item.value

      return

    return params

  return
