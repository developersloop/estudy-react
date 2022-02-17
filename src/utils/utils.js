
export const isEmail = (val) => {
	if (val) {
		var regex = /\S+@\S+\.\S+/
		return regex.test(val);
	}
}

export const required = (val) => val && val.length