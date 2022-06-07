/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<d286177c6d4258ee61f63f5a9f70ec85>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
type UserGreetingResolver$key = any;
import type { FragmentType } from "relay-runtime";
import userGreetingResolver from "../UserGreetingResolver.js";
// Type assertion validating that `userGreetingResolver` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(userGreetingResolver: (
  rootKey: UserGreetingResolver$key, 
) => mixed);
declare export opaque type UserShoutedGreetingResolver$fragmentType: FragmentType;
export type UserShoutedGreetingResolver$data = {|
  +greeting: ?$Call<<R>((...empty[]) => R) => R, typeof userGreetingResolver>,
  +$fragmentType: UserShoutedGreetingResolver$fragmentType,
|};
export type UserShoutedGreetingResolver$key = {
  +$data?: UserShoutedGreetingResolver$data,
  +$fragmentSpreads: UserShoutedGreetingResolver$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserShoutedGreetingResolver",
  "selections": [
    {
      "alias": null,
      "args": null,
      "fragment": {
        "args": null,
        "kind": "FragmentSpread",
        "name": "UserGreetingResolver"
      },
      "kind": "RelayResolver",
      "name": "greeting",
      "resolverModule": require('./../UserGreetingResolver.js'),
      "path": "greeting"
    }
  ],
  "type": "User",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "02f95e5e254d019e8c7dfcaaba1c97a0";
}

module.exports = ((node/*: any*/)/*: Fragment<
  UserShoutedGreetingResolver$fragmentType,
  UserShoutedGreetingResolver$data,
>*/);