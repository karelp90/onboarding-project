({
	handleActive: function (component) {
		console.log("writers tab");
		var action = component.get("c.findWritersWithPosts");
		action.setCallback(this, function (response) {
			var state = response.getState();
			if (state === "SUCCESS") {
				component.set("v.writers", response.getReturnValue());
			}
			else {
				console.log("Failed load writers with state: " + state);
			}
		});
		$A.enqueueAction(action);
	}
})