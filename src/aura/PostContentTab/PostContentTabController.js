({
	onRender: function (component, event, helper) {
		if (component.get('v.simpleRecord') != undefined)
			component.set('v.markDownText', helper.formatterTextMarkdown(component.get('v.simpleRecord').Content__c));
	},
	handleSaveRecord: function (component, event, helper) {
		helper.saveContentAuto(component);
	},
	handleSubmitReview: function (component, event, helper) {
		helper.updateSatusUnderReview(component);
	},
	handleSubmitPublish: function (component, event, helper) {
		helper.updateSatusPublish(component);
	}
})