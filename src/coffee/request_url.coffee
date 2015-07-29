restfull.controller 'RequestUrl', ($scope) ->
  $scope.url_params = {}

  $scope.add_url_param = ->
    key   = $('#url_param_key').val()
    value = $('#url_param_value').val()

    if(key == '' || value == '')
      return

    $scope.url_params[key] = value

    $('#url_param_key').val(null)
    $('#url_param_value').val(null)
    return

  $scope.remove_url_param = (id) ->
    delete $scope.url_params[id]
    return

  return
