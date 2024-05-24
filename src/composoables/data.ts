import timezoneRaw from "timezones.json";

export const timezones = timezoneRaw.flatMap((zone) => {
	return zone.utc.map((utc) => {
		return {
			name: utc,
			offset: zone.offset,
			isdst: zone.isdst,
		};
	});
});
