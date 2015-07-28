restfull.controller 'RequestHeader', ($scope) ->
  $scope.api_version  = 'v1'
  $scope.headers      = {
    'api_token'       : '1c5a08e37d302bc25450e71dd1a167633',
    'accept_version'  : 'v1',
  }

  $scope.add_header = ->
    key   = $('#header_key').val()
    value = $('#header_value').val()

    if(key == '' || value == '')
      return

    $scope.headers[key] = value
    return

  $scope.remove_header = (id) ->
    alert(id)
    delete $scope.headers[id]
    return

  return
