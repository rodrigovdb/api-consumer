restfull.controller 'RequestDestination', ($scope) ->
  $scope.url      = 'http://localhost:9393/api/images'
  $scope.method   = 'POST'
  $scope.methods  = ['GET', 'POST', 'PUT']
  #$scope.methods  = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'COPY', 'HEAD', 'OPTIONS', 'LINK', 'UNLINK', 'PURGE'

  return
