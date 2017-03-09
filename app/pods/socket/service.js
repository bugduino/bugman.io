import Ember from 'ember';
import { Socket } from 'phoenix';
import ENV from 'twocket-client/config/environment';

const { set, get, Service, inject } = Ember;

const channelEndPoint = `${ENV.APP.SOCKET_URL}/socket`;
const channelRoom = 'room:twocket';
const channelEvent = 'new_msg';

export default Service.extend({
  store: inject.service(),
  init() {
    this._super(...arguments);
    const socket = new Socket(channelEndPoint, {
      // logger: ((kind, msg, data) => {
      //   console.log(`${kind}: ${msg}`, data);
      // })
    });
    socket.connect();

    const channel = socket.channel(channelRoom, {});

    channel.join()
      .receive("ok", resp => console.log("Joined successfully", resp))
      .receive("error", resp => console.log("Unable to join", resp));

    channel.on(channelEvent, payload =>
      get(this, 'store').pushPayload(payload);
    );

    set(this, 'channel', channel);
  }
});
