public class SPA_SearchController {
     @AuraEnabled
    public static List <ContentDocument> getAccounts() {
        //return [SELECT Id, name, Type, Phone FROM Account ORDER BY createdDate ASC];
        return [SELECT Id, Title FROM ContentDocument];
    }    
    @AuraEnabled
    public static List<ContentDocument> findByName(String searchKey) {
        String title =  + searchKey + '%';
        return [SELECT id, title FROM ContentDocument WHERE title LIKE :title];
    }


}