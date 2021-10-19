/**
 * Format a date with Luxon
 *
 * @param {String} date - string Date
 * @param {String} locale - locale
 * @returns {String} formatted date
 */

const { DateTime } = require("luxon");

module.exports = function (date) {
  date = new Date(date);
  return DateTime.fromJSDate(date).toISO();
};
