import { CompanyTable } from './classes/CompanyTable.js';

import { ListenerModal } from './classes/ListenerModal.js';

document.addEventListener('DOMContentLoaded', () => {
	new CompanyTable('#company-table');

	new ListenerModal('#listener-modal');
});
