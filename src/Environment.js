import { GC_AUTH_TOKEN } from './constants'
import { SubscriptionClient } from 'subscriptions-transport-ws'

const {
  Environment,
  Network,
  RecordSource,
  Store
} = require('relay-runtime')

const store = new Store(new RecordSource())

export const fetchQuery = (operation, variables) => {
  /* global fetch */
  return fetch('https://api.graph.cool/relay/v1/cji6t0pbr6ghr0167hsvn5xt4', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      /* global localStorage */
      'Authorization': `Bearer ${localStorage.getItem(GC_AUTH_TOKEN)}`
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json()
  })
}

const setupSubscription = (config, variables, cacheConfig, observer) => {
  const query = config.text

  const subscriptionClient = new SubscriptionClient('wss://subscriptions.graph.cool/v1/cji6t0pbr6ghr0167hsvn5xt4', {reconnect: true})
  subscriptionClient.subscribe({query, variables}, (error, result) => {
    if (error) {
      console.log(error)
      return
    }
    observer.onNext({data: result})
  })
}

const network = Network.create(fetchQuery, setupSubscription)

const environment = new Environment({
  network,
  store
})

export default environment
