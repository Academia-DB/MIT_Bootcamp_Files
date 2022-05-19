(function(){

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
	const firebaseConfig = {
		apiKey: "AIzaSyAeMWnNjc5lRJT28P_mZVTEpNUDfsmwCyQ",
		authDomain: "course-26.firebaseapp.com",
		databaseURL: "https://course-26-default-rtdb.firebaseio.com",
		projectId: "course-26",
		storageBucket: "course-26.appspot.com",
		messagingSenderId: "1049735074076",
		appId: "1:1049735074076:web:73ec22370a130bd0306ad9",
		measurementId: "G-506D8H2T1R"
	  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

	// get elements
	const email    = document.getElementById('email');
	const password = document.getElementById('password');
	const login    = document.getElementById('login');
	const signup   = document.getElementById('signup');
	const logout   = document.getElementById('logout');

	// login
	login.addEventListener('click', e => {
		const auth  = firebase.auth();		
		const promise = auth.signInWithEmailAndPassword(email.value, password.value);
		promise.catch(e => console.log(e.message));
	});

	// signup
	signup.addEventListener('click', e => {
		// TODO: check for real email
		const auth  = firebase.auth();
		const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
		promise.catch(e => console.log(e.message));
	});

    // logout
	logout.addEventListener('click', e => {
		firebase.auth().signOut();
	});

    // login state
	firebase.auth().onAuthStateChanged(firebaseUser => {
		if(firebaseUser){
			console.log(firebaseUser);
			logout.style.display = 'inline';
			login.style.display  = 'none';
			signup.style.display = 'none';
		}
		else{
			console.log('User is not logged in');
			logout.style.display = 'none';			
			login.style.display  = 'inline';
			signup.style.display = 'inline';
		}
	});

}());