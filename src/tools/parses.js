/**
 * Returns the number value formatted for thousands
 * i.e. from 2000 to 2,000
 *
 * @param {number | string } numberValue - value number to be parsed
 * @returns {string} - parsed value
 */
export function convertToPresentationalNumber(numberValue) {
  return `${numberValue}`.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
}

/**
 * Returns the items with the properties formatted for
 * values of thousands. i.e. from 1000 to 1,000.
 *
 * @param {string[]} properties - list of properties to be parse
 * @returns {function(Object[]): Object[]} - list with the parsed values
 */
export function parseToNumbers(properties) {
  properties = [].concat(properties);
  return function parse(items) {
    return items.map(item => {
      properties.forEach(property => {
        if (item[property]) {
          item[property] = convertToPresentationalNumber(item[property]);
        }
      });
      return item;
    })
  }
}
