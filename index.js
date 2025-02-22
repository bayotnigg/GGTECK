//scroll anim

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry);
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		} else {
			entry.target.classList.remove("show");
			entry.target.classList.add("hide");
		}
	});
});

const hiddenElems = document.querySelectorAll(".scroll");
const hiddenElemsRight = document.querySelectorAll(".scroll-right");

hiddenElems.forEach((el) => observer.observe(el));
hiddenElemsRight.forEach((el) => observer.observe(el));
