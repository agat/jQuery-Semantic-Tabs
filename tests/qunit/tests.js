$(function(){
	module("Semantic Tabs");

	test('Initialization', function(){
		expect(7);

		$('#my-nav-1').semanticTabs();
		
		equal($('#my-nav-1').hasClass('b-tabs'), true, 'No class .b-tabs on main object');

		equal($('#my-nav-1 ul.b-tabs-nav').length, 1, 'Navigation UL block was not found');

		equal($('#my-nav-1 ul.b-tabs-nav li').length, 3, 'Navigation UL block\'s LI was not found');

		equal($('#my-nav-1 ul.b-tabs-nav li:first').hasClass('b-tabs-cur'), true, 'First tab in Navigation is not open');

		var lis = $('#my-nav-1 ul.b-tabs-nav li');
		var anyHasClass = false;
		$.each(lis, function(i, obj){
			if (i > 0) {
				if ($(obj).hasClass('b-tabs-cur')) {
					anyHasClass = true;
				}
			}
		});

		equal(anyHasClass, false, 'Other Navigation is open');

		equal($('#my-nav-1 dd:first').css('display'), 'block', 'First tab in Content is not open');

		var dds = $('#my-nav-1 dd');
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
		
		expect(4);
		
		$('#my-nav-1').semanticTabs();
		
		equal($('#my-nav-1').hasClass('b-tabs'), true, 'No class .b-tabs on main object');

		equal($('#my-nav-1 ul.b-tabs-nav li').length, 3, 'Navigation UL block\'s LI was not found');

		var nextTab = $('#my-nav-1 ul.b-tabs-nav li');

		$(nextTab[1]).trigger('click');

		var lis = $('#my-nav-1 ul.b-tabs-nav li');
		var anyHasClass = false;
		$.each(lis, function(i, obj){
			if (i !== 1) {
				if ($(obj).hasClass('b-tabs-cur')) {
					anyHasClass = true;
				}
			}
		});

		equal(anyHasClass, false, 'Other Navigation is open');

		var dds = $('#my-nav-1 dd');
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
	
	test('Custom Initialization', function(){
		expect(7);

		$('#my-nav-1').semanticTabs({
			'tabsCSSClass': 'my-super-tabs',
			'tabsNavSuffix': '-van',
			'tabsNavActiveSuffix': '-ruc'
		});
		
		equal($('#my-nav-1').hasClass('my-super-tabs'), true, 'No class .my-super-tabson main object');

		equal($('#my-nav-1 ul.my-super-tabs-van').length, 1, 'Navigation UL block was not found');

		equal($('#my-nav-1 ul.my-super-tabs-van li').length, 3, 'Navigation UL block\'s LI was not found');

		equal($('#my-nav-1 ul.my-super-tabs-van li:first').hasClass('my-super-tabs-ruc'), true, 'First tab in Navigation is not open');

		var lis = $('#my-nav-1 ul.my-super-tabs-van li');
		var anyHasClass = false;
		$.each(lis, function(i, obj){
			if (i > 0) {
				if ($(obj).hasClass('my-super-tabs-ruc')) {
					anyHasClass = true;
				}
			}
		});

		equal(anyHasClass, false, 'Other Navigation is open');

		equal($('#my-nav-1 dd:first').css('display'), 'block', 'First tab in Content is not open');

		var dds = $('#my-nav-1 dd');
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

});