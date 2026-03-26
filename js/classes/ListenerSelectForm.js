import { Form } from '../modules/Form.js';

export class ListenerSelectForm extends Form {
	#tableInstance = null;

	constructor(selector, modalInstance) {
		super(selector);
		this.modal = modalInstance;
		this.#tableInstance = null;

		if (!this.#tableInstance) {
			this.#tableInstance = new DataTable('#listener-table_add .accent-table__table', {
				paging: true,
				retrieve: true,
				pageLength: 5,
				searching: true,
				stateSave: false,
				lengthChange: false,
				info: false,
				pagingType: 'numbers',
				language: {
					search: '',
					searchPlaceholder: 'Поиск...',
					zeroRecords: 'Ничего не найдено',
				},
			});
		}
	}
}
