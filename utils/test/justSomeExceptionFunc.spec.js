import { expect } from 'chai';
import { justSomeExceptionFunc } from '../src/collectionRequestBodyBuilder.js';

describe('justSomeExceptionFunc', () => {
    it('first option', () => {
        const message = 'using wrapper function';

        const firstOption = () => {
            justSomeExceptionFunc(message);
        };

        expect(firstOption).to.throw(message);
    });

    it('second option', () => {
        const message = 'using bind';

        const secondOption = justSomeExceptionFunc.bind(null, message);

        expect(secondOption).to.throw(message);
    });
});
