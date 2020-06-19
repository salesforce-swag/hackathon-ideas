@isTest public class SPA_UserControllerTest {
     @isTest static void getAccounts()
    {
        
        Test.startTest();
        SPA_UserController.spa_registerUser('SPA-0006','pranathisanju10@gmail.com');
        System.assertEquals('Fetch Successfully','Fetch Successfully');
       // SPA_UserController.spa_registerUser('SPA-00099','pranathisanju@gmail.com');
        System.assertEquals(false,SPA_UserController.spa_registerUser('SPA-0009','pranathisanju@gmail.com'));
        Test.stopTest();
   
    }
    @isTest static void spa_updatePassword()
    {
        
        Test.startTest();
        //SPA_UserController.spa_updatePassword('pranathisanju10@gmail.com','Sanju@123');
        //SPA_User__c user = [SELECT Name FROM SPA_User__c WHERE SPA_Email__c ='pranathisanju10@gmail.com' ];
        //String email = 'email', password='password';
        
        
        //SPA_UserController.spa_updatePassword('pranathisanju10@gmail.com','Sanju@12');
        System.assertEquals(true,SPA_UserController.spa_updatePassword('pranathisanju10@gmail.com','Sanju@123'));
        
        Test.stopTest();

	}
    @isTest 
    public static void spa_loginUser() {
        String email = 'email', password='password';
        System.assertEquals(null,SPA_UserController.spa_loginUser(email,password));
        SPA_UserController.spa_loginUser('SPA-0006','Sanju@12');
    
    }

}