sap.ui.controller("view.Page1", {

	/*onInit : function(){
		
		
		var url = "proxy/http/122.180.87.238:8000/sap/opu/odata/SAP/ZGW_BATCH23_PRODUCT01_SRV/";
		var oModel = new sap.ui.model.odata.v2.ODataModel(url);
		this.getView().setModel(oModel);
		
	},*/
	
	gotoPage2 : function(){
		// navigate to page 2
		
		// get the router
		var oRouter = this.getOwnerComponent().getRouter();
		
		oRouter.navTo("secondPage");
		
	}

});