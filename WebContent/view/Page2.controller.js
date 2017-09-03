sap.ui.controller("view.Page2", {

	gotoPage3 : function(){
		
		var oRouter = this.getOwnerComponent().getRouter();
		
		oRouter.navTo("thirdPage");
	}
});