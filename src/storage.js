import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getStorage, ref, uploadBytes, uploadString } from 'firebase/storage';

const storage = getStorage();
// create a reference bc storage is in hierarchical order
const storageRef = ref(storage);
const vidRef = ref(storage, 'videos');

uploadBytes(vidRef, File).then((snapshot) => {
  console.log('Uploaded a blob or file');
});

const bytes = new Uint8Array([
  0x48, 0x65, 0x6c, 0x6f, 0x2c, 0x20, 0x77, 0x6f, 0x77, 0x6f, 0x72, 0x6c, 0x64, 0x21,
]);
uploadBytes(vidRef, bytes).then((snapshot) => {
  console.log('Uploaded an array!');
});

const rawString = 'This is my message';
uploadString(vidRef, raw_string).then((snapshot) => {
  console.log('uploaded a raw string');
});

// upload using a 'put' request
uploadBytes();
uploadString();
