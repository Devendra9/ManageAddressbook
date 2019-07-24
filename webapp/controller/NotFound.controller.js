sap.ui.define([
		"myapp/product/Manageproduct/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("myapp.product.Manageproduct.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);