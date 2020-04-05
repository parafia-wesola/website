import polishMonths from './config';

export function verticalPosition(element, offset) {
	const el = document.querySelector(element);
	const actualPos = window.pageYOffset;
	const destPosition = actualPos + el.getBoundingClientRect().top - offset;
	return [actualPos, destPosition];
}

export function getFormattedDate() {
	const environment = typeof window !== 'undefined' ? window : global;
	const actualDate = new environment.Date();
	const day = actualDate.getDate();
	const month = actualDate.getMonth();
	const year = actualDate.getFullYear();
	const formattedDate = `${day} ${polishMonths[month]} ${year}`;
	return [formattedDate, actualDate];
}

export async function getReadings() {
	const cors = 'https://cors-anywhere.herokuapp.com/';
	const url = 'https://www.edycja.pl/ext/ssl-dzien_json.php';

	if (typeof window === 'undefined') return false;
	return new Promise((resolve, reject) => {
		const xhr = new window.XMLHttpRequest();

		xhr.open('GET', `${cors}${url}`, true);

		xhr.addEventListener('load', () => {
			if (xhr.status === 200) {
				const data = JSON.parse(xhr.responseText);
				resolve(data);
			} else {
				reject(new Error('błąd wczytywania'));
			}
		});

		xhr.send();
	});
}

export function dataFilter(data, collectionName) {
	if (!data || !data.frontmatter[collectionName]) return [];
	const filteredData = data.frontmatter[collectionName].filter(
		el => el.title,
	);
	return filteredData;
}

export function getOffset(offsetElementName) {
	if (typeof window === 'undefined') return 0;
	const offsetElement = document.querySelector(offsetElementName);
	if (!offsetElement) return 0;

	const style = window.getComputedStyle(offsetElement).position;
	if (style !== 'fixed' && style !== 'sticky') return 0;

	const offset = offsetElement.offsetHeight;
	return offset;
}

const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

function position(start, end, elapsed, duration) {
	const speed = easeInOutCubic(elapsed / duration);
	return start + (end - start) * speed;
}

export function smoothScroll(to, offset, duration) {
	const start = window.pageYOffset;
	const end = to + start - offset;
	const clock = Date.now();
	function step() {
		const elapsed = Date.now() - clock;
		window.scroll(0, position(start, end, elapsed, duration));

		if (elapsed < duration) window.requestAnimationFrame(step);
	}
	step();
}
