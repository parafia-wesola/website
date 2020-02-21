function smoothScroll(to, offset, duration) {
	const destination = document.getElementById(to);
	if (!destination) return;

	const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

	const position = (start, end, elapsed) => {
		const speed = easeInOutCubic(elapsed / duration);
		return start + (end - start) * speed;
	};

	const start = window.pageYOffset;
	const end = destination.getBoundingClientRect().top + start - offset;
	const clock = Date.now();
	const step = () => {
		const elapsed = Date.now() - clock;
		window.scroll(0, position(start, end, elapsed));

		if (elapsed < duration) window.requestAnimationFrame(step);
	};
	step();
}

export default smoothScroll;
