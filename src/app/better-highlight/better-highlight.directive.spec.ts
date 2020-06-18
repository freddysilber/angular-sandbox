import { BetterHighlightDirective } from './better-highlight.directive';

describe('BetterHighlightDirective', () => {
  it('should change the background color onHover', () => {
    const directive = new BetterHighlightDirective();
    expect(directive).toBeTruthy();
  });
});
