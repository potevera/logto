import { deduplicate } from '@silverhand/essentials';

import RequestError from '../../errors/RequestError/index.js';

import { parseEmailBlocklistPolicy } from './email-blocklist-policy.js';

const invalidCustomBlockList = ['bar', 'bar@foo', '@foo', '@foo.', 'bar@foo.'];
const validCustomBlockList = ['bar@foo.com', '@foo.com', 'abc.bar@foo.xyz', 'bar@foo.com'];

describe('validateEmailBlocklistPolicy', () => {
  it.each(invalidCustomBlockList)(
    'should throw error for invalid custom block list item: %s',
    (item) => {
      const emailBlocklistPolicy = { customBlocklist: [item] };
      expect(() => {
        parseEmailBlocklistPolicy(emailBlocklistPolicy);
      }).toMatchError(
        new RequestError({
          code: 'sign_in_experiences.invalid_custom_email_blocklist_format',
          items: Array.from([item]),
          status: 400,
        })
      );
    }
  );

  it('should pass the validation with valid format and deduplicate items', () => {
    const parsed = parseEmailBlocklistPolicy({ customBlocklist: validCustomBlockList });
    expect(parsed).toEqual({ customBlocklist: deduplicate(validCustomBlockList) });
  });
});
