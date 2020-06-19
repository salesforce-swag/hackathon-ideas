({
	UploadFiles : function(component, event, helper) {
     var rlEvent = $A.get("e.force:navigateToRelatedList");
   rlEvent.setParams({
      "relatedListId": 'CombinedAttachments',
      "parentRecordId": component.get('v.userid')
   });
   rlEvent.fire();
    },
     SearchFiles:function(component, event, helper){
        var evt = $A.get("e.force:navigateToComponent");
				console.log('evt'+evt);
				evt.setParams({
				componentDef: "c:SPA_SearchPage",
                    componentAttributes: {
                  userid : component.get("v.userid")

        	}
				
			});
			evt.fire();
    }
    
})