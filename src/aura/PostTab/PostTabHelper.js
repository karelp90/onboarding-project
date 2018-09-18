({
	handleActive: function (component) {
		var action = component.get("c.findAll");
		action.setCallback(this, function (response) {
			var state = response.getState();
			if (state === "SUCCESS") {
				component.set("v.posts", response.getReturnValue());
			}
			else {
				console.log("Failed load posts with state: " + state);
			}
		});
		$A.enqueueAction(action);
	}
})