export class Table {
	constructor(selector) {
		this.selector = document.querySelector(selector);
		if (!selector) return;

		this.rows = this.selector.querySelectorAll('.accent-table__row');
		this.contents = this.selector.querySelectorAll('.accent-table__content');
	}

	#getContentByRow(rowId) {
		return this.selector.querySelector(`.accent-table__content[data-row="${rowId}"]`);
	}

	showContent(content) {
		const inner = content.querySelector('.accent-table__content-inner');

		inner.addEventListener(
			'transitionend',
			() => {
				if (content.classList.contains('accent-table__content--active')) {
					inner.style.maxHeight = 'none';
				}
			},
			{ once: true },
		);

		content.classList.add('accent-table__content--active');

		const height = inner.scrollHeight;

		const duration = Math.min(Math.max(height / 600, 0.25), 0.6);

		inner.style.transition = `max-height ${duration}s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease`;

		inner.style.maxHeight = '0px';

		requestAnimationFrame(() => {
			inner.style.maxHeight = height + 'px';
			inner.style.opacity = 1;
		});
	}

	hideContent(content) {
		const inner = content.querySelector('.accent-table__content-inner');

		const height = inner.scrollHeight;

		const duration = Math.min(Math.max(height / 600, 0.25), 0.6);

		inner.style.transition = `max-height ${duration}s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease`;

		inner.style.maxHeight = height + 'px';

		requestAnimationFrame(() => {
			inner.style.maxHeight = '0px';
			inner.style.opacity = 0;
		});

		content.classList.remove('accent-table__content--active');
	}

	handleRowClick(e, row) {
		e.preventDefault();
		e.stopPropagation();

		if (e.target.closest('button')) return;

		const rowId = row.dataset.row;
		const content = this.#getContentByRow(rowId);
		if (!content) return;

		const isOpen = content.classList.contains('accent-table__content--active');

		this.contents.forEach((c) => this.hideContent(c));

		if (!isOpen) {
			this.showContent(content);
		}
	}
}
