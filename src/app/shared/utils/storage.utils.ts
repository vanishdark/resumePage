import {LocalStorageElement, SessionStorageElement} from '../types/storage.type';

const DEFAULT_MAX_AGE_SECONDS = 60;

export default class StorageUtils {

  public static setToLocalMemory(key: string, value: any, age?: number): void {
    age = DEFAULT_MAX_AGE_SECONDS;
    const object: LocalStorageElement = {value, expiry: Date.now() + age * 1000};
    window.localStorage.setItem(key, JSON.stringify(object));
  }

  public static getFromLocalMemory(key: string) {
    const object: LocalStorageElement = JSON.parse(window.localStorage.getItem(key));

    if (object === null || object === undefined) {
      return null;
    }
    if (Date.now() < object.expiry) {
      return object.value;
    } else {
      this.removeFromLocalMemory(key);
      return null;
    }
  }

  public static removeFromLocalMemory(key: string): void {
    window.localStorage.removeItem(key);
  }

  public static clearLocalMemory(): void {
    window.localStorage.clear();
  }

  public static hasLocalMemory(key: string) {
    return window.localStorage.getItem(key) ? window.localStorage.getItem(key).length > 1 : false;
  }

  public static setToSessionMemory(key: string, value: any): void {
    const object: SessionStorageElement = {value};
    window.sessionStorage.setItem(key, JSON.stringify(object));
  }

  public static getFromSessionMemory(key: string): any {
    const object: SessionStorageElement = JSON.parse(window.sessionStorage.getItem(key));

    if (object === null || object === undefined) {
      return null;
    } else {
      return object.value;
    }
  }

  public static removeFromSessionMemory(key: string): void {
    window.sessionStorage.removeItem(key);
  }

  public static clearSessionStorage(): void {
    window.sessionStorage.clear();
  }

  public hasSessionMemory(key: string): boolean {
    return window.sessionStorage.getItem(key) ? window.sessionStorage.getItem(key).length > 1 : false;
  }
}
