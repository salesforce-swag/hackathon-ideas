({
     SearchApexHelper: function(component, event) {
    // show spinner message
     component.find("Id_spinner").set("v.class" , 'slds-show');
    var action = component.get("c.fetchApex");
         action.setCallback(this, function(response) {
       // hide spinner when response coming from server 
        component.find("Id_spinner").set("v.class" , 'slds-hide');
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
            
            
          
            // set searchResult list with return value from server.
            component.set("v.searchApexPositiveResult", storeResponse[0]); 
			component.set("v.searchApexNegativeResult", storeResponse[1]); 
 

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
},
    SearchApexTestHelper: function(component, event) {
    // show spinner message
     component.find("Id_spinner").set("v.class" , 'slds-show');
    var action = component.get("c.fetchApexTest");
         action.setCallback(this, function(response) {
       // hide spinner when response coming from server 
        component.find("Id_spinner").set("v.class" , 'slds-hide');
        var state = response.getState();
        if (state === "SUCCESS") {
            var storeResponse = response.getReturnValue();
           console.log(storeResponse.length);
            
            //for(var i=0;i<storeResponse[0].length;i++){
                //console.log(storeResponse[0][i].Name);
           // }
            // if storeResponse size is 0 ,display no record found message on screen.
            if (storeResponse.length == 0) {
                component.set("v.ApexTestMessage", true);
            } else {
                
                component.set("v.ApexTestMessage", false);
            }

 

            // set numberOfRecord attribute value with length of return value from server
            component.set("v.TotalNumberOfApexTestRecord", storeResponse.length);
            
            console.log(storeResponse[0]);
          //console.log(storeResponse[0][i]);
            // set searchResult list with return value from server.
            //component.set("v.searchApexTestPositiveResult", storeResponse[0][i]); 
            component.set("v.searchApexTestResult", storeResponse);

 

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