

//var API_URL = 'http://192.168.1.30:9000';
var API_URL = 'http://localhost:9000';

var ApiError = {
  DuplicateResource: 82,
  InvalidCredentials: 42,
  MissingParameter: 58,
  UserNotActivated: 54,
  InvalidUsername: 60,
  DatabaseAccessTimeout: 63,
  Unexpected: 128
};


var Http = {
  Ok: 200,
  Created: 201,
  Accepted: 202,
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404,
  InternalServerError: 500
};

var url = function (endpoint) {
  return API_URL + endpoint;
};

var persist = function (key, item) {
  localStorage.setItem(key, item);
};

var get = function (key) {
  return localStorage.getItem(key);
};

var remove = function(key){
  localStorage.removeItem(key);
};

var getCurrentFieldParent = function(){
  return JSON.parse(localStorage.getItem('parent')) || {};
};

var persistCurrentFieldParent = function(parent){
  localStorage.setItem('parent', JSON.stringify(parent));
};

var persistMapLabel = function(label){
  localStorage.setItem('mapLabel', JSON.stringify(label));
};

var getMapLabel = function(){
  return JSON.parse(localStorage.getItem('mapLabel')) || {};
};

var getExtensionFromDataURI = function(data){
  return data.split(';')[0].split('/')[1];
};

var getUniqueFilename = function(prefix, extension) {
  return prefix.replace(/\s/g, '') + SEPARATOR + Date.now() + '.' + extension;
};

var persistAuthToken = function (token) {
  localStorage.setItem('token', JSON.stringify(token));
};

var removeAuthToken = function () {
  localStorage.removeItem('token');
};

var removeCurrentProject = function(){
  localStorage.removeItem('project');
};

var getAuthToken = function () {
  return JSON.parse(localStorage.getItem('token')) || {};
};

var getAdminToken = function(){
  return JSON.parse(localStorage.getItem('admintoken')) || {};
};

var createHeaders = function(token){
  var object = {
    'X-Auth-Token': token
  };
  return object;
};

var createHeaderObject = function(authToken, projectId){
  var object = {
    'X-Auth-Token': authToken
  };
  return object;
};


var createHeaderObjects = function(authToken, projectId, contentType){
  var object = {
    'X-Auth-Token': authToken,
    'X-Working-Project-Id': projectId,
    'content-Type': contentType
  };

  return object;
};

var validate = function(value){
  return !value || value.match(/^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
};

