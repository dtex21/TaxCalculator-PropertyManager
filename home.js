//Αρχική σελίδα
//H start καλεί της συναρτήσεις με τις φόρμες κατοικίας, αυτοκινήτου και διαγραφής, από άλλα JS αρχεία και τις παρακάτω
function start() {
  container();
  submitHouse();
  submitCar();
  msgDelH();
  msgDelC();
  styleFormDivs();
  buttons();
  requestH();
  requestC();
}

//Δημιουργεί ένα χώρο για τα κουμπιά
function container() {
  var buttoncont = document.createElement('div');
  buttoncont.setAttribute('id', 'buttoncont');
  document.body.appendChild(buttoncont);
}

//Η συνάρτηση για τον πίνακα των κατοικιών
function tableHouse(array) {
  var tablediv = document.createElement('div');
  tablediv.setAttribute('id', 'tablediv1');
  var table = document.createElement('table');
  table.setAttribute('id', 'tableH');
  
  //Εισαγωγή κεφαλίδας από διάταξη στον πίνακα και μορφοποίηση
  let header = new Array('', 'Φιλική Ονομασία', 'Τετραγωνικά', 'Παλαιότητα', 'Όροφοι', 'Προσόψεις', 'Τιμή Ζώνης', 'Ειδικό Κτήριο', 'Βοηθητικός Χώρος', 'Ημιτελές Κτίσμα', 'Φόρος');
  let headRow = table.insertRow();
  for (let i = 0; i < header.length; i++) {
    let headCell = document.createElement('TH');
    headCell.innerHTML += header[i];
    headCell.style.backgroundColor = '#C0B283';
    headRow.appendChild(headCell);
  }
  //Εισαγωγή γραμμών και κελιών
  for (let i = 0; i < array.length; i++) {
    let row = table.insertRow();
    row.innerHTML = '<input type="button" value="D" onclick="msgDelHShow()"/>';
    for (let j = 0; j < 10; j++) {
      let cell = row.insertCell();
      cell.innerHTML += array[i][j];
    }
  }
  //Πρόσθεση στοιχείων στο έγγραφο HTML
  document.body.appendChild(tablediv);
  document.getElementById('tablediv1').appendChild(table);
}

//Όπως και η αποπάνω δημιουργεί ένα πίνακα για τα αυτοκίνητα
function tableCar(array) {
  var tablediv = document.createElement('div');
  tablediv.setAttribute('id', 'tablediv2');
  var table = document.createElement('table');
  table.setAttribute('id', 'tableC');
  
  let header = new Array('', 'Φιλική Ονομασία', 'Μάρκα', 'Μοντέλο', 'Πινακίδα Κυκλοφορίας', 'Πρώτη Κυκλοφορία', 'Κυβικά', 'Ρύποι', 'Τέλη Κυκλοφορίας');
  let headRow = table.insertRow();
  for (let i = 0; i < header.length; i++) {
    let headCell = document.createElement('TH');
    headCell.innerHTML += header[i];
    headCell.style.backgroundColor = '#C0B283';
    headRow.appendChild(headCell);
  }
  
  for (let i = 0; i < array.length; i++) {
    let row = table.insertRow();
    row.innerHTML = '<input type="button" value="D" onclick="msgDelCShow()"/>';
    for (let j = 0; j < 8; j++) {
      let cell = row.insertCell();
      cell.innerHTML += array[i][j];
    }
  }
  
  document.body.appendChild(tablediv);
  document.getElementById('tablediv2').appendChild(table);
}

//Η requestH δημιουργεί και στέλνει ένα αίτημα στην ΒΔ για τα στοιχεία του χρήστη και καλεί την tableHouse
function requestH() {
  var xhr = new XMLHttpRequest();
  var url = 'fetchhouse.php';
  xhr.open('POST', url, true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var jsonh = JSON.parse(xhr.responseText);
      tableHouse(jsonh);
    }
  }
}

//Αντίστοιχη με την αποπάνω
function requestC() {
  var xhr = new XMLHttpRequest();
  var url = 'fetchcar.php';
  xhr.open('POST', url, true);
  xhr.send();
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      var jsonc = JSON.parse(xhr.responseText);
      tableCar(jsonc);
    }
  }
}

//Εμφανίζει την φόρμα για την κατοικία
function formHouseShow() {
  var divhouse = document.getElementById('divhouse');
  divhouse.style.display = 'block';
}

//Εμφανίζει την φόρμα για το αυτοκίνητο
function formCarShow() {
  var divcar = document.getElementById('divcar');
  divcar.style.display = 'block';
}

//Εμφανίζει το μήνυμα για την διαγραφή κατοικίας
function msgDelHShow() {
  var msgDelDivH = document.getElementById('deldh');
  msgDelDivH.style.display = 'block';
}

//Εμφανίζει το μήνυμα για την διαγραφή αυτοκινήτου
function msgDelCShow() {
  var msgDelDivC = document.getElementById('deldc');
  msgDelDivC.style.display = 'block';
}

//Δημιουργεί τα κουμπιά
function buttons() {
  //Δημιουργία κουμπιών
  var housebtn = document.createElement('button');
  var carbtn = document.createElement('button');
  var logoutbtn = document.createElement('button');
  //Θέτει id, γράφει το κείμενο του κάθε κουμπιού και στο πάτημα καλεί τις παραπάνω συναρτήσεις εμφάνισης
  housebtn.setAttribute('id', 'housebtn');
  housebtn.innerHTML = 'Κατοικία';
  housebtn.addEventListener('click', formHouseShow);
  carbtn.setAttribute('id', 'carbtn');
  carbtn.innerHTML = 'Αυτοκίνητο';
  carbtn.addEventListener('click', formCarShow);
  logoutbtn.setAttribute('id', 'logoutbtn');
  
  //Εδώ καλεί το αρχείο logout.php
  logoutbtn.setAttribute('onclick', 'window.location.href="logout.php"');
  logoutbtn.innerHTML = 'Αποσύνδεση';
  
  //Πρόσθεση των στοιχείων στο έγγραφο HTML
  document.getElementById('buttoncont').appendChild(housebtn);
  document.getElementById('buttoncont').appendChild(carbtn);
  document.getElementById('buttoncont').appendChild(logoutbtn);
}

//Η styleFormDivs εξαφανίζει τις φόρμες
function styleFormDivs() {
  var divhouse = document.getElementById('divhouse');
  var divcar = document.getElementById('divcar');
  var msgDelDivH = document.getElementById('deldh');
  var msgDelDivC = document.getElementById('deldc');
  window.addEventListener('click', function(event) {
    if (event.target == divhouse) {
      divhouse.style.display = 'none';
    }
  });
  window.addEventListener('click', function(event) {
    if (event.target == divcar) {
      divcar.style.display = 'none';
    }
  });
  window.addEventListener('click', function(event) {
    if (event.target == msgDelDivH) {
      msgDelDivH.style.display = 'none';
    }
  });
  window.addEventListener('click', function(event) {
    if (event.target == msgDelDivC) {
      msgDelDivC.style.display = 'none';
    }
  });
}
