const formatTimestamp = (timestamp) => {
	const date = new Date(timestamp);
	return date.toLocaleString();
};

export default formatTimestamp;
