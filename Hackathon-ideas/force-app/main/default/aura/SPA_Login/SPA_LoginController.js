({
	register : function(component, event, helper) {
		component.set('v.showReg', true);
        component.set('v.showLogin', false);
        
	},
    
    login : function(component, event, helper) {
        var username = component.get('v.username');
        var password = component.get('v.password');
        helper.spa_login(component, username, password);
    },
    
    
    
})