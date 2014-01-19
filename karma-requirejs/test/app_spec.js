define(['app', 'jquery', 'lodash'], function(App, $, _) {

	describe('just checking', function() {

		it('works for app', function() {	
			var el = $('<div></div>');
			var app = new App(el);
			app.render();
			expect(el.text()).toEqual('require.js up and running');
		});
	
		it('works for underscore', function() {
			expect(_.size([1,2,3])).toEqual(3);
		});
		
		it('true equals true', function(){
			expect( true ).toEqual(true);
		});

		it('4*3 equals 12', function(){
			expect(4*3).toEqual(12);
		});

		it('30/5 equals 6', function(){
			expect(30/5).toEqual(6);
		});

		it('Even mod 2 equals 0', function(){
			expect(16%2).toEqual(0);
		});

		it('10>5 equals true', function(){
			expect(10>5).toEqual(true);
		});

		it('negative number^2 greater than zero', function(){
			expect(((-2)*(-2)) > 0).toEqual(true);
		});

		it('30-37 equals -7', function(){
			expect(30-37).toEqual(-7);
		});

	});

});

