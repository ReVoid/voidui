import metadata from 'libphonenumber-js/metadata.full';
import {
  parsePhoneNumberWithError,
  getCountryCallingCode,
} from 'libphonenumber-js/max';

import {
  defineFormat,
  unbreakable,
} from '@/format';

type Value = string;

// TODO: Add tests
/**
 * Format a phone number to its region common format.
 *
 * @example
 * // US:
 * phone('+12154567890'); // +1 (215) 456-7890
 *
 * // RU:
 * phone('+79168887766'); // +7 (916) 888-77-66
 */
export const phone = defineFormat((value: Value) => {
  const phone = parsePhoneNumberWithError(value);

  if (!phone.country) {
    return value;
  }

  const national = phone.formatNational();

  const countryMetadata = metadata.countries[phone.country]!;

  const prefix = countryMetadata.at(5); // Watch ouf of the unavoidable any! :(

  const withoutPrefix = prefix && national.startsWith(`${prefix}`)
    ? national.slice(prefix.length).trimStart()
    : national;

  return unbreakable([
    `+${getCountryCallingCode(phone.country)}`,
    withoutPrefix,
  ]);
});
