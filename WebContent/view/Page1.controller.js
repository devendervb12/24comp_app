sap.ui.controller("view.Page1", {

	gotoPage2 : function(){
		// navigate to page 2
		
		// get the router
		var oRouter = this.getOwnerComponent().getRouter();
		
		oRouter.navTo("secondPage");
		
	}

});