export const fixWYSIWYG = () => {
	const inlineStyles = `
  [data-slate-editor] {
    -webkit-user-modify: read-write !important;
  }
`;
	const head = document.head || document.getElementsByTagName('head')[0];
	const style = document.createElement('style');

	head.appendChild(style);
	style.appendChild(document.createTextNode(inlineStyles));
};
