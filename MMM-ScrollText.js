/* Magic Mirror
 * Module: MMM-ScrollText
 *
 * By Andy Brown
 */

Module.register("MMM-ScrollText",{

	defaults: {
		text: "Hello World! - Nothing is configured, please configure me",
		animationSpeed: 2.5 * 1000,
		scrollLength: "30",
		width: "500px",
	},

	getDom: function () {
		var outer_dom = document.createElement("div"); // outer full size
		var dom = document.createElement("div"); // inner width and centering
		dom.id = "ScrollText";
//		dom.className = "small dimmed no-wrap";
		dom.className = "small dimmed";
		dom.style.whiteSpace = "nowrap";
		dom.style.overflow = "hidden";
//		dom.style.textOverflow = "ellipsis";
		dom.style.paddingright = "100%";
		dom.style.width = this.config.width;
		dom.style.margin = "0 auto";
		var final_text = this.config.text;
		for (var i = 0; i < this.config.text.length; i++) {
			var final_text = final_text + "&nbsp";
		};
		dom.innerHTML = final_text;
		outer_dom.appendChild(dom);
		return outer_dom
	},

	start: function() {
		Log.info("Starting module: " + this.name);
		// call the update routine to update the dom
		var sleeptimer=0;
		setInterval(function() {
			var dom = document.getElementById("ScrollText");
			// oversize so it scrolls to blank
			var ScrollWidth = dom.scrollWidth - dom.clientWidth;
			var amount_scroll = dom.scrollLeft + 10;
			Log.info("MMM-ScrollText scrollwidth: " + ScrollWidth + "  and amount_scroll: " +amount_scroll);
			if (amount_scroll <= ScrollWidth) {
				//dom.style.transition = "transform 0.3s ease";
				//dom.style.transform = "translateX(-30px)";
				dom.scrollTo({left: amount_scroll,top: 0,behavior: 'smooth'});
			} else {
				dom.scrollTo({left: 0,top: 0,behavior: 'smooth'});
				dom.scrollLeft=0;
			};
		}, 300); //perform every 1000 milliseconds.
	}
});
