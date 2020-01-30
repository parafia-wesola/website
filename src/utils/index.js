export function heightOnMobile(breakpoint, element) {
	if (window.innerWidth < breakpoint) return element.offsetHeight;
	return 0;
}

export default heightOnMobile;
