sap.ui.controller("view.Page2", {

	
	onInit : function(){
		
		var oRouter = this.getOwnerComponent().getRouter();
		debugger;
		// when ever pattern of secondPage gets matched the framework will raise a event
		// called PatternMatched
		
		oRouter.getRoute("secondPage").attachPatternMatched(function(oEvent){
			
			// passed product ID
			var passedProductID = oEvent.getParameters().arguments.prod;
			
			this.getView().bindElement("/ProductSet('"+passedProductID+"')");
			
			debugger;
		},this)
		
	},
	
	gotoPage3 : function(){
		
		var oRouter = this.getOwnerComponent().getRouter();
		
		oRouter.navTo("thirdPage");
	}
});