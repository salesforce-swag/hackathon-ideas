({
	SearchApexHelper: function(component, event) {
    // show spinner message
    // component.find("Id_spinner").set("v.class" , 'slds-show');
    var action = component.get("c.fetchApex");
         action.setCallback(this, function(response) {
       // hide spinner when response coming from server 
        //component.find("Id_spinner").set("v.class" , 'slds-hide');
        var state = response.getState();
        if (state === "SUCCESS") {
            var storeResponse = response.getReturnValue();

            console.log(storeResponse[0].length);
           console.log(storeResponse[1].length);
           console.log(storeResponse[0]);
            console.log(storeResponse[1]);

            // if storeResponse size is 0 ,display no record found message on screen.
            if (storeResponse[0].length == 0) {
                component.set("v.ApexMessage", true);
            } else {
                component.set("v.ApexMessage", false);
            }

 

            // set numberOfRecord attribute value with length of return value from server
            component.set("v.TotalNumberOfApexPositiveRecord", storeResponse[0].length);
            component.set("v.TotalNumberOfApexNegativeRecord", storeResponse[1].length);
 			console.log(storeResponse[0]);
            console.log(storeResponse[1]);
            
          
            // set searchResult list with return value from server.
            component.set("v.searchApexPositiveResult", storeResponse[0]); 
			//component.set("v.searchApexNegativeResult", storeResponse[1]); 
 

        }else if (state === "INCOMPLETE") {
            alert('Response is Incompleted');
        }else if (state === "ERROR") {
            var errors = response.getError();
            if (errors) {
                if (errors[0] && errors[0].message) {
                    alert("Error message: " + 
                                errors[0].message);
                }
            } else {
                alert("Unknown error");
            }
        }
    });
    $A.enqueueAction(action);
}
})