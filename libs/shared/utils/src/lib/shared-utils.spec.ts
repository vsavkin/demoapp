import { formatTitle } from './shared-utils';

describe('sharedUtils', () => {
  it('should work', () => {
    expect(formatTitle('title')).toEqual('TITLE');
  });
});
