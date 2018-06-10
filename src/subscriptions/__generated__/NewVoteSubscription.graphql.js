/**
 * @flow
 * @relayHash ccb35c48bc91425449036e1e3f17ea59
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type NewVoteSubscriptionVariables = {||};
export type NewVoteSubscriptionResponse = {|
  +Vote: ?{|
    +node: ?{|
      +id: string,
      +user: {|
        +id: string
      |},
      +link: {|
        +id: string,
        +_votesMeta: {|
          +count: number
        |},
      |},
    |}
  |}
|};
*/


/*
subscription NewVoteSubscription {
  Vote {
    node {
      id
      user {
        id
      }
      link {
        id
        _votesMeta {
          count
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "Vote",
    "storageKey": null,
    "args": null,
    "concreteType": "VoteSubscriptionPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "node",
        "storageKey": null,
        "args": null,
        "concreteType": "Vote",
        "plural": false,
        "selections": [
          v0,
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "user",
            "storageKey": null,
            "args": null,
            "concreteType": "User",
            "plural": false,
            "selections": [
              v0
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "link",
            "storageKey": null,
            "args": null,
            "concreteType": "Link",
            "plural": false,
            "selections": [
              v0,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "_votesMeta",
                "storageKey": null,
                "args": null,
                "concreteType": "_QueryMeta",
                "plural": false,
                "selections": [
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "count",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "subscription",
  "name": "NewVoteSubscription",
  "id": null,
  "text": "subscription NewVoteSubscription {\n  Vote {\n    node {\n      id\n      user {\n        id\n      }\n      link {\n        id\n        _votesMeta {\n          count\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "NewVoteSubscription",
    "type": "Subscription",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "NewVoteSubscription",
    "argumentDefinitions": [],
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0623e6f7342efed92a484b1304e93241';
module.exports = node;
