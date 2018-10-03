({
	updatePath: function (component) {
		var currentStatus = component.get("v.current");
		var currentStatusHtmlComponent = component.find(currentStatus);
		switch (currentStatus) {
			case 'Draft':
				this.updateCurrentItemCss(currentStatusHtmlComponent);
				break;
			case 'Under Review':
				this.updatePassedItemCss(component, 'Under Review');
				this.updateCurrentItemCss(currentStatusHtmlComponent);
				break;
			case 'Ready':
				this.updatePassedItemCss(component, 'Ready');
				this.updateCurrentItemCss(currentStatusHtmlComponent);
				break;
			case 'Published':
				this.updatePassedItemCss(component, 'Published');
				this.updateCurrentItemCss(currentStatusHtmlComponent);
				break;
		}
	},
	updateCurrentItemCss: function (currentStatusHtmlComponent) {
		$A.util.removeClass(currentStatusHtmlComponent, 'slds-is-incomplete');
		$A.util.addClass(currentStatusHtmlComponent, 'slds-is-current');
		$A.util.addClass(currentStatusHtmlComponent, 'slds-is-active');
	},
	updatePassedItemCss: function (component, status) {
		switch (status) {
			case 'Under Review':
				var currentStatusHtmlComponent = component.find('Draft');
				this.removeActiveAndCurrentClassPreviusItem(currentStatusHtmlComponent);
				this.completedItemCss(currentStatusHtmlComponent);
				break;
			case 'Ready':
				this.completedItemCss(component.find('Draft'));
				this.completedItemCss(component.find('Under Review'));
				break;
			case 'Published':
				this.completedItemCss(component.find('Draft'));
				this.completedItemCss(component.find('Under Review'));
				this.completedItemCss(component.find('Ready'));
				this.removeActiveAndCurrentClassPreviusItem(component.find('Ready'));
				break;
		}
	},
	completedItemCss: function (completedStatusHtmlComponent) {
		$A.util.removeClass(completedStatusHtmlComponent, 'slds-is-incomplete');
		$A.util.addClass(completedStatusHtmlComponent, 'slds-is-complete');
	},
	removeActiveAndCurrentClassPreviusItem: function (previousStatusHtmlComponent) {
		$A.util.removeClass(previousStatusHtmlComponent, 'slds-is-active');
		$A.util.removeClass(previousStatusHtmlComponent, 'slds-is-current');
	}
})