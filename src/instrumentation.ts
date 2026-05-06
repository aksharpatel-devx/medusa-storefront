export async function register() {
  if (process.env.NEXT_RUNTIME === "nodejs") {
    if (
      typeof localStorage !== "undefined" &&
      typeof localStorage.getItem !== "function"
    ) {
      const noopStorage: Storage = {
        getItem: () => null,
        setItem: () => {},
        removeItem: () => {},
        clear: () => {},
        key: () => null,
        length: 0,
      }
      Object.defineProperty(globalThis, "localStorage", {
        value: noopStorage,
        writable: true,
        configurable: true,
      })
      Object.defineProperty(globalThis, "sessionStorage", {
        value: noopStorage,
        writable: true,
        configurable: true,
      })
    }
  }
}
