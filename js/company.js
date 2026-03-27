import { CompanyTable } from './classes/CompanyTable.js';

import { CompanyModal } from './classes/CompanyModal.js';
import { ListenerModal } from './classes/ListenerModal.js';

document.addEventListener('DOMContentLoaded', () => {
	new CompanyTable('#company-table');

	new ListenerModal('#listener-modal-id-0');
	new CompanyModal('#company-modal');
});
