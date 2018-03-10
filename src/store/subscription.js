export default function subscription(store) {
  let notifyTimeout;
  const listeners = [];

  function notifyListener(listener) {
    listener(store);
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
