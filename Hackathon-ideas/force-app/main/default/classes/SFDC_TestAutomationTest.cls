@isTest public class SFDC_TestAutomationTest {
    @isTest static void fetchApexTest()
    {
        
        Test.startTest();
        SFDC_TestAutomation.fetchApexTest();
        System.assertEquals('Fetch Successfully','Fetch Successfully');
        Test.stopTest();
   
    }
    @isTest static void fetchApex()
    {
        
        Test.startTest();
        SFDC_TestAutomation.fetchApex();
        System.assertEquals('Fetch Successfully','Fetch Successfully');
        Test.stopTest();
   
    }

}