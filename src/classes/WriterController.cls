public with sharing class WriterController {
	@AuraEnabled
    public static List<Contact> findAll () {
        return [SELECT Name, Email, Phone  FROM Contact order by Name];
    }

	@AuraEnabled
    public static List<AggregateResult> findWritersWithPosts () {
        return [SELECT Writer__r.Name, Writer__r.Email, Writer__r.Phone,count(Id) postCount  FROM Post__c group by Writer__r.Name, Writer__r.Email, Writer__r.Phone];
    }
}