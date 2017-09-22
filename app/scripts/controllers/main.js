'use strict';

/**
 * @ngdoc function
 * @name resumeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the resumeApp
 */
angular.module('resumeApp')
  .controller('MainCtrl', function ($scope, $document, $sce) {


	    $('a.page-scroll').bind('click', function(event) {
	        var $anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 1500, 'easeInOutExpo');
	        event.preventDefault();
	    });


	    var item_width = $('.timeline-item').css("width");

	     $scope.left = function() {
	        if(parseInt($(".timeline-horizontal").css("margin-left")) == 0) return;
	         $(".timeline-horizontal").animate({marginLeft: "+="+item_width}, 1000);
	        return false;
	    }
	    
	    
	    $scope.right = function() {
	    	$(".timeline-horizontal").animate({marginLeft: "-="+item_width}, 1000);
	        return false;
	    }

	    $scope.urlcvword = $sce.trustAsResourceUrl('documents/RicardoFloresCV.docx');



  });
