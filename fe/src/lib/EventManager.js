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
}

const toastEventManager = new EventManager();

toastEventManager.on("addtoast", (playload) => {
  console.log("addtoast listener1", playload);
});

toastEventManager.on("addtoast", (playload) => {
  console.log("addtoast listener2", playload);
});

toastEventManager.emit("addtoast", { type: "danger", text: "Texto" });

console.log(toastEventManager);
