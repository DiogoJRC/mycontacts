export default class EventManager {
  constructor() {
    this.listeners = {};
  }

  on(event, listener) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }

    this.listeners[event].push(listener);
  }

  emit(event, playload) {
    if (!this.listeners[event]) {
      return;
    }

    this.listeners[event].forEach((listener) => {
      listener(playload);
    });
  }

  removeListener(event, listenerToRemove) {
    const listeners = this.listeners[event];

    if (!listeners) {
      return;
    }

    const filteredListeners = listeners.filter(
      (listener) => listener !== listenerToRemove,
    );

    this.listeners[event] = filteredListeners;
  }
}

const toastEventManager = new EventManager();

function addToast1(playload) {
  console.log("addtoast listener1", playload);
}

function addToast2(playload) {
  console.log("addtoast listener2", playload);
}

toastEventManager.on("addtoast", addToast1);
toastEventManager.on("addtoast", addToast2);

toastEventManager.emit("addtoast", { type: "danger", text: "Texto" });

toastEventManager.removeListener("addtoast", addToast1);

toastEventManager.emit("addtoast", "depois de remover...");

console.log(toastEventManager);
