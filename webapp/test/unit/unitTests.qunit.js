/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/fio/captcha/ZFIO_CAPTCHA/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});