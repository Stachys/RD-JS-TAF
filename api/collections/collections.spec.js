import moment from 'moment';
import { expect } from 'chai';
import { createCollection } from './collections.api.js';
import collectionData from './data/collectionData.json' with { type: 'json' };
import { createBodyWithDates } from '../../utils/src/collectionRequestBodyBuilder.js';

describe('Collections', async () => {
    it('user can create a collection with post request containing multiple dates', async () => {
        const datesNumber = 25;
        const inputData = structuredClone(collectionData);
        inputData.collection.item[0].request.body.raw = createBodyWithDates(moment(), datesNumber);

        const { collection } = await createCollection(inputData);

        expect(collection).to.have.property('id');
    });
});