//Φόρμα κατοικίας
//Για περισσότερες πληροφορίες βλ. το submitcar.js
//Βασική συνάρτηση που καλεί τις υπόλοιπες
function submitHouse() {
  formh();
  styleContainerH();
}

//Δημιουργία φόρμας
function formh() {
  var divhouse = document.createElement('div');
  var conth = document.createElement('div');
  var p1 = document.createElement('p');
  var formh = document.createElement('form');
  
  //Φιλική ονομασία
  var fnameh = document.createElement('input');
  
  //Τετραγωνικά
  var m2 = document.createElement('input');
  
  //Παλαιότητα
  var year = document.createElement('select');
  var years = new Array('Παλαιότητα', '26 έτη και άνω', '20 έως 25 έτη', '15 έως 19 έτη', '10 έως 14 έτη', '5 έως 9 έτη', 'Μέχρι 4 έτη');
  
  //Όροφοι
  var floors = document.createElement('input');
  
  //Πρόσοψη
  var facade = document.createElement('input');
  
  //Τιμή ζώνης
  var zone = document.createElement('select');
  var zones = new Array('Τιμή Ζώνης', '0-500', '501-750', '751-1000', '1001-1500', '1501-2000', '2001-2500', '2501-3000', '3000-3500', '3501-4000', '4001-4500', '4501-5000', '5001+');
  
  //Συντελεστής απομείωσης - Ειδικό κτήριο
  var apep = document.createElement('select');
  var apeps = new Array('Ειδικό Κτήριο', 'Ναι', 'Όχι');
  
  //Συντελεστής βοηθητικού χώρου
  var ha = document.createElement('select');
  var has = new Array('Βοηθητικός Χώρος', 'Ναι', 'Όχι');
  
  //Συντελεστής ημητελούς κτίσματος
  var ub = document.createElement('select');
  var ubs = new Array('Ημιτελές Κτίσμα', 'Ναι', 'Όχι');
  
  //Κουμπί υποβολής
  var submith = document.createElement('input');
  
  //Κουμπί καθαρισμού φόρμας
  var reset = document.createElement('input');
  
  divhouse.setAttribute('id', 'divhouse');
  conth.setAttribute('id', 'conthouse');
  p1.innerHTML = 'Εισαγωγή Στοιχείων Κατοικίας';
  formh.setAttribute('id', 'formhouse');
  formh.setAttribute('action', 'javascript:;');
  formh.setAttribute('onsubmit', 'return formValidationHouse() && sendHouseData()');
  fnameh.setAttribute('type', 'text');
  fnameh.setAttribute('id', 'fnameh');
  fnameh.setAttribute('placeholder', 'Φιλική Ονομασία');
  fnameh.setAttribute('title', 'Εισάγετε μια ονομασία για την κατοικία.');
  m2.setAttribute('type', 'text');
  m2.setAttribute('id', 'm2');
  m2.setAttribute('placeholder', 'Εμβαδόν (μ^2)');
  m2.setAttribute('title', 'Εισάγετε εμβαδόν σε τετραγωνικά μέτρα.');
  year.setAttribute('id', 'year');
  year.setAttribute('title', 'Επιλέξτε την παλαιότητα κατασκευής.');
  floors.setAttribute('type', 'text');
  floors.setAttribute('id', 'floors');
  floors.setAttribute('placeholder', 'Αριθμός Ορόφων');
  floors.setAttribute('title', 'Εισάγετε τον αριθμό των ορόφων. Χρησιμοποιήστε Υ για υπόγειο και Μ για μονοκατοικία.');
  floors.setAttribute('oninput', 'floors.value = floors.value.toUpperCase()');
  facade.setAttribute('type', 'text');
  facade.setAttribute('id', 'facade');
  facade.setAttribute('placeholder', 'Πρόσοψη');
  facade.setAttribute('title', 'Εισάγετε τον αριθμό των προσόψεων (0-4).');
  zone.setAttribute('id', 'zone');
  zone.setAttribute('title', 'Επιλέξτε τιμή ζώνης.');
  apep.setAttribute('id', 'apep');
  apep.setAttribute('title', 'Είναι ειδικό κτήριο;');
  ha.setAttribute('id', 'ha');
  ha.setAttribute('title', 'Υπάρχουν βοηθητικοί χώροι;');
  ub.setAttribute('id', 'ub');
  ub.setAttribute('title', 'Είναι το κτίσμα ημιτελές;');
  submith.setAttribute('type', 'submit');
  submith.setAttribute('value', 'Υποβολή');
  submith.setAttribute('id', 'submith');
  reset.setAttribute('type', 'reset');
  reset.setAttribute('value', 'Καθαρισμός');
  reset.setAttribute('id', 'reseth');
  document.body.appendChild(divhouse);
  document.getElementById('divhouse').appendChild(conth);
  document.getElementById('conthouse').appendChild(p1);
  document.getElementById('conthouse').appendChild(formh);
  document.getElementById('formhouse').appendChild(fnameh);
  document.getElementById('formhouse').appendChild(m2);
  
  //Σε όσα πεδία είναι πεδία επιλογής, χρησιμοποιούμε μια for για τοποθέτηση των επιλογών
  document.getElementById('formhouse').appendChild(year);
  for (let i = 0; i < years.length; i++) {
    let option = document.createElement('option');
    option.value = years[i];
    option.text = years[i];
    document.getElementById('year').appendChild(option);
  }
  document.getElementById('formhouse').appendChild(floors);
  document.getElementById('formhouse').appendChild(facade);
  document.getElementById('formhouse').appendChild(zone);
  for (let i = 0; i < zones.length; i++) {
    let option = document.createElement('option');
    option.value = zones[i];
    option.text = zones[i];
    document.getElementById('zone').appendChild(option);
  }
  document.getElementById('formhouse').appendChild(apep);
  for (let i = 0; i < apeps.length; i++) {
    let option = document.createElement('option');
    option.value = apeps[i];
    option.text = apeps[i];
    document.getElementById('apep').appendChild(option);
  }
  document.getElementById('formhouse').appendChild(ha);
  for (let i = 0; i < has.length; i++) {
    let option = document.createElement('option');
    option.value = has[i];
    option.text = has[i];
    document.getElementById('ha').appendChild(option);
  }
  document.getElementById('formhouse').appendChild(ub);
  for (let i = 0; i < ubs.length; i++) {
    let option = document.createElement('option');
    option.value = ubs[i];
    option.text = ubs[i];
    document.getElementById('ub').appendChild(option);
  }
  document.getElementById('formhouse').appendChild(submith);
  document.getElementById('formhouse').appendChild(reset);
}

//Αντίστοιχη με την styleContainerC, βλ. submitcar.js, γραμμή 89
function styleContainerH() {
  var fnameh = document.getElementById('fnameh');
  var m2 = document.getElementById('m2');
  var year = document.getElementById('year');
  var floors = document.getElementById('floors');
  var facade = document.getElementById('facade');
  var zone = document.getElementById('zone');
  var apep = document.getElementById('apep');
  var ha = document.getElementById('ha');
  var ub = document.getElementById('ub');
  fnameh.insertAdjacentHTML('afterend', '<br>');
  m2.insertAdjacentHTML('afterend', '<br>');
  year.insertAdjacentHTML('afterend', '<br>');
  floors.insertAdjacentHTML('afterend', '<br>');
  facade.insertAdjacentHTML('afterend', '<br>');
  zone.insertAdjacentHTML('afterend', '<br>');
  apep.insertAdjacentHTML('afterend', '<br>');
  ha.insertAdjacentHTML('afterend', '<br>');
  ub.insertAdjacentHTML('afterend', '<br>');
}

//Έλεγχος ορθότητας εισαχθέντων δεδομένων
function formValidationHouse() {
  var fnameh = document.getElementById('fnameh').value;
  var m2 = document.getElementById('m2').value;
  var year = document.getElementById('year').value;
  var floors = document.getElementById('floors').value;
  var facade = document.getElementById('facade').value;
  var zone = document.getElementById('zone').value;
  var apep = document.getElementById('apep').value;
  var ha = document.getElementById('ha').value;
  var ub = document.getElementById('ub').value;
  
  //Στο πεδίο των τετραγωνικών δεχόμαστε απο 1 έως 4 αριθμούς
  var m2v = /^[0-9]{1,4}$/
  //Στο πεδίο των ορόφων δεχόμαστε είτε με ελληνικούς, είτε με λατινικούς χαρακτήρες τα γραμματα Μ για μονοκατοικία και Υ για υπόγειο, καθώς και αριθμούς
  var floorsv = /^[MΜ]$|^[YΥ]$|^[0-9]+$/
  //Στο πεδίο των προσόψεων δεχόμαστε μια φορά τους αριθμούς 0 έως 4
  var facadev = /^[0-4]{1}$/
  
  //Παρακάτω κάνουμε τους αντίστοιχους ελέγχους με την formValidationCar, γραμμή 106
  if (fnameh == '' || m2 == '' || year == 'Παλαιότητα' || floors == '' || facade == '' || zone == 'Τιμή Ζώνης' || apep == 'Ειδικό Κτήριο' || ha == 'Βοηθητικός Χώρος' || ub == 'Ημιτελές Κτίσμα') {
    alert('Συμπληρώστε όλα τα πεδία.');
    return false;
  } else if (!m2v.test(m2) || m2 == 0) {
    alert('Λάθος τετραγωνικά μέτρα.');
    return false;
  } else if (!floorsv.test(floors) || floors == 0) {
    alert('Λάθος αριθμός ορόφων.');
    return false;
  } else if (!facadev.test(facade)) {
    alert('Λάθος αριθμός προσόψεων.');
    return false;
  } else return true;
}

//Όπως και στo submitcar.js, teli, γραμμή 139, τοποθετούμε τα δεδομένα σε διάταξη και καλούμε την συνάρτηση υπολογισμού φόρου
function foros() {
  b = new Array(
    document.getElementById('fnameh').value,
    document.getElementById('m2').value,
    document.getElementById('year').value,
    document.getElementById('floors').value,
    document.getElementById('facade').value,
    document.getElementById('zone').value,
    document.getElementById('apep').value,
    document.getElementById('ha').value,
    document.getElementById('ub').value
  );
  return calc(b);
}

//Αντίστοιχη με την sendCarData, γραμμή 151
function sendHouseData() {
  var tax = foros();
  var data = JSON.stringify({
    'fnameh': document.getElementById('fnameh').value,
    'm2': document.getElementById('m2').value,
    'year': document.getElementById('year').value,
    'floors': document.getElementById('floors').value,
    'facade': document.getElementById('facade').value,
    'zone': document.getElementById('zone').value,
    'apep': document.getElementById('apep').value,
    'ha': document.getElementById('ha').value,
    'ub': document.getElementById('ub').value,
    'foros': tax
  });
  var tableH = document.getElementById('tableH');
  var xhr = new XMLHttpRequest();
  var url = 'submithouse.php';
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(data);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      if (xhr.responseText == 'Επιτυχία') {
        document.getElementById('formhouse').reset();
        alert('Επιτυχής εισαγωγή!');
        if (tableH == null) {
          requestH();
        } else {
          document.getElementById('tablediv1').removeChild(tableH);
          requestH();
        }
      } else alert('Παρουσιάστηκε κάποιο σφάλμα.');
    }
  };
}
