export class Table {
	constructor(selector) {
		this.selector = document.querySelector(selector);
		if (!selector) return;

		this.rows = this.selector.querySelectorAll('.accent-table__row');
		this.contents = this.selector.querySelectorAll('.accent-table__content');

		this.#initEvents();
	}

	#getContentByRow(rowId) {
		return this.selector.querySelector(`.accent-table__content[data-row="${rowId}"]`);
	}

	showContent(content) {
		const inner = content.querySelector('.accent-table__content-inner');

		content.classList.add('accent-table__content--active');

		inner.style.maxHeight = '0px';

		requestAnimationFrame(() => {
			const height = inner.scrollHeight;
			inner.style.maxHeight = height + 'px';
		});
	}

	hideContent(content) {
		const inner = content.querySelector('.accent-table__content-inner');

		inner.style.maxHeight = inner.scrollHeight + 'px';

		requestAnimationFrame(() => {
			inner.style.maxHeight = '0px';
		});

		content.classList.remove('accent-table__content--active');
	}

	#handleRowClick(e, row) {
		e.preventDefault();
		e.stopPropagation();

		if (e.target.closest('button')) return;

		console.log(row);

		const rowId = row.dataset.row;
		const content = this.#getContentByRow(rowId);
		if (!content) return;

		const isOpen = content.classList.contains('accent-table__content--active');

		this.contents.forEach((c) => this.hideContent(c));

		if (!isOpen) {
			this.showContent(content);
		}
	}

	#initEvents() {
		this.rows.forEach((row) => {
			row.addEventListener('click', (e) => this.#handleRowClick(e, row));
		});
	}
}
