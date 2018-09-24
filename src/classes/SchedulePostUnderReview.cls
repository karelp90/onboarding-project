public class SchedulePostUnderReview {
	public static void executeSchedule() {
		PostToReviewEmailNotifToManager noti = new PostToReviewEmailNotifToManager();
		// Seconds Minutes Hours Day_of_month Month Day_of_week optional_year
		String sch = '0 0 00 * * ?';
		String jobID = System.schedule('NotifyManagersPostToReview', sch, noti);		
	}
}