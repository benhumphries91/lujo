(function(){
	var app = angular.module('lujo', []);

	app.controller('PropertyController', function(){
		this.villa = property;
	});

	var property = [
		{
			name: 'Hotel 1',
			price: 295,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in nisl ligula. Sed tempor gravida iaculis. Integer at tortor posuere, posuere lorem id, pellentesque sapien. Sed efficitur dui at magna tempor luctus. Suspendisse et placerat libero. Sed ultrices arcu mauris, quis sodales nisl egestas nec. Fusce mattis, lorem ac laoreet egestas, ligula libero accumsan arcu, eu bibendum orci dui nec risus. Sed sit amet efficitur lorem. Phasellus consequat sed tortor a vehicula. Aliquam a diam condimentum, sodales sem eget, commodo dui.',
		}, {
			name: 'Hotel 1',
			price: 295,
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in nisl ligula. Sed tempor gravida iaculis. Integer at tortor posuere, posuere lorem id, pellentesque sapien. Sed efficitur dui at magna tempor luctus. Suspendisse et placerat libero. Sed ultrices arcu mauris, quis sodales nisl egestas nec. Fusce mattis, lorem ac laoreet egestas, ligula libero accumsan arcu, eu bibendum orci dui nec risus. Sed sit amet efficitur lorem. Phasellus consequat sed tortor a vehicula. Aliquam a diam condimentum, sodales sem eget, commodo dui.',
		}
	];

})();