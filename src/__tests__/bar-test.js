import bar from '../bar';

describe('bar()', () => {
    beforeEach(() => {
        bar.__Rewire__('foo', () => { return 10 });
    });

    afterEach(() => {
        bar.__ResetDependency__('foo');
    });

    it('should return 15', () => {
        expect(bar()).to.equal(15);
    });
});
