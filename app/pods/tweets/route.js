import Ember from 'ember';
import { task } from 'ember-concurrency';

const { get, Route } = Ember;

export default Route.extend({
  model() {
    return {
      tweetsTaskInstance: get(this, '_loadTweets').perform()
    };
  },

  _loadTweets: task(function*() {
    return yield get(this, 'store').peekAll('tweet');
  }).drop()
});
