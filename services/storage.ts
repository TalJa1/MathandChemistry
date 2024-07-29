/* eslint-disable prettier/prettier */
import Storage from 'react-native-storage';
import AsyncStorage from '@react-native-community/async-storage';

export const storage = new Storage({
  // maximum capacity, default 1000
  size: 1000,

  // Use AsyncStorage for RN apps, or window.localStorage for web apps.
  // If storageBackend is not set, data will be lost after reload.
  storageBackend: AsyncStorage, // for web: window.localStorage

  // expire time, default: 1 day (1000 * 3600 * 24 milliseconds).
  // can be null, which means never expire.
  defaultExpires: null,

  // cache data in the memory. default is true.
  enableCache: true,

  // if data was not found in storage or expired data was found,
  // the corresponding sync method will be invoked returning
  // the latest data.
  sync: {
    // we'll talk about the details later.
  },
});

// Create data
export const saveData = <T>(key: string, data: T): void => {
  storage.save({
    key: key, // Note: Do not use underscore("_") in key!
    data: data,
    // if expires not specified, it will never expire by default
    expires: null,
  });
};

// Load data
export const loadData = <T>(key: string): Promise<T> => {
  return storage
    .load({
      key: key,
      // autoSync (default: true) means if data is not found or has expired,
      // the corresponding sync method will be invoked returning
      // the latest data.
      autoSync: true,
      // syncInBackground (default: true) means if data expired,
      // return the outdated data first while invoking the sync method.
      syncInBackground: true,
    })
    .then((data: T) => {
      return data;
    })
    .catch(err => {
      console.warn(err.message);
      switch (err.name) {
        case 'NotFoundError':
          // Handle the error
          break;
        case 'ExpiredError':
          // Handle the error
          break;
      }
      throw err;
    });
};

// Get all keys
export const getAllKeys = (): Promise<string[]> => {
  return storage
    .getAllDataForKey('keys')
    .then((keys: string[]) => {
      return keys;
    })
    .catch(err => {
      console.warn(err.message);
      throw err;
    });
};

export const updateData = <T>(
  key: string,
  data: T,
  expires: number | null = null,
): Promise<void> => {
  return new Promise((resolve, reject) => {
    storage
      .save({
        key: key,
        data: data,
        expires: expires,
      })
      .then(() => {
        resolve();
      })
      .catch((error: Error) => {
        reject(error);
      });
  });
};

// Delete data
export const removeData = (key: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    storage
      .remove({
        key: key,
      })
      .then(() => {
        resolve();
      })
      .catch((error: Error) => {
        reject(error);
      });
  });
};

// Clear all data
export const clearAllData = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    storage
      .clearMap()
      .then(() => {
        resolve();
      })
      .catch((error: Error) => {
        reject(error);
      });
  });
};
