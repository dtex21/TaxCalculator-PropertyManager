//Σύστημα διαγραφής καταχωρήσεων
//Δημιουργία φόρμας για επιβεβαίωση διαγραφής αυτοκινήτου, για επιπλέον πληροφορίες βλ.login_signup.js την loginForm, γραμμή 23
function msgDelC() {
  var deldc = document.createElement('div');
  var delcc = document.createElement('div');
  var delfc = document.createElement('form');
  var delpc = document.createElement('p');
  var delic = document.createElement('input');
  var delsc = document.createElement('input');
  deldc.setAttribute('id', 'deldc');
  delcc.setAttribute('id', 'delcc');
  delfc.setAttribute('id', 'delfc');
  delfc.setAttribute('action', 'javascript:;');
  delfc.setAttribute('onsubmit', 'deleteCar()');
  delpc.innerHTML = 'Εισάγετε την φιλική ονομασία για επιβεβαίωση διαγραφής.';
  delic.setAttribute('id', 'delic');
  delsc.setAttribute('id', 'delsc');
  delsc.setAttribute('type', 'submit');
  delsc.setAttribute('value', 'Υποβολή');
  document.body.appendChild(deldc);
  document.getElementById('deldc').appendChild(delcc);
  document.getElementById('delcc').appendChild(delfc);
  document.getElementById('delfc').appendChild(delpc);
  document.getElementById('delfc').appendChild(delic);
  document.getElementById('delfc').appendChild(delsc);
}

//Αντίστοιχη με την παραπάνω, αλλά για διαγραφή κατοικίας
function msgDelH() {
  var deldh = document.createElement('div');
  var delch = document.createElement('div');
  var delfh = document.createElement('form');
  var delph = document.createElement('p');
  var delih = document.createElement('input');
  var delsh = document.createElement('input');
  deldh.setAttribute('id', 'deldh');
  delch.setAttribute('id', 'delch');
  delfh.setAttribute('id', 'delfh');
  delfh.setAttribute('action', 'javascript:;');
  delfh.setAttribute('onsubmit', 'deleteHouse()');
  delph.innerHTML = 'Εισάγετε την φιλική ονομασία για επιβεβαίωση διαγραφής.';
  delih.setAttribute('id', 'delih');
  delsh.setAttribute('id', 'delsh');
  delsh.setAttribute('type', 'submit');
  delsh.setAttribute('value', 'Υποβολή');
  document.body.appendChild(deldh);
  document.getElementById('deldh').appendChild(delch);
  document.getElementById('delch').appendChild(delfh);
  document.getElementById('delfh').appendChild(delph);
  document.getElementById('delfh').appendChild(delih);
  document.getElementById('delfh').appendChild(delsh);
}

//Η deleteCar στέλνει αίτημα στον εξυπηρετητή για την διαγραφή της καταχώρησης αυτοκινήτου, βάση φιλικής ονομασίας
function deleteCar() {
  var jdata1 = JSON.stringify({
    'fnamec': document.getElementById('delic').value
  });
  var xhr = new XMLHttpRequest();
  var url = 'deletecar.php';
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(jdata1);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      if (xhr.responseText == 'Επιτυχία') {
        document.getElementById('delfc').reset();
        document.getElementById('deldc').style.display = 'none';
        alert('Επιτυχής διαγραφή!');
        
        //Αφαιρεί τον προηγούμενο πίνακα
        document.getElementById('tablediv2').removeChild(document.getElementById('tableC'));
        //Καλεί την requestC, η οποία παίρνει από την ΒΔ τα νέα δεδομένα και εμφανίζει τον ανανεωμένο πίνακα, συγκεκριμένα βλ home.js, γραμμή 87
        requestC();
        
      } else alert('Παρουσιάστηκε κάποιο σφάλμα.');
    }
  };
}

//Αντίστοιχη της παραπάνω για κατοικία
function deleteHouse() {
  var jdata2 = JSON.stringify({
    'fnameh': document.getElementById('delih').value
  });
  var xhr = new XMLHttpRequest();
  var url = 'deletehouse.php';
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(jdata2);
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
      if (xhr.responseText == 'Επιτυχία') {
        document.getElementById('delfh').reset();
        document.getElementById('deldh').style.display = 'none';
        alert('Επιτυχής διαγραφή!');
        document.getElementById('tablediv1').removeChild(document.getElementById('tableH'));
        requestH();
      } else alert('Παρουσιάστηκε κάποιο σφάλμα.');
    }
  };
}
