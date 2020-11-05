//Η σελίδα εισόδου και εγγραφής
//Η start καλεί όλες τις παρακάτω συναστήσεις
function start() {
  containers();
  loginForm();
  signupForm();
  buttons();
  closeDivs();
}

//Δημιουργεί τα δύο βασικά divs, αυτό με τις πληροφορίες και αυτό με τα κουμπιά και μια παράγραφο με κείμενο
function containers() {
  var infodiv = document.createElement('div');
  var buttondiv = document.createElement('div');
  var info = document.createElement('p');
  infodiv.setAttribute('id', 'infodiv');
  info.setAttribute('id', 'info');
  info.innerHTML = 'Μια εφαρμογή για τον υπολογισμό φόρου κατοικίας και τελών κυκλοφορίας.'
  buttondiv.setAttribute('id', 'buttondiv');
  document.body.appendChild(infodiv);
  document.getElementById('infodiv').appendChild(info);
  document.body.appendChild(buttondiv);
}

//Η φόρμα εισόδου
function loginForm() {
    
  //Δημιουργία στοιχείων
  var divlogin = document.createElement('div');
  var contlogin = document.createElement('div');
  var plogin = document.createElement('p');
  var formlogin = document.createElement('form');
  var username = document.createElement('input');
  var password = document.createElement('input');
  var submitlogin = document.createElement('input');
  
  //Θεσπιση παραμέτρων id, type, title, κ.α.
  divlogin.setAttribute('id', 'divlogin');
  contlogin.setAttribute('id', 'contlogin');
  plogin.innerHTML = 'Είσοδος';
  formlogin.setAttribute('id', 'formlogin');
  
  //Στην υποβολή λειττουργεί με JS και καλεί την συνάρτηση ελέγχου και αυτη της αποστολής δεδομένων
  formlogin.setAttribute('action', 'javascript:;');
  formlogin.setAttribute('onsubmit', 'return loginFormValidation() && loginData()');
  username.setAttribute('type', 'text');
  username.setAttribute('id', 'username');
  username.setAttribute('placeholder', 'Όνομα Χρήστη');
  username.setAttribute('title', 'Εισάγετε το όνομα χρήστη.');
  password.setAttribute('type', 'password');
  password.setAttribute('id', 'password');
  password.setAttribute('placeholder', 'Κωδικός');
  password.setAttribute('title', 'Εισάγετε τον μυστικό κωδικό σας.');
  submitlogin.setAttribute('type', 'submit');
  submitlogin.setAttribute('value', 'Υποβολή');
  submitlogin.setAttribute('id', 'submitlogin');
  
  //Προσθήκη στο HTML
  document.body.appendChild(divlogin);
  document.getElementById('divlogin').appendChild(contlogin);
  document.getElementById('contlogin').appendChild(plogin);
  document.getElementById('contlogin').appendChild(formlogin);
  document.getElementById('formlogin').appendChild(username);
  document.getElementById('formlogin').appendChild(password);
  document.getElementById('formlogin').appendChild(submitlogin);
}

//Παρόμοια με την αποπάνω
function signupForm() {
  var divsignup = document.createElement('div');
  var contsignup = document.createElement('div');
  var psignup = document.createElement('p');
  var formsignup = document.createElement('form');
  var usernameSU = document.createElement('input');
  var passwordSU = document.createElement('input');
  var submitsignup = document.createElement('input');
  divsignup.setAttribute('id', 'divsignup');
  contsignup.setAttribute('id', 'contsignup');
  psignup.innerHTML = 'Εγγραφή';
  formsignup.setAttribute('id', 'formsignup');
  formsignup.setAttribute('action', 'javascript:;');
  formsignup.setAttribute('onsubmit', 'return signupFormValidation() && signupData()');
  usernameSU.setAttribute('type', 'text');
  usernameSU.setAttribute('id', 'usernameSU');
  usernameSU.setAttribute('placeholder', 'Εισαγωγή Ονόματος Χρήστη');
  usernameSU.setAttribute('title', 'Το όνομα χρήστη μπορεί να περιλαμβάνει γράμματα και αριθμούς. Πρέπει να είναι μήκους το πολύ 20 χαρακτήρων.');
  passwordSU.setAttribute('type', 'password');
  passwordSU.setAttribute('id', 'passwordSU');
  passwordSU.setAttribute('placeholder', 'Εισαγωγή Κωδικού');
  passwordSU.setAttribute('title', 'Ο κωδικός πρέπει να είναι μεταξύ 8 και 255 χαρακτήρων. Μπορεί να περιλαμβάνει γράμματα, αριθμούς και τα σύμβολα !, @, #.');
  submitsignup.setAttribute('type', 'submit');
  submitsignup.setAttribute('value', 'Υποβολή');
  submitsignup.setAttribute('id', 'submitsignup');
  document.body.appendChild(divsignup);
  document.getElementById('divsignup').appendChild(contsignup);
  document.getElementById('contsignup').appendChild(psignup);
  document.getElementById('contsignup').appendChild(formsignup);
  document.getElementById('formsignup').appendChild(usernameSU);
  document.getElementById('formsignup').appendChild(passwordSU);
  document.getElementById('formsignup').appendChild(submitsignup);
}

//Η closeDivs είναι σαν την styleFormDivs του home.js, γραμμή 142
function closeDivs() {
  var divlogin = document.getElementById('divlogin');
  var divsignup = document.getElementById('divsignup');
  window.addEventListener('click', function(event) {
    if (event.target == divlogin) {
      divlogin.style.display = 'none';
    }
  });
  window.addEventListener('click', function(event) {
    if (event.target == divsignup) {
      divsignup.style.display = 'none';
    }
  });
}

//Ελέγχει την φόρμα εισόδου για κενά πεδία και σε περίπτωση εσφαλμένης εισαγωγής δίνει μήνυμα
function loginFormValidation() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;
  if (username == '' || password == '') {
    alert('Συμπληρώστε όλα τα πεδία!');
    return false;
  } else return true;
}

//Ελέγχει την φόρμα εγγραφής και δίνει κατάλληλα μηνύματα
function signupFormValidation() {
  var usernameSU = document.getElementById('usernameSU').value;
  var passwordSU = document.getElementById('passwordSU').value;
  
  //Επιτρέπονται χαρακτήρες λατινικοί και ελληνικοί, κεφαλαία και μικρά, και φυσικά αριθμοί
  var usernameSUv = /^[A-Za-zΑ-Ωα-ω0-9]+$/
  //Όπως και αποπάνω με την προσθήκη των συμβόλων !,@,#
  var passwordSUv = /^[A-Za-zΑ-Ωα-ω0-9!@#]+$/
  
  if (usernameSU == '' || passwordSU == '') {
    alert('Συμπληρώστε όλα τα πεδία!');
    return false;
    
  } else if (usernameSU.length > 20) {
    alert('Όνομα χρήστη μέχρι 20 χαρακτήρες!');
    return false;
    
  } else if (!usernameSUv.test(usernameSU)) {
    alert('Χρησιμοποιήστε μόνο γράμματα και αριθμούς!');
    return false;
    
  } else if (passwordSU.length < 8) {
    alert('Ο κωδικός πρέπει να είναι μήκους τουλάχιστον 8 χαρακτήρων.');
    return false;
    
  } else if (passwordSU.length > 255) {
    alert('Ο κωδικός πρέπει να έιναι μικρότερος των 255 χαρακτήρων.');
    return false;

  } else if (!passwordSUv.test(passwordSU)) {
    alert('Μπορείτε να χρησιμοποιήστε γράμματα, αριθμούς και τα εξής σύμβολα: !, @, #.');
    return false;

  } else return true;
}

//Εμφάνιση φόρμας εισόδου
function loginShow() {
  var divlogin = document.getElementById('divlogin');
  divlogin.style.display = 'block';
}

//Εμφάνιση φόρμας εγγραφής
function signupShow() {
  var divsignup = document.getElementById('divsignup');
  divsignup.style.display = 'block';
}

//Δημιουργία κουμπιών που καλούν τις φόρμες, προσθήκη ιδιοτήτων και προσθήκων των ίδιων στο HTML
function buttons() {
  var loginbtn = document.createElement('button');
  var signupbtn = document.createElement('button');
  loginbtn.setAttribute('id', 'loginbtn');
  loginbtn.innerHTML = 'Είσοδος';
  loginbtn.addEventListener('click', loginShow);
  signupbtn.setAttribute('id', 'signupbtn');
  signupbtn.innerHTML = 'Εγγραφή';
  signupbtn.addEventListener('click', signupShow);
  document.getElementById('buttondiv').appendChild(loginbtn);
  document.getElementById('buttondiv').appendChild(signupbtn);
}

//Η loginData στέλνει τα δεδομένα της φόρμας στον εξυπηρετητή
function loginData() {
//Παίρνει τα δεδομένα από τις φόρμες, τα βάζει σε ένα JSON στοιχείο
  var data = JSON.stringify({
    'username': document.getElementById('username').value,
    'password': document.getElementById('password').value
  });
  
  //Δημιουργεί αίτημα που το στέλνει με την μέθοδο POST
  var xhr = new XMLHttpRequest();
  var url = 'login.php';
  
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(data);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      console.log(xhr.responseText);

      if (xhr.responseText == 'Επιτυχία') {
        window.location.replace('home.php');
      } else alert('Λάθος στοιχεία!');
    }
  };
}

//Λειτουργεί όπως η loginData, αλλά για εγγραφή
function signupData() {
  var data = JSON.stringify({
    'username': document.getElementById('usernameSU').value,
    'password': document.getElementById('passwordSU').value
  });
  var xhr = new XMLHttpRequest();
  var url = 'signup.php';
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(data);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      if (xhr.responseText == 'Επιτυχία') {
        //Επειδή εδώ δεν έχουμε ανακατεύθυνση σε περιπτωση επιτυχίας, καθαρίζουμε την φόρμα και την κρύβουμε 
        document.getElementById('formsignup').reset();
        document.getElementById('formsignup').style.display = 'none';
        alert('Επιτυχής εγγραφή!');
      } else alert('Λάνθασμένη εισαγωγή στοιχείων.')
    }
  };
}
