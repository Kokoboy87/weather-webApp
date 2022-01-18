const request = require('request');

const forecast = (latitude, longitude, callback) => {
	const url = `http://api.weatherstack.com/current?access_key=ff8269c5b0bd46ba6e40cce113c0e3e8&query=${latitude}, ${longitude}`;

	request({ url, json: true }, (error, { body }) => {
		if (error) {
			callback('Unable to connect to weather service!');
		} else if (body.error) {
			callback('Inaccurate location!');
		} else {
			const current = body.current;
			callback(undefined, `Weather condition '${current.weather_descriptions}'. It is currently '${current.temperature}' celsius out, It feels like '${current.feelslike}' celsius. And the humidity is at ${current.humidity}%.`);
		}
	});
};

module.exports = forecast;
