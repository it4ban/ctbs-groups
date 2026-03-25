import { GroupForm } from './classes/GroupForm.js';

import {
	groupFormValidators,
	groupModalValidators,
	modalSettings,
	selectOptions,
	timeMasksOptions,
} from './configs/group';

document.addEventListener('DOMContentLoaded', () => {
	const groupForm = new GroupForm(
		'#group-create',
		groupFormValidators,
		groupModalValidators,
		modalSettings,
		selectOptions,
		timeMasksOptions,
	);
});
