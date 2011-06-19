$(function(){
	module("Semantic Tabs");

	test('Initialization', function(){
		expect(6);

		$('.b-tabs').semanticTabs();

		equal($('.b-tabs ul.b-tabs-nav').length, 1, 'Navigation UL block was not found');

		equal($('.b-tabs ul.b-tabs-nav li').length, 3, 'Navigation UL block\'s LI was not found');

		equal($('.b-tabs ul.b-tabs-nav li:first').hasClass('b-tabs-cur'), true, 'First tab in Navigation is not open');

		var lis = $('.b-tabs ul.b-tabs-nav li');
		var anyHasClass = false;
		$.each(lis, function(i, obj){
			if (i > 0) {
				if ($(obj).hasClass('b-tabs-cur')) {
					anyHasClass = true;
				}
			}
		});

		equal(anyHasClass, false, 'Other Navigation is open');

		equal($('.b-tabs dd:first').css('display'), 'block', 'First tab in Content is not open');

		var dds = $('.b-tabs dd');
		var anyNonHidden = false;
		$.each(dds, function(i, obj){
			console.log(i);
			if (i > 0) {
				if ($(obj).css('display') !== 'none') {
					anyNonHidden = true;
				}
			}
		});

		equal(anyNonHidden, false, 'Other blocks not hidden');

	});

	test('Click', function(){
		$('.b-tabs').semanticTabs();

		equal($('.b-tabs ul.b-tabs-nav li').length, 3, 'Navigation UL block\'s LI was not found');

		var nextTab = $('.b-tabs ul.b-tabs-nav li');

		$(nextTab[1]).trigger('click');

		var lis = $('.b-tabs ul.b-tabs-nav li');
		var anyHasClass = false;
		$.each(lis, function(i, obj){
			if (i !== 1) {
				if ($(obj).hasClass('b-tabs-cur')) {
					anyHasClass = true;
				}
			}
		});

		equal(anyHasClass, false, 'Other Navigation is open');

		var dds = $('.b-tabs dd');
		var anyNonHidden = false;
		$.each(dds, function(i, obj){
			console.log(i);
			if (i !== 1) {
				if ($(obj).css('display') !== 'none') {
					anyNonHidden = true;
				}
			}
		});

		equal(anyNonHidden, false, 'Other blocks not hidden');
	});

});