sap.ui.core.UIComponent.extend("smax.batch2402.Component", {
	metadata : {
		manifest : "json"
	},
	//SAPUI5 Router
	init : function(){
		
		// intializing smax.batch2402 component with UIComponent, get get Router
		sap.ui.core.UIComponent.prototype.init.apply(this);
		
		// initlaize the router
		this.getRouter().initialize();
	}
})