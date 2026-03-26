import { Table } from '../modules/Table.js';

export class CompanyTable extends Table {
	constructor(selector) {
		super(selector);

		this.#initEvents();
	}

	#initEvents() {
		this.rows.forEach((row) => {
			row.addEventListener('click', (e) => this.handleRowClick(e, row));
		});
	}
}
