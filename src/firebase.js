import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {		
	apiKey: "AIzaSyAVQDhsCSGmVPzp3KEOev8t6FxW-s6jKEY",
		authDomain: "musicapp-19594.firebaseapp.com",
		projectId: "musicapp-19594",
		storageBucket: "musicapp-19594.appspot.com",
		messagingSenderId: "191968055321",
		appId: "1:191968055321:web:7ae342900aec27ef315a88"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app, process.env.REACT_APP_BUCKET_URL);
export default storage;
