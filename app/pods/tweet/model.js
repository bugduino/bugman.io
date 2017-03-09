import DS from 'ember-data';
const { attr, Model } = DS;

// See https://dev.twitter.com/overview/api/tweets
export default Model.extend({
  markerImg: "marker.png",

  coordinates: attr('coordinate'),
  createdAt: attr('string'),
  currentUserRetweet: attr(),
  entities: attr(),
  favoriteCount: attr('number'),
  favorited: attr('boolean'),
  filterLevel: attr('string'),
  idStr: attr('string'),
  inReplyToScreenName: attr('string'),
  inReplyToStatusId: attr('number'),
  inReplyToStatusStr: attr('string'),
  inReplyToUserId: attr('number'),
  inReplyToUserIdStr: attr('string'),
  lang: attr('string'),
  place: attr(),
  possiblySensitive: attr('boolean'),
  quotedStatusId: attr('number'),
  quotedStatusIdStr: attr('string'),
  quotedStatus: attr(), // tweet
  scopes: attr(),
  retweetCount: attr('number'),
  retweeted: attr('boolean'),
  retweetedStatus: attr(), // tweet
  source: attr('string'),
  text: attr('string'),
  truncated: attr('boolean'),
  user: attr(),
  withheldCopyright: attr('boolean'),
  withheldInCountries: attr(), // array of strings
  withheldScope: attr('strings')
});
