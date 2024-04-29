// export function getOrCreateStore(databaseName = '', storeName = '',uniqueId='id',version=1) {
//     let db:IDBDatabase;
//     const openOrCreateDB = window.indexedDB.open(databaseName, version);
//     console.log(databaseName, storeName);

//     openOrCreateDB.addEventListener('error', () => console.error('Error opening DB'));

//     openOrCreateDB.addEventListener('success', () => {
//         console.log('Successfully opened DB');
//         db = openOrCreateDB.result;
//         window.db=db;
//     });

//     openOrCreateDB.addEventListener('upgradeneeded', (event: Event) => {
//         db = event?.target?.result;
//         window.db = db;
//         db.onerror = () => {
//             console.error('Error loading database.');
//         };

//         const table = db.createObjectStore(storeName, { keyPath: uniqueId, autoIncrement: true });

//         table.createIndex(`${storeName}_index_${uniqueId}`, uniqueId, { unique: true });
//     });
//     return { get database() { return db } };
// }
