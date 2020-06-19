({
    
    init : function(component, event, helper) {

    var today = new Date();

    var monthDigit = today.getMonth() + 1;

    if (monthDigit <= 9) {

        monthDigit = '0' + monthDigit; 

    }

    component.set('v.today', today.getDate() + "-" + monthDigit + "-" + today.getFullYear());

},
    
 
	sendOption : function(component, event, helper) {
		var opt = component.get('v.user_input');
        console.log(opt);
        if(opt == '1') {
            var rlEvent = $A.get("e.force:navigateToRelatedList");
   			rlEvent.setParams({
      			"relatedListId": 'CombinedAttachments',
      			"parentRecordId": component.get('v.SPA_user.Id')
   			});
   			rlEvent.fire();
        } 
        else if(opt == '2') {
            var evt = $A.get("e.force:navigateToComponent");
				console.log('evt'+evt);
				evt.setParams({
				componentDef: "c:SPA_SearchPage",
                    componentAttributes: {
                  	userid : component.get("v.SPA_user.Id")

        	}
				
			});
			evt.fire();
        }
	}
})