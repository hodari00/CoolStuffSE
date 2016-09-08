(function() {
  	'use strict';

  	var New = angular.module('app', [])
  	.controller('Controller', Controller)
  	.directive('starRating', starRating);

  	function Controller() {
    	this.rating2 = 2;
    	this.isReadonly = true;
    	this.list = [
    					{
    						"ImageSrc": "images/image1.jpg",
    						"Name": "Popcorn Microskål - Lékué",
    						"Price": "299",
    						"Rating": 4
    					},
    					{
    						"ImageSrc": "images/image2.jpg",
    						"Name": "Sansaire Sous Vide-Maskin",
    						"Price": "1995",
    						"Rating": 3
    					},
    					{
    						"ImageSrc": "images/image3.jpg",
    						"Name": "Uppblåsbara Maskeraddräkter",
    						"Price": "399",
    						"Rating": 4
    					},
    					{
    						"ImageSrc": "images/image4.jpg",
    						"Name": "Sneaker Socks",
    						"Price": "79",
    						"Rating": 4
    					},
    					{
    						"ImageSrc": "images/image5.jpg",
    						"Name": "Vooni Video Grabber",
    						"Price": "995",
    						"Rating": 4
    					},
    					{
    						"ImageSrc": "images/image6.jpg",
    						"Name": "SleepPhones",
    						"Price": "Från 349",
    						"Rating": 4
    					},
    					{
    						"ImageSrc": "images/image7.jpg",
    						"Name": "Beard Bib",
    						"Price": "299",
    						"Rating": 5
    					},
    					{
    						"ImageSrc": "images/image8.jpg",
    						"Name": "Magnogrip",
    						"Price": "179",
    						"Rating": 4
    					},
    					{
    						"ImageSrc": "images/image9.jpg",
    						"Name": "Bean Boozled Jelly Beans",
    						"Price": "129",
    						"Rating": 5
    					},
    					{
    						"ImageSrc": "images/image10.jpg",
    						"Name": "Scratch Map Original Deluxe",
    						"Price": "229",
    						"Rating": 4
    					},
    					{
    						"ImageSrc": "images/image11.jpg",
    						"Name": "Squatty Potty",
    						"Price": "349",
    						"Rating": 2
    					}
    				];

  	}

  	function starRating() {
    	return {
	      	restrict: 'EA',
	      	template:
	        '<ul class="star-rating" ng-class="{readonly: readonly}">' +
	        '  <li ng-repeat="star in stars" class="star" ng-class="{filled: star.filled}" ng-click="toggle($index)">' +
	        '    <i class="fa fa-star"></i>' + // or &#9733
	        '  </li>' +
	        '</ul>',
	      	scope: {
	        	ratingValue: '=ngModel',
	        	max: '=?', // optional (default is 5)
	        	onRatingSelect: '&?',
	        	readonly: '=?'
	      	},
	      	link: function(scope, element, attributes) {
	        	if (scope.max == undefined) {
	          		scope.max = 5;
	        	}	
	        	function updateStars() {
		          	scope.stars = [];
		          	for (var i = 0; i < scope.max; i++) {
		            	scope.stars.push({
		              	filled: i < scope.ratingValue
		            	});
		          	}
	        	};

	        	scope.$watch('ratingValue', function(oldValue, newValue) {
		          	if (newValue) {
		            	updateStars();
		          	}
	        	});
	      	}
    	};
  	}

})();
