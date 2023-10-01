/**
 * Clones the given data.
 */
export function clone<T>(data: T, defaultValue?: T): T {
	if (typeof data === 'undefined') {
		return defaultValue!;
	}

	return JSON.parse(JSON.stringify(data));
}
