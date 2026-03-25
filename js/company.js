import { Table } from './modules/Table.js';

import { ListenerModal } from './classes/ListenerModal.js';

document.addEventListener('DOMContentLoaded', () => {
	new Table('#company-table');

	new ListenerModal('#listener-modal');
});
