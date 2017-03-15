import Ember from 'ember';
const { get, computed, getProperties } = Ember;

export default Ember.Component.extend({
  chipLoad: 0.005,
  cutterDiameter: 0.125,
  numFlutes: 2,
  spindleSpeed: 6000,
  _fromInchToMm(inch) {
    return +(inch * 25.4).toFixed(2);
  },
  feedRate: computed('chipLoad', 'cutterDiameter', 'numFlutes', 'spindleSpeed', function() {
    const {
      chipLoad, cutterDiameter, numFlutes, spindleSpeed
    } = getProperties(this, ['chipLoad', 'cutterDiameter', 'numFlutes', 'spindleSpeed']);

    return +(chipLoad * cutterDiameter * numFlutes * spindleSpeed).toFixed(2);
  }),
  feedRateInMm: computed('feedRate', function() {
    return this._fromInchToMm(get(this, 'feedRate'));
  })
});
