export default class EventManager {
  constructor() {
    this.listeners = new Map();
  }

  on(event, listener) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    this.listeners.get(event).push(listener);
  }

  emit(event, playload) {
    if (!this.listeners.has(event)) {
      return;
    }

    this.listeners.get(event).forEach((listener) => {
      listener(playload);
    });
  }

  removeListener(event, listenerToRemove) {
    const listeners = this.listeners.get(event);

    if (!listeners) {
      return;
    }

    const filteredListeners = listeners.filter(
      (listener) => listener !== listenerToRemove,
    );

    this.listeners.set(event, filteredListeners);
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
