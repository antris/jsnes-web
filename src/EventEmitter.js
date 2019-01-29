const EventEmitter = function() {
  var listeners = {};

  return {
    emit: function(type, data) {
      (listeners[type] || []).forEach(f => f(data));
    },
    on: function(type, f) {
      listeners[type] = (listeners[type] || []).concat([f]);
    }
  };
};

export default EventEmitter;
