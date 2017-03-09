import Ember from 'ember';
import { Socket } from 'phoenix';
import ENV from 'twocket-client/config/environment';

const { set, get, A, Service } = Ember;

const channelEndPoint = `${ENV.APP.SOCKET_URL}/socket`;
const channelRoom = 'room:twocket';
const channelEvent = 'new_msg';

export default Service.extend({
  messages: null,
  init() {
    this._super(...arguments);
    const messages = A(get(this, 'messages'));
    const socket = new Socket(channelEndPoint, {
      logger: ((kind, msg, data) => {
        console.log(`${kind}: ${msg}`, data);
      })
    });
    socket.connect();

    const channel = socket.channel(channelRoom, {});

    channel.join()
      .receive("ok", resp => console.log("Joined successfully", resp))
      .receive("error", resp => console.log("Unable to join", resp));

    channel.on(channelEvent, payload => {
      messages.pushObject(payload);
      set(this, 'messages', messages);
    });

    set(this, 'channel', channel);
  }
});
