//Φόρμα καταχώρησης στοιχείων αυτοκινήτου
//H submitCar καλεί τις παρακάτω
function submitCar() {
  formc();
  styleContainerC();
}

//Η formc δημιουργεί την φόρμα, προσθέτει ιδιότητες στα στοιχεία και στη συνέχεια τα προσθέτει στο HTML
function formc() {
  var divcar = document.createElement('div');
  var contc = document.createElement('div');
  var p2 = document.createElement('p');
  var formc = document.createElement('form');
  
  //Φιλική ονομασία
  var fnamec = document.createElement('input');
  
  //Μάρκα αυτοκινήτου
  var car = document.createElement('input');
  
  //Μοντέλο αυτοκινήτου
  var model = document.createElement('input');
  
  //Πινακίδα κυκλοφορίας
  var lp = document.createElement('input');
  
  //Χρονιά πρώτης κυκλοφορίας
  var date = document.createElement('input');
  
  //Κυβικά
  var cc = document.createElement('input');
  
  //Ρύποι
  var co2 = document.createElement('input');
  
  //Κουμπί υποβολής
  var submit = document.createElement('input');
  
  //Κουμπί καθαρισμού φόρμας
  var clear = document.createElement('input');
  
  divcar.setAttribute('id', 'divcar');
  contc.setAttribute('id', 'contcar');
  p2.innerHTML = 'Εισαγωγή Στοιχείων Αυτοκινήτου';
  formc.setAttribute('action', 'javascript:;');
  formc.setAttribute('id', 'formcar');
  formc.setAttribute('onsubmit', 'return formValidationCar() && sendCarData()');
  fnamec.setAttribute('type', 'text');
  fnamec.setAttribute('id', 'fnamec');
  fnamec.setAttribute('placeholder', 'Φιλική Ονομασία');
  fnamec.setAttribute('title', 'Εισάγετε ένα όνομα για εύκολη εύρεση του αυτοκινήτου');
  car.setAttribute('type', 'text');
  car.setAttribute('id', 'car');
  car.setAttribute('placeholder', 'Μάρκα Αυτοκινήτου');
  car.setAttribute('title', 'Εισάγετε την μάρκα με λατινικούς χαρακτήρες');
  //Στα πεδία car, model και lp, χρειαζόμαστε κεφαλαίους χαρακτήρες, συνεπώς οι χαρακτήρες που εισάγει ο χρήστης προσαρμόζονται ανάλογα
  car.setAttribute('oninput', 'car.value = car.value.toUpperCase()');
  model.setAttribute('type', 'text');
  model.setAttribute('id', 'model');
  model.setAttribute('placeholder', 'Μοντέλο Αυτοκινήτου');
  model.setAttribute('title', 'Εισάγετε το μοντέλο με λατινικούς χαρακτήρες');
  model.setAttribute('oninput', 'model.value = model.value.toUpperCase()');
  lp.setAttribute('type', 'text');
  lp.setAttribute('id', 'lp');
  lp.setAttribute('placeholder', 'Πινακίδα Κυκλοφορίας');
  lp.setAttribute('title', 'Σε μορφή ΓΓΓ-ΑΑΑΑ');
  lp.setAttribute('oninput', 'lp.value = lp.value.toUpperCase()');
  date.setAttribute('type', 'number');
  date.setAttribute('id', 'date');
  date.setAttribute('placeholder', 'Πρώτη Κυκλοφορία');
  date.setAttribute('title', 'Εισάγετε χρονιά πρώτης κυκλοφορίας');
  cc.setAttribute('type', 'number');
  cc.setAttribute('id', 'cc');
  cc.setAttribute('placeholder', 'Κυβικά Κινητήρα');
  cc.setAttribute('title', 'Εισάγετε τον κυβισμό του κινητήρα');
  co2.setAttribute('type', 'number');
  co2.setAttribute('id', 'co2');
  co2.setAttribute('placeholder', 'Ρύποι');
  co2.setAttribute('title', 'Εισάγετε τους ρύπους που εκπέμπει το αυτοκίνητο');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('value', 'Υποβολή');
  submit.setAttribute('id', 'submitc');
  clear.setAttribute('type', 'reset');
  clear.setAttribute('value', 'Καθαρισμός');
  clear.setAttribute('id', 'clearc');
  document.body.appendChild(divcar);
  document.getElementById('divcar').appendChild(contc);;
  document.getElementById('contcar').appendChild(p2);
  document.getElementById('contcar').appendChild(formc);
  document.getElementById('formcar').appendChild(fnamec);
  document.getElementById('formcar').appendChild(car);
  document.getElementById('formcar').appendChild(model);
  document.getElementById('formcar').appendChild(lp);
  document.getElementById('formcar').appendChild(date);
  document.getElementById('formcar').appendChild(cc);
  document.getElementById('formcar').appendChild(co2);
  document.getElementById('formcar').appendChild(submit);
  document.getElementById('formcar').appendChild(clear);
}

//Ταξινομεί τα στοιχεία, το ένα κάτω από το άλλο
function styleContainerC() {
  var fnamec = document.getElementById('fnamec');
  var car = document.getElementById('car');
  var model = document.getElementById('model');
  var lp = document.getElementById('lp');
  var date = document.getElementById('date');
  var cc = document.getElementById('cc');
  var co2 = document.getElementById('co2');
  fnamec.insertAdjacentHTML('afterend', '<br>');
  car.insertAdjacentHTML('afterend', '<br>');
  model.insertAdjacentHTML('afterend', '<br>');
  lp.insertAdjacentHTML('afterend', '<br>');
  date.insertAdjacentHTML('afterend', '<br>');
  cc.insertAdjacentHTML('afterend', '<br>');
  co2.insertAdjacentHTML('afterend', '<br>');
}

//Ελέγχει την ορθότητα των στοιχείων
function formValidationCar() {
  //Παίρνει τις τιμές των πεδίων
  var fnamec = document.getElementById('fnamec').value;
  var car = document.getElementById('car').value;
  var model = document.getElementById('model').value;
  var lp = document.getElementById('lp').value;
  var date = document.getElementById('date').value;
  var cc = document.getElementById('cc').value;
  var co2 = document.getElementById('co2').value;
  //Στα πεδία car για την μάρκα και model για το μοντέλο, δεχόμαστε κεφαλαίους λατινικούς χαρακτήρες με κενά με μήκος από 1 μέχρι 20
  var carv = /^[A-Z0-9\s]{1,20}$/
  //Στο πεδίο της πινακίδας δεχόμαστε 3 κεφαλαίους ελληνικούς χαρακτήρες, μια παύλα και 4 αριθμούς
  var lpv = /^[Α-Ω]{3}[-]{1}[0-9]{4}$/

  if (fnamec == '' || car == '' || model == '' || lp == '' || date == '' || cc == '' || co2 == '') {
    alert('Συμπληρώστε τα κενά πεδία.');
    return false;

  } else if (!carv.test(car) || !carv.test(model)) {
    alert('Χρησιμοποιήστε μόνο λατινικούς χαρακτήρες με μήκος μέχρι 20 χαρακτήρες.')
    return false;

  } else if (!lpv.test(lp) || lp.length != 8) {
    alert('Συμπληρώστε το πεδίο με πινακίδα της μορφής ΓΓΓ-ΑΑΑΑ.');
    return false;

  } else if (date < 0 || cc < 0 || co2 < 0) {
    alert('Μόνο μη αρνητικοί αριθμοί!');
    return false;
  } else return true;
}

//Τοποθετεί τα εισαχθέντα δεδομένα σε μια διάταξη και επιστρέφει την συνάρτηση υπολογισμού των τελών
function teli() {
  a = new Array(
    document.getElementById('fnamec').value,
    document.getElementById('car').value,
    document.getElementById('model').value,
    document.getElementById('lp').value,
    document.getElementById('date').value,
    document.getElementById('cc').value,
    document.getElementById('co2').value
  );
  return ypol(a);
}

//Όπως και στην deleteCar του msgdel.js, γραμμή 52, βάζει τα δεδομένα σε JSON και τα στέλνει στον εξυπηρετητή
function sendCarData() {
  //Καλεί την συνάρτηση υπολογισμού τελών και προσθέτει το αποτέλεσμα στο JSON
  var tk = teli();
  var data = JSON.stringify({
    'fnamec': document.getElementById('fnamec').value,
    'car': document.getElementById('car').value,
    'model': document.getElementById('model').value,
    'lp': document.getElementById('lp').value,
    'date': document.getElementById('date').value,
    'cc': document.getElementById('cc').value,
    'co2': document.getElementById('co2').value,
    'teli': tk
  });
  
  //Παίρνει τον πίνακα αυτοκινήτων από το home.js
  var tableC = document.getElementById('tableC');
  
  //Δημιουργεί και στέλνει το αίτημα
  var xhr = new XMLHttpRequest();
  var url = 'submitcar.php';
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(data);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      if (xhr.responseText == 'Επιτυχία') {
        document.getElementById('formcar').reset();
        alert('Επιτυχής εισαγωγή!');
        //Αν ο πίνακας έιναι κενός απλώς καλεί την συνάρτηση που τον δημιουργεί
        if (tableC == null) {
          requestC();
          //Σε αντίθετη περίπτωση, πρώτα αφαιρεί τον παλιό πίνακα
        } else {
          document.getElementById('tablediv2').removeChild(tableC);
          requestC();
        }
      } else alert('Παρουσιάστηκε κάποιο σφάλμα.');
    }
  };
}
