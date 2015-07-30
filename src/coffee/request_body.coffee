restfull.controller 'RequestBody', ($scope) ->
  $scope.body_params = {
    'imageUrl'  : 'https://angularjs.org/img/AngularJS-large.png',
  }

  $scope.add_body_param = ->
    key   = $('#body_param_key').val()
    value = $('#body_param_value').val()

    if(key == '' || value == '')
      return

    $scope.body_params[key] = value

    $('#body_param_key').val(null)
    $('#body_param_value').val(null)
    return

  $scope.remove_body_param = (id) ->
    delete $scope.body_params[id]
    return

  return
