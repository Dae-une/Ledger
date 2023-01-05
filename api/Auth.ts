import { firebase } from './firebase';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut as googleSignOut } from 'firebase/auth';

const provider = new GoogleAuthProvider();
const auth = getAuth(firebase);

export const logIn = async () => {
  return signInWithPopup(auth, provider)
    .then((result) => {
      return result.user;
    })
    .catch((error) => {
      console.error(error);
    });
};

export const signOut = async () => {
  googleSignOut(auth)
    .then(() => {
      console.log('SignOut Success!');
    })
    .catch((error) => {
      console.error(error);
    });
};
