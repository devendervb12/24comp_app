sap.ui.controller("view.Page3", {

	gotoPage1  :function(){
		this.getOwnerComponent().getRouter().navTo("firstPage");
	}

});