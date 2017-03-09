import DS from 'ember-data';
import Ember from 'ember';

const { Transform } = DS;
const { get } = Ember;

export default Transform.extend({
  deserialize(coord) {
    if (!coord) {
      return {};
    }

    if (get(coord, 'type') === 'Point') {
      const [lng, lat] = get(coord, 'coordinates');
      return {location: {lat, lng}};
    }

    // if (coord && get(coord.type === 'geoJSON')) { ??
  },

  serialize(locationOrEmptyString) {
    return locationOrEmptyString;
  }
});
