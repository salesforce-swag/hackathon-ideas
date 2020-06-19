public class SPA_UserController {
    @AuraEnabled
    public static boolean spa_registerUser(String username, String email) {
        SPA_User__c user = new SPA_User__c();
        user.SPA_Name_of_the_user__c = username;
        user.SPA_Email__c = email;
        Database.SaveResult result = Database.insert(user);
        if(result.isSuccess())
            return true;
        else {
            system.debug(result.getErrors());
            return false;
        }
            
        
    }
    
    @AuraEnabled
    public static boolean spa_updatePassword(String email, String password) {
        
        SPA_User__c user = [SELECT Name FROM SPA_User__c WHERE SPA_Email__c =:email ];
        user.SPA_Password__c = password;
        Database.SaveResult result = Database.update(user);
        if(result.isSuccess()) {
            return true;
        } else {
            system.debug(result.getErrors());
            return false;
        }
        
        
        
    }
    
    
    @AuraEnabled
    public static SPA_User__c spa_loginUser(String username, String password) {
        
        SPA_User__c user = [SELECT Id, SPA_Name_of_the_user__c, SPA_Email__c, SPA_Password__c, Name 
                            FROM SPA_User__c 
                            WHERE Name =: username 
                            	  AND
                           		  SPA_Password__c =: password 
                            LIMIT 1];
        if(user!=null) {
            return user;
        } else {
            return null;
        }
        
        
    }
}