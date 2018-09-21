({
	updatePath: function (component) {
		var currentStatus = component.get("v.current");
		var li = component.find(currentStatus);
		switch (currentStatus) {
			case 'Draft':
				this.updateCurrentItemCss(li);
				break;
			case 'Under Review':
				this.updatePassedItemCss(component, 'Under Review');
				this.updateCurrentItemCss(li);
				break;
			case 'Ready':
				this.updatePassedItemCss(component, 'Ready');
				this.updateCurrentItemCss(li);
				break;
			case 'Published':
				this.updatePassedItemCss(component, 'Published');
				this.updateCurrentItemCss(li);
				break;
		}
	},
	updateCurrentItemCss: function (li) {
		$A.util.removeClass(li, 'slds-is-incomplete');
		$A.util.addClass(li, 'slds-is-current');
		$A.util.addClass(li, 'slds-is-active');
	},
	updatePassedItemCss: function (component, status) {
		switch (status) {
			case 'Under Review':
				var li = component.find('Draft');
				this.removeActiveAndCurrentClassPreviusItem(li);
				this.completedItemCss(li);
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
	completedItemCss: function (li) {
		$A.util.removeClass(li, 'slds-is-incomplete');
		$A.util.addClass(li, 'slds-is-complete');
	},
	removeActiveAndCurrentClassPreviusItem: function (li) {
		$A.util.removeClass(li, 'slds-is-active');
		$A.util.removeClass(li, 'slds-is-current');
	}
})