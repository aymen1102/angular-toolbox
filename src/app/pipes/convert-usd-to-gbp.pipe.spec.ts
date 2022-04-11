import { ConvertUsdToGbpPipe } from './convert-usd-to-gbp.pipe';

describe('ConvertUsdToGbpPipe', () => {
  it('create an instance', () => {
    const pipe = new ConvertUsdToGbpPipe();
    expect(pipe).toBeTruthy();
  });
});
