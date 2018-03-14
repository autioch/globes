export default function subscription(store) {
  let notifyTimeout;
  const listeners = [];

  /* TODO getState should be called only once in notify loop.
   * This way even if a listener changes state during notify, all components
   * still recieve current state and in the next notify loop all components will recieve the next state.
   */
  function notifyListener(listener) {
    listener(store.getState(), store);
  }

  function notifyListeners() {
    notifyTimeout = null;
    listeners.forEach(notifyListener);
  }

  function notify() {
    if (notifyTimeout) {
      return;
    }
    notifyTimeout = setTimeout(notifyListeners, 1);
  }

  function subscribe(listener) {
    listeners.push(listener);

    return store;
  }

  return {
    subscribe,
    notify
  };
}
