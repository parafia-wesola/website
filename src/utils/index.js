import polishMonths from './config';

export function heightOnMobile(breakpoint, element) {
	if (window.innerWidth < breakpoint) return element.offsetHeight;
	return 0;
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
