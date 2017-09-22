'use strict';

/**
 * @ngdoc function
 * @name resumeApp.controller:LangCtrl
 * @description
 * # LangCtrl
 * Controller of the resumeApp
 */
angular.module('resumeApp')
  .controller('LangCtrl', function ($scope, $translate) {
    
    	$scope.switchLanguage = function(languageKey) {
  			$translate.use(languageKey);
  		}
  		
  });
