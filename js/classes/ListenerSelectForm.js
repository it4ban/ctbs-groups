import { Form } from '../modules/Form.js';

export class ListenerSelectForm extends Form {
	constructor(selector, modalInstance) {
		super(selector);

		this.modal = modalInstance;
	}
}
