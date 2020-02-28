const axios = require('axios');

// https://timezonedb.com/references/get-time-zone
// key:	      REQUIRED Your unique API key you get after register your account.
// format: 	  OPTIONAL The response format from API. It can be either xml or json. (default is xml)
// callback:	OPTIONAL Use for JavaScript JSON callback.
// fields:	  OPTIONAL Customize the field to display in response. Use commas ('," without spaces) to separate the field names. (FIELDS: countryCode, countryName, regionName, cityName, zoneName, abbreviation, gmtOffset, dst, zoneStart, zoneEnd, nextAbbreviation, timestamp, formatted)
// by:	      REQUIRED The method of lookup. (position)
// lat:	      REQUIRED Latitude of a city. Required if lookup by position method.
// lng:       REQUIRED Longitude of a city. Required if lookup by position method.
// example:      http://api.timezonedb.com/v2.1/get-time-zone?key=6ZUYZX4YQNR6&format=json&by=position&lat=10.000000&lng=-10.000000
export function getTimezone(lat, long) {
  return axios.get('https://api.timezonedb.com/v2.1/get-time-zone' +
                         '?key=6ZUYZX4YQNR6&format=json&by=position' +
                         '&lat=' + lat.toFixed(6) +
                         '&lng=' + long.toFixed(6));
}
