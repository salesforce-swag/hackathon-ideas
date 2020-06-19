public class SFDC_TestAutomation {

       @AuraEnabled
    public static List < ApexClass > fetchApexTest() {
        
          List<ApexClass> returnList = new List<ApexClass>();
          List < ApexClass > ac = [SELECT Id, Name, Status FROM ApexClass where Name like '%Test'];
        
        for (ApexClass apex: ac) {
               returnList.add(apex);
          }
         return returnList;
    
    
	}
    @AuraEnabled
	public static List<List < ApexClass >> fetchApex() {
 		List<List<ApexClass>> returnList = new List<List<ApexClass>>();
          List<ApexClass> passedList = new List<ApexClass>();   
		List<ApexClass> failedList = new List<ApexClass>();
       List<ApexClass> apclass1 = [SELECT Id, Name FROM ApexClass where not Name like '%Test'];
       List < ApexClass > apclass2 = [SELECT Name FROM ApexClass where Name like '%Test'];

        for (ApexClass apex1: apclass1) {
            integer flg = 0;
   			for (ApexClass apex2: apclass2) {
     			if(apex1.Name + 'Test'==apex2.Name) {
         			System.debug(' Success');
         			passedList.add(apex1);
                    flg=1;
            		break;
          		} 
   			}
            if(flg==0) {
                failedList.add(apex1);
            }
 		}
        returnList.add(passedList);
        returnList.add(failedList);

        return returnList; 
    }

}