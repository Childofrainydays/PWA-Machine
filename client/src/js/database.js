import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Logic to a method that accepts some content and adds it to the database
// I am stating, for the record, that I hate this. I hate it so much.  I hate it with the fire of a thousand suns.
export const putDb = async (content) => {
  console.log('putDb not implemented');

  // Create a connection to the database
  const jateDb = await openDB('jate', 1);

  // Open a transaction on the jate object store
  const tx = jateDb.transaction('jate', 'readwrite');

  // Open the object store
  const store = tx.objectStore('jate');

  // Utilize the add method to add the content to the object store
  const request = store.put({ jate: content });

  // Confirm the content was added
  const result = await request;
  // make sure the content was added with a console log
  console.log(result);
}

// Logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('getDb not implemented');

  // Create a connection to the database
  const jateDb = await openDB('jate', 1);

  // Create a transaction on the jate object store
  const tx = jateDb.transaction('jate', 'readonly');

  // Open the object store
  const store = tx.objectStore('jate');

  // Utilize the getAll method to get all the content from the object store
  const request = await store.getAll();

  // Confirm the content was retrieved
  const result = await request;
  console.log(result);
}

// initialize the database
initdb();
