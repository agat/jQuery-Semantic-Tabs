# jQuery Semantic Tabs плагин

Компактный jQuery плагин для создания, так называемых «вкладок».

## Ключевые особенности

* семантическая чистота вашего HTML-кода
* малый размер плагина(819 байт)
* простота использования

## Настройки

**tabSelector – string, ‘> dt’**  
CSS-селектор для выборки элементов, участвующих в построении навигации.

**bodySelector – string, ‘> dd’**  
CSS-селектор для выборки элементов c содержимым вкладки.

    // навигационный список составляется из тагов заголовков(h2),
    // а содержимое вкладки заключено в div-таг
    $('.b-tabs').semanticTabs({
    	tabSelector: '> h2',
    	bodySelector: '> div'
    });

**tabsCSSClass – string, ‘b-tabs’**  
CSS-класс, который будет применён к элементу без своего класса.

**tabsNavSuffix – string, ‘-nav’**  
Суффикс CSS-класса для навигационного списка. Полное имя класса складывается из имени класса блока с вкладками и суффикса навигации.

**tabsNavActiveSuffix – string, ‘-cur’**  
Суффикс CSS-класса для активной вкладки навигационного списка. Полное имя класса складывается из имени класса блока с вкладками и суффикса активной вкладки.

## Пример использования

	<style>
	/* Tabs block
	------------------------------ */
	.b-tabs { margin: 0 0 20px 0; }
	.b-tabs-nav {
		overflow: hidden;
		margin: 0 0 9px 0;
		background: #ccc;
		padding: 4px 4px 0 4px;
		border-width: 1px 1px 0 1px;
		-moz-border-radius: 4px 4px 0 0;
		-webkit-border-radius: 4px 4px 0 0;
		border-radius: 4px 4px 0 0;
	}
	.b-tabs-nav li {
		float: left;
		margin: 0 4px 0 0;
		list-style: none;
		padding: 0 16px;
		line-height: 28px;
		background: #eee;
		border-width: 1px 1px 0 1px;
		-moz-border-radius: 4px 4px 0 0;
		-webkit-border-radius: 4px 4px 0 0;
		border-radius: 4px 4px 0 0;
		color: #333;
		cursor: pointer;
	}
	.b-tabs .b-tabs-cur {
		background: #f2f2f5;
		color: #000;
		font-weight: bold;
	}
	</style>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.4.3/jquery.min.js"></script>	
	<script src="http://github.com/agat/jQuery-Semantic-Tabs/raw/master/js/jquery.semanticTabs.min.js"></script>
	
	<script>
	$(function() {
		$('.b-tabs').semanticTabs();
	});
	</script>
	
	<dl class="b-tabs">
		<dt>Tab 1</dt>
		<dd>
			<p>Lorem ipsum dolor sit amet...</p>
		</dd>
		<dt>Tab 2</dt>
		<dd>
			<p>Lorem ipsum dolor sit amet...</p>
		</dd>
	</dl><!-- b-tabs-dl -->