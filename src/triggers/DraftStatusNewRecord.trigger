trigger DraftStatusNewRecord on Post__c (before insert, before update) {
    if (Trigger.isInsert & Trigger.isBefore) {
        for(Post__c post : Trigger.New) {
            post.Status__c = 'Draft';     
        }                     
    }
    else if (Trigger.isUpdate & Trigger.isBefore) {
        for(Integer i=0; i<Trigger.New.size(); i++) {
           if(Trigger.New[i].Status__c!='Under Review'){
                if(Trigger.New[i].Status__c=='Ready'){
                    if (Trigger.New[i].OwnerId!=Trigger.Old[i].OwnerId) {
                       Trigger.New[i].addError('The Post can only be set to Ready by the post owner’s manager.');
                        Trigger.New[i].Status__c = Trigger.Old[i].Status__c;                                 
                    }                    
                } else if(Trigger.Old[i].Status__c!='Under Review' & Trigger.New[i].Status__c!='Draft'){
                        Trigger.New[i].Status__c = Trigger.Old[i].Status__c;
                        Trigger.New[i].addError('Only you can switch it to status "Under Review".');
                    }
           }
        }
    }
}