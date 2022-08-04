/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 * @emails oncall+relay
 */

'use strict';

/**
 * @RelayResolver
 * @fieldName live_resolver_with_bad_return_value
 * @onType Query
 * @live
 *
 * A @live resolver that does not return a LiveObject
 */
import type {LiveState} from '../../experimental-live-resolvers/LiveResolverStore';

function liveResolverWithBadReturnValue(): LiveState<string> {
  // $FlowFixMe The purpose of this resolver is to test a bad return value.
  return 'Oops!';
}

module.exports = liveResolverWithBadReturnValue;
