/*!
 * storage.js - Description
 * Copyright © 2013 by Ingenesis Limited. All rights reserved.
 * Licensed under the GPLv3 {@see license.txt}
 */

jQuery(document).ready(function($) {

	$.fn.storageEngineSettings = function (menu,context) {
		var $this = $(menu),
			selected = $this.val(),
			engine = (engines[selected]?engines[selected]:false),
			settings = {context:context},
			container = $('#'+context+'-storage-engine').empty();

			if (storageset != null && storageset[selected] != undefined && storageset[selected] != null) {
				$.each(storageset[selected],function (name,setting) {
					settings[name] = setting[context];
				});
			}
			ui = $.tmpl(engine,settings).appendTo(container).find('select').each(function () {
				$(this).val($(this).attr('title'));
			});

			$(window).scrollTop(0);

			return $this;
	};

	var	templates = $.each(engines,function (id,engine) {
			$.template(engine,$('#'+engine+'-editor'));
		}),
		imgsmenu = $('#image-storage').change(function () {
			$(this).storageEngineSettings(this,'image');
		}).change(),
		dlsmenu = $('#download-storage').change(function () {
			$(this).storageEngineSettings(this,'download');
		}).change();

});