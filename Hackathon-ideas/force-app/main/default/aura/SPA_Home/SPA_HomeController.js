({
	init : function(component, event, helper) {

    var today = new Date();

    var monthDigit = today.getMonth() + 1;

    if (monthDigit <= 9) {

        monthDigit = '0' + monthDigit; 

    }

    component.set('v.today', today.getDate() + "-" + monthDigit + "-" + today.getFullYear());

},
    sendName : function(component, event, helper) {
        component.set('v.initial', false);
        component.set('v.nameChat', true);
        component.set('v.input_email', true);
        
        //component.find("inputField").set("v.value", "{!v.user_email}");
        //component.find("sendButton").set("v.onclick", " ");
        //component.set('v.emailChat', true);
        
        
    },
    
    sendEmail : function(component, event, helper) {
        console.log('controller');
        var username = component.get('v.user_name');
        var email = component.get('v.user_email');
        helper.register(component, event, username, email);
        
    	
    },
    
    sendCode : function(component, event, helper) {
        
        component.set('v.input_code', false);
        var code = component.get('v.user_code');
        if(code == '1234') {
            component.set('v.verify_message', "Sucessfully verified your email!");
            component.set('v.codeChat', true);
            component.set('v.input_code_reenter', false);
            component.set('v.passwordChat', true);
            component.set('v.input_password', true);
            
        } else {
            component.set('v.verify_message', "PIN you've entered is incorrect!, please enter correct PIN");
            component.set('v.codeChat', true);
            component.set('v.input_code_reenter', true);
        } 
    },
    
    sendPassword : function(component, event, helper) {
        var password = component.get('v.user_password');
        var email = component.get('v.user_email');
        component.set('v.input_password', false);
        component.set('v.spinners', true);
        helper.updatePassword(component, password, email );
        
        
        
    },
    
    login : function(component, event, helper) {
        var evt = $A.get("e.force:navigateToComponent");
				console.log('evt'+evt);
				evt.setParams({
				componentDef: "c:SPA_Login",
                    componentAttributes :
                    {
                    
                }
 
			});
			evt.fire();
    }

})