({
	saveContentAuto: function (component) {
		component.set('v.markDownText', this.formatterTextMarkdown(component.get('v.simpleRecord').Content__c));

		window.setTimeout(
			$A.getCallback(function () {
				component.find("recordEditor").saveRecord($A.getCallback(function (saveResult) {
					if (saveResult.state === "SUCCESS" || saveResult.state === "DRAFT") {
						console.log("Save completed successfully.");
					} else if (saveResult.state === "INCOMPLETE") {
						console.log("User is offline, device doesn't support drafts.");
					} else if (saveResult.state === "ERROR") {
						console.log('Problem saving record, error: ' +
							JSON.stringify(saveResult.error));
					} else {
						console.log('Unknown problem, state: ' + saveResult.state + ', error: ' + JSON.stringify(saveResult.error));
					}
				}));
			}), 3000
		);
	},
	formatterTextMarkdown: function (rawText) {
		return marked(rawText);
	},
	updateSatusUnderReview: function (component) {
		var post = component.get("v.simpleRecord");
		post.Status__c = "Under Review";
		component.set("v.simpleRecord", post);
		this.saveContentAuto(component);
		this.showMessage('Under Review');
	},
	updateSatusPublish: function (component) {
		var post = component.get("v.simpleRecord");
		post.Status__c = "Published";
		component.set("v.simpleRecord", post);
		this.saveContentAuto(component);
		this.showMessage('Published');
	},
	showMessage: function (status) {
		var resultsToast = $A.get("e.force:showToast");
		resultsToast.setParams({
			"title": "Update",
			"message": "The status post was updated to: " + status
		});
		resultsToast.fire();
	}
})