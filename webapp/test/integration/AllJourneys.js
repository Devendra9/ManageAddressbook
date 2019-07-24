/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"myapp/product/Manageproduct/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"myapp/product/Manageproduct/test/integration/pages/Worklist",
	"myapp/product/Manageproduct/test/integration/pages/Object",
	"myapp/product/Manageproduct/test/integration/pages/NotFound",
	"myapp/product/Manageproduct/test/integration/pages/Browser",
	"myapp/product/Manageproduct/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "myapp.product.Manageproduct.view."
	});

	sap.ui.require([
		"myapp/product/Manageproduct/test/integration/WorklistJourney",
		"myapp/product/Manageproduct/test/integration/ObjectJourney",
		"myapp/product/Manageproduct/test/integration/NavigationJourney",
		"myapp/product/Manageproduct/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});