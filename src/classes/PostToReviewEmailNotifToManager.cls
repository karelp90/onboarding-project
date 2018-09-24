global class PostToReviewEmailNotifToManager implements Schedulable {
global void execute(SchedulableContext ctx) {
    
    BatchPostToReview b = new BatchPostToReview();
    database.executebatch(b,200);
       
    }
}