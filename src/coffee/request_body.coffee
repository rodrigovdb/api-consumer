restfull.controller 'RequestBody', ($scope) ->
  $scope.body_params    = {}

  $scope.show_file_row        = false
  $scope.show_file_field_btn  = true

  $scope.update_show_file_row = (item) ->
    $scope.show_file_row  = !$scope.show_file_row
    return

  $scope.add_file_field = ->
    $scope.show_file_field_btn  = false
    $scope.show_file_row        = true
    return

  $scope.remove_file_field  = ->
    $scope.show_file_field_btn  = true
    $scope.show_file_row        = false
    $('#file_field_value').val(null)

    return

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
