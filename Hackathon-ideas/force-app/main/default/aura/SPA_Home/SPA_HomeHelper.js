({
	register : function(component, event, username, email) {
        console.log('helper');
        
        var action = component.get("c.spa_registerUser");
        action.setParams({ username : username,
                          email	: email,
                          });
        action.setCallback(this, function(response) {
            console.log(response.getReturnValue());
            if(response.getReturnValue() == true) {
                console.log('registered!');
        		component.set('v.input_email', false);
        		component.set('v.emailChat', true);
        		component.set('v.input_code', true);
            }else {
                console.log('not registered');
            }
        
		
	});
    $A.enqueueAction(action);
    },
    
    updatePassword : function(component, password, email) {
        var action = component.get("c.spa_updatePassword");
        action.setParams({ password : password,
                          email	: email,
                          });
        action.setCallback(this, function(response) {
            console.log(response.getReturnValue());
            if(response.getReturnValue() == true) {
                console.log('updated!');
        		component.set('v.spinners', false);
                component.set('v.passwordSuccess', true);
                component.set('v.goto_login', true);
            }else {
                console.log('not updated!');
            }
            });
    $A.enqueueAction(action);
    }
        
    
                           
})