import Ember from 'ember';
const { get, Controller, inject } = Ember;

const NULL_ISLAND = {lat: 0, lng: 0};
const CARTO_MAP = {
  url: 'http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png',
  urlLight: 'http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png',
  attribution: `© <a href="http://carto.com/attribution" target="_blank" title="http://carto.com/attribution">CARTO</a>,
    © <a href="http://www.openstreetmap.org/copyright" target="_blank" title="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`
};

export default Controller.extend({
  socket: inject.service(),
  init() {
    this._super(...arguments);
    get(this, 'socket');
  },
  map: CARTO_MAP,
  heatOptions: {
    latField: 'coordinates.location.lat',
    lngField: 'coordinates.location.lng',
    // scaleRadius: true,
    // maxOpacity: 0.8,
    radius: 2,
    minOpacity: 0.33
  },
  lat: NULL_ISLAND.lat,
  lng: NULL_ISLAND.lng,
  zoom: 3,
  maxZoom: 10,
  actions: {
    layerControlEvent() {}
  }
});
