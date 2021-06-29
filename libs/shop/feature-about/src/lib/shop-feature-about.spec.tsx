import { render } from '@testing-library/react';

import ShopFeatureAbout from './shop-feature-about';

describe('ShopFeatureAbout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShopFeatureAbout />);
    expect(baseElement).toBeTruthy();
  });
});
