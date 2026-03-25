export class Tabs {
	constructor(
		selector,
		options = {
			firstActiveTab: true,
		},
	) {
		this.selector = document.querySelector(selector);
		if (!this.selector) return;

		this.buttons = this.selector.querySelectorAll('.accent-tabs__button');
		this.contents = this.selector.querySelectorAll('.accent-tabs__content');

		if (options.firstActiveTab) {
			const firstBtn = this.buttons[0];
			const firstTab = firstBtn.dataset.tab;

			this.showContent(firstTab);

			this.#removeActiveTab(this.buttons);
			firstBtn.classList.add('accent-tabs__button--active');
		}

		this.#initEvents();
	}

	#removeActiveTab(buttons) {
		buttons.forEach((b) => b.classList.remove('accent-tabs__button--active'));
	}

	#initEvents() {
		this.buttons.forEach((btn) => {
			btn.addEventListener('click', () => {
				const tab = btn.dataset.tab;

				this.showContent(tab);

				this.#removeActiveTab(this.buttons);
				btn.classList.add('accent-tabs__button--active');
			});
		});
	}

	showContent(tab) {
		this.contents.forEach((content) => {
			if (content.dataset.tab === tab) {
				content.classList.add('accent-tabs__content--active');
				this.#animateOpen(content);
			} else {
				this.#animateClose(content);
			}
		});
	}

	#animateOpen(content) {
		content.style.display = 'block';
		content.style.maxHeight = '0px';

		const height = content.scrollHeight;

		requestAnimationFrame(() => {
			content.style.maxHeight = height + 'px';
			content.style.opacity = 1;
		});
	}

	#animateClose(content) {
		content.style.maxHeight = '0px';
		content.style.opacity = 0;

		content.addEventListener(
			'transitionend',
			() => {
				if (content.style.maxHeight === '0px') {
					content.style.display = 'none';
				}
			},
			{ once: true },
		);

		content.classList.remove('accent-tabs__content--active');
	}
}
