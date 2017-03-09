import Ember from 'ember';
const { get, Controller, inject } = Ember;

export default Controller.extend({
  socket: inject.service(),
  // init() {
  //   this._super(...arguments);
  //   get(this, 'socket');
  // }
});
