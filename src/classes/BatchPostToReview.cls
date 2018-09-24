global class BatchPostToReview implements Database.Batchable<sObject>{

	List<User> managers = [Select Id, Name, ManagerId, Email From User];
	Map<String, String> emailsToSend = new Map<String, String>();

	global Database.QueryLocator start(Database.BatchableContext bc) {
        String query = 'SELECT Id, Name, Writer__r.Id, Writer__r.Name, Writer__r.OwnerId FROM Post__c  WHERE Status__c = \'Under Review\'';
		return Database.getQueryLocator(query);
    }

	global void execute(Database.BatchableContext bc, List<Post__c> scope){
        for (User manager : managers) {
			String body = '';
            for (Post__c post : scope) {
				if(post.Writer__r.OwnerId==manager.Id)
                    body += 'Post: ' + post.Name + ', Writer: ' + post.Writer__r.Name + '\n';     
            }
			if(body!='')
                emailsToSend.put(manager.Email, body);
        }
    }

	global void finish(Database.BatchableContext BC){
		for (User manager : managers) {
			if(emailsToSend.get(manager.Email)!=null)
				EmailManager.sendMail(manager.Email, 'List of posts to review', emailsToSend.get(manager.Email));
		}
    }  

}