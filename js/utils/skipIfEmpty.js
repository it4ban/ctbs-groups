export const skipIfEmpty = (validatorFn) => (value, options, key, attributes) => {
	if (value === null || value === undefined || value.trim() === '') return;
	return validatorFn(value, options, key, attributes);
};
