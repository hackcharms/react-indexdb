// import { useEffect } from "react";
// const INDEX_NAME = "todo_id_store";
// export function useDatabase<T>(dbName = "", storeName = "", version?: number) {
//   useEffect(() => {
//     getOrCreateStore();
//   }, []);
//   async function getOrCreateStore() {
//     let db: IDBDatabase;
//     let store: IDBObjectStore;
//     let tranasction: IDBTransaction;
//     const request = indexedDB.open(dbName, version);
//     request.onerror = (event: Event) => {
//       console.log("Why didn't you allow my web app to use IndexedDB?!", event);
//       Promise.reject(event);
//       // throw Error("Why didn't you allow my web app to use IndexedDB?!" + event);
//     };
//     request.onsuccess = (event: Event) => {
//       db = event?.target?.result as IDBDatabase;
//       Promise.resolve(db);
//       console.log("request.onsuccess", event.target);
//     };
//     request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
//       console.log("onupgradeneeded", event);
//       if (!db) return console.log("db is undefined", db);
//       if (!(tranasction = db.transaction(storeName, "readonly"))) {
//         console.log('creating "todo" store');
//         store = db.createObjectStore("todo", { keyPath: "id" });
//         store.createIndex(INDEX_NAME, "id", {
//           unique: true,
//         });
//       } else {
//         console.log("store already exist");
//         store = tranasction.objectStore(storeName);
//       }

//       store.transaction.oncomplete = (event) => {
//         console.log("All done!");
//       };

//       store.transaction.onerror = (event) => {
//         // Don't forget to handle errors!
//         // return Promise.reject(event);
//         console.log("store.transaction.onerror ", event);
//       };
//     };
//   }
//   async function addRecord(record: T) {
//     try {
//       const store = await getOrCreateStore();
//       if (!store) console.log("store is undefined ", store);
//       const state = store.put(record);
//       console.log("state", state);
//       state.onsuccess = () => {
//         window.alert("record stored successfully");
//       };
//       state.onerror = () => {
//         window.alert("record stored faield");
//       };
//     } catch (error) {
//       console.log("something went wrong", error);
//     }
//   }
//   async function getRecord(recordKey: string) {
//     const store = await getOrCreateStore();
//     if (!store) console.log("store is undefined ", store);
//     const state = store.get(recordKey);
//     console.log("state", state);
//     state.onsuccess = () => {
//       window.alert("record fetched successfully");
//     };
//     state.onerror = () => {
//       window.alert("record stored faield");
//     };
//     return state;
//   }
//   return {
//     addRecord,
//     getRecord,
//   };
// }
