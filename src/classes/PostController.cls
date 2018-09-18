public with sharing class PostController {
	@AuraEnabled
    public static List<Post__c> findAll () {
        return [SELECT Id, Name, Writer__r.Name, Published_Date__c, Status__c, Tags__c  FROM Post__c order by Writer__r.Name];
    }
}