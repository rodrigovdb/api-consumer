restfull.controller 'RequestHeader', ($scope) ->
  $scope.header_params      = {}

  $scope.add_header_param = ->
    key   = $('#header_param_key').val()
    value = $('#header_param_value').val()

    if(key == '' || value == '')
      return

    $scope.header_params[key] = value

    $('#header_param_key').val(null)
    $('#header_param_value').val(null)
    return

  $scope.remove_header_param = (id) ->
    delete $scope.header_params[id]
    return

  return
