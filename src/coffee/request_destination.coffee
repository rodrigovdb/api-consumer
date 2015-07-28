angular.module('request_destination', []).controller 'RequestDestinationController', ->
  @url      = null
  @method   = 'GET'
  @methods  = ['GET', 'POST', 'PUT']
  #@methods  = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'COPY', 'HEAD', 'OPTIONS', 'LINK', 'UNLINK', 'PURGE']
  return
