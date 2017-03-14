import Ember from 'ember';
const { Controller, computed } = Ember;

export default Controller.extend({
  tweets: computed.reads('model.tweetsTaskInstance.value'),
  isLoading: computed.reads('model.tweetsTaskInstance.isRunning'),
  errors: computed.reads('model.tweetsTaskInstance.error')
});
