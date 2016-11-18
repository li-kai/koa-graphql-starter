// flow

import test from 'ava';
import { graphql } from 'graphql';
import schema from '../app/graphql';

test('should return count', async (t) => {
  const query: String = '{ count }';

  const expected: Object = {
    data: {
      count: 1,
    },
  };
  const result: GraphQlResult = await graphql(schema, query);

  t.deepEqual(expected, result);
});
