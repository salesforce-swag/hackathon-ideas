({
	spa_login : function(component, username, password) {
		
        var action = component.get("c.spa_loginUser");
        action.setParams({ username : username,
                          password	: password,
                          });
        action.setCallback(this, function(response) {
            console.log(response.getReturnValue());
            if(response.getReturnValue() != null) {
                console.log('login!');
                component.set('v.spa_user', response.getReturnValue() );
                console.log(component.get('v.spa_user'));
                alert('successful');
       
   var evt = $A.get("e.force:navigateToComponent");
				console.log('evt'+evt);
				evt.setParams({
				componentDef: "c:SPA_User_Home",
                    componentAttributes: {
                    SPA_user : component.get("v.spa_user")
                   
        	}
				
			});
			evt.fire();

    
        		
            }else {
                console.log('not logged in');
            	alert('not successful');
            }
        
		
	});
    $A.enqueueAction(action);
        
	}
})