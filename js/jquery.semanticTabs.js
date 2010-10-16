/*
 * jQuery sematicTabs
 * @copyright Aleksej Romanovskij http://agat.in/jquery-semantictabs/
 * @version 0.1
 */

(function($){
$.fn.sematicTabs = function(options) {
	var defaults = {
		tabSelector: '> dt',
		bodySelector: '> dd',
		tabsCSSClass: 'b-tabs',
		tabsNavSuffix: '-nav',
		tabsNavActiveSuffix: '-cur'
	};
	
	options = $.extend(defaults, options);
    
	return this.each(function() {
		var obj = $(this),
			sObjCSSClass = obj.attr('class').split(' ')[0],
			cNav = sObjCSSClass + options.tabsNavSuffix;
			cNavActive = sObjCSSClass + options.tabsNavActiveSuffix;
		
		if(sObjCSSClass == '') {
			obj.attr('class') = sObjCSSClass;
		}
		
		// Tabs Navigation
		var strTabsNav = "<ul class='" + cNav + "'>";
		obj.find(options.tabSelector).each(function(){
			strTabsNav += '<li><span>' + $(this).html() + '</span></li>';
		});
		strTabsNav += '</ul>';
		
		// Change DOM
		obj.prepend(strTabsNav).find(options.tabSelector).remove().end()
			.find('> .' + cNav + ' li:first-child').addClass(cNavActive).end()
			.find(options.bodySelector).hide().filter(':eq(0)').show();
		
		// Navigation Events
		obj.find('> .' + cNav).click(function(e) {
			var $nav = $(e.target).closest('li');
			
			if(!$nav.hasClass(sObjCSSClass + options.tabsNavActiveSuffix)) {
				$nav.addClass(sObjCSSClass + options.tabsNavActiveSuffix).siblings().removeClass(sObjCSSClass + options.tabsNavActiveSuffix)
					.closest('.' + sObjCSSClass)
					.find(options.bodySelector).hide().filter(':eq(' + $nav.index() + ')').show();
				
			}
		});
	});
};
})(jQuery);