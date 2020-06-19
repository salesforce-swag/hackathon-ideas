({
    SearchApex:function(component,event,helper){
        helper.SearchApexHelper(component,event);
    },
     SearchApexTest:function(component,event,helper){
        helper.SearchApexTestHelper(component,event);
    },
    Next : function(component, event, helper) {
    var evt = $A.get("e.force:navigateToComponent");
    evt.setParams({
        componentDef : "c:HackathonResult",
        componentAttributes: {
                TotalNumberOfApexPositiveRecord : component.get("v.TotalNumberOfApexPositiveRecord"),
                TotalNumberOfApexTestRecord : component.get("v.TotalNumberOfApexTestRecord"),
                TotalNumberOfApexNegativeRecord : component.get("v.TotalNumberOfApexNegativeRecord"),
                searchApexNegativeResult : component.get("v.searchApexNegativeResult")
                
                //ApexMessage : component.get("v.ApexMessage")
                
           
            }
     
    });
    evt.fire();
    }
    })