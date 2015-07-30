restfull.controller 'Index', ($scope, $http) ->

  $scope.create_json = (p_key, p_value) ->
    return { key: p_key, value: p_value }

  $scope.send_request = ->
    $('#response').hide()
    $('#loading').show()

    request = $http(compose_request())

    request.success (html) ->
      $('#response').html '<h3>Your response is</h3>' + JSON.stringify(html)
      $('#loading').hide()
      $('#response').show()
      return

    request.error (html) ->
      $('#response').html '<h2>ERROR!</h2><h3>Your response is</h3>' + JSON.stringify(html)
      $('#loading').hide()
      $('#response').show()
      return

    return

  # Compose request params
  compose_request = ->
    method  = $('#method').val()
    request     = {
      method  : method,
      url     : url_params(),
      headers : header_params(),
      data    : body_params()
    }

    return request

  # Compose body params
  body_params = ->
    params = {}
    $.each $('#form_body').serializeArray(), ->
      if(@name != 'body_param_key' && @name != 'body_param_value')
        params[@name] = @value
        return
      return

    return params

  # Compose url params
  url_params   = ->
    url     = $('#url').val()
    params  = {}

    return url

  # Compose header params
  header_params  = ->
    params = {}
    $('input[type=hidden][name=headers\\[\\]]').each ->
      item  = $.parseJSON($(this).val())
      params[item.key] = item.value

      return

    return params
  return
