sap.ui.core.UIComponent.extend("smax.batch2402.Component", {
	metadata : {
		rootView : "view.App",
		routing : {
			config : {
				routerClass : "sap.m.routing.Router",
				controlId : "idApp",
				controlAggregation : "pages",
				viewType : "XML"
			},
			routes : [
				{
					pattern : "",
					name : "firstPage",
					viewName : "view.Page1"
				
				},
				{
					pattern : "p2",
					name : "secondPage",
					viewName : "view.Page2"
				}, 
				{
					pattern : "p3",
					name : "thirdPage",
					viewName : "view.Page3"
				}
			]
		}
	},
	//SAPUI5 Router
	init : function(){
		
		// intializing smax.batch2402 component with UIComponent, get get Router
		sap.ui.core.UIComponent.prototype.init.apply(this);
		
		// initlaize the router
		this.getRouter().initialize();
	}
})