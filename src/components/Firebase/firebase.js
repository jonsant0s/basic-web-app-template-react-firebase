import app form 'firebase/app';

const config = {
  apiKey: "AIzaSyDVWMu9TRcjtW_dtjdq-TvnRicfNDqNCw4",
  authDomain: "ujoss-59de3.firebaseapp.com",
  databaseURL: "https://ujoss-59de3.firebaseio.com",
  projectId: "ujoss-59de3",
  storageBucket: "ujoss-59de3.appspot.com",
  messagingSenderId: "461638397937",
  appId: "1:461638397937:web:3854175c48ed8d00acde50",
  measurementId: "G-VPSGMSQGJK"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase;
