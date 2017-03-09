import Ember from 'ember';
const { get, Controller, inject } = Ember;
const MAP = {
  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  attribution: `Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors,
    <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>`
};

export default Controller.extend({
  socket: inject.service(),
  init() {
    this._super(...arguments);
    get(this, 'socket');
  },
  map: MAP,
  heatOptions: {
    latField: 'coordinates.location.lat',
    lngField: 'coordinates.location.lng',
    scaleRadius: true,
    radius: 0.3,
    // maxOpacity: 0.8,
    // useLocalExtrema: true
  },
  // geoJSON
  // bounds: computed('geoJSON', function() {
  //   const boundaries = A(get(this, 'geoJSON.features.firstObject.geometry.coordinates.firstObject'));
  //   return L.latLngBounds(boundaries);
  // }),
  lat: 0,
  lng: 0,
  zoom: 3,
  maxZoom: 18
});
