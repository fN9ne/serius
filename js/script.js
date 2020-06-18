function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else{
		document.querySelector('body').classList.add('no-webp');
	}
});

gsap.timeline({
	scrollTrigger: {
		trigger: ".face2",
		start: "center center",
		end: "bottom top",
		markers: false,
		scrub: true,
		pin: true,
	}
})

.from(".h1", { x : innerWidth * 1 })
.from(".text", { x : innerWidth * -1 })
.from(".text1", { x : innerWidth * 1 })
.from(".text2", { x : innerWidth * -1 })
.from(".text3", { x : innerWidth * -1 })
.from(".text4", { x : innerWidth * -1 })
.from(".text5", { x : innerWidth * -1 })
.from(".text6", { x : innerWidth * 1 })
.from(".text7", { x : innerWidth * -1 })
.from(".text8", { x : innerWidth * -1 })
.from(".text9", { x : innerWidth * -1 })
.from(".text10", { x : innerWidth * -1 })
.from(".text11", { x : innerWidth * -1 })
.from(".text12", { x : innerWidth * -1 })
.from(".text13", { x : innerWidth * -1 })
.from(".text14", { x : innerWidth * 1 })
.from(".sho", {
	y : innerHeight * 1,
	rotate: 360,
})

gsap.timeline({
	scrollTrigger: {
		trigger: ".face3",
		start: "center center",
		end: "bottom top",
		markers: false,
		scrub: true,
		pin: true,
	}
})

.from(".face3", { opacity: 0 })
.from(".text16", { x : innerWidth * 1 })
.from(".text17", { x : innerWidth * 1 })
.from(".text18", { x : innerWidth * 1 })