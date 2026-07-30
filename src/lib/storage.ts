/**
 * Safe Storage wrappers for LocalStorage and SessionStorage to prevent
 * DOMException / SecurityError in iframe environments or when third-party access is denied.
 */

const inMemoryStore: Record<string, string> = {};

export const safeLocalStorage = {
  getItem(key: string): string | null {
    try {
      return typeof window !== 'undefined' && window.localStorage ? window.localStorage.getItem(key) : null;
    } catch (e) {
      return inMemoryStore[`local_${key}`] || null;
    }
  },
  setItem(key: string, value: string): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, value);
      }
    } catch (e) {
      inMemoryStore[`local_${key}`] = value;
    }
  },
  removeItem(key: string): void {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(key);
      }
    } catch (e) {
      delete inMemoryStore[`local_${key}`];
    }
  }
};

export const safeSessionStorage = {
  getItem(key: string): string | null {
    try {
      return typeof window !== 'undefined' && window.sessionStorage ? window.sessionStorage.getItem(key) : null;
    } catch (e) {
      return inMemoryStore[`session_${key}`] || null;
    }
  },
  setItem(key: string, value: string): void {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        window.sessionStorage.setItem(key, value);
      }
    } catch (e) {
      inMemoryStore[`session_${key}`] = value;
    }
  },
  removeItem(key: string): void {
    try {
      if (typeof window !== 'undefined' && window.sessionStorage) {
        window.sessionStorage.removeItem(key);
      }
    } catch (e) {
      delete inMemoryStore[`session_${key}`];
    }
  }
};
