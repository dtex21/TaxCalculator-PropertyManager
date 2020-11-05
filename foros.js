//Υπολογισμός φόρου κατοικίας
//Η calc δέχεται μια διάταξη, καλεί τις επόμενες συναρτήσεις και υπολογίζει το φόρο
function calc(arr) {
  var t, tm, pal, orof, pros, tz, apom, vh, hk, round;
  tm = tetr(arr);
  pal = palaiotita(arr);
  orof = orofoi(arr);
  pros = prosopsi(arr);
  tz = timeszonis(arr);
  apom = apomeiosi(arr, tm);
  vh = helpfulareas(arr);
  hk = unfinbuild(arr);

  t = tm * tz * pal * orof * pros * apom * vh * hk;
  round = (Math.round(t * 100) / 100).toFixed(2);
  return round;
}
//Η tetr επιστρέφει τα τετραγωνικά και παίρνει τιμές από την δεύτερη θέση της διάταξης
function tetr(arr) {
  var m2;
  m2 = arr[1];
  return m2;
}
//H palaiotita παίρνει τιμές από την τρίτη θέση και επιστρέφει διαφορετικές τιμές για τον συντελεστή παλαιότητας
function palaiotita(arr) {
  var y;
  if (arr[2] == '26 έτη και άνω') {
    y = 1;
  } else if (arr[2] == '20 έως 25 έτη') {
    y = 1.05;
  } else if (arr[2] == '15 έως 19 έτη') {
    y = 1.1;
  } else if (arr[2] == '10 έως 14 έτη') {
    y = 1.15;
  } else if (arr[2] == '5 έως 9 έτη') {
    y = 1.2;
  } else {
    y = 1.25;
  }
  return y;
}
//Αντίστοιχα με τις παραπάνω, η orofoi επιστρέφει τιμές για μονοκατοικία, υπόγειο και ορόφους
function orofoi(arr) {
  var fl;
  if (arr[3] == 'Y' || arr[3] == 'Υ') {
    fl = 0.98;
  } else if (arr[3] == '0' || arr[3] == '1') {
    fl = 1;
  } else if (arr[3] == '2' || arr[3] == '3') {
    fl = 1.01;
  } else if (arr[3] == '4' || arr[3] == '5' || arr[3] == 'M' || arr[3] == 'Μ') {
    fl = 1.02;
  } else {
    fl = 1.03;
  }
  return fl;
}
//H prosopsi λετουργεί αντίστοιχα με τις παραπάνω
function prosopsi(arr) {
  var f;
  if (arr[4] == '0') {
    f = 1;
  } else if (arr[4] == '1') {
    f = 1.01;
  } else {
    f = 1.02;
  }
  return f;
}
//Το ίδιο και η timeszonis
function timeszonis(arr) {
  var z;
  if (arr[5] == '0-500') {
    z = 2;
  } else if (arr[5] == '501-750') {
    z = 2.8;
  } else if (arr[5] == '751-1000') {
    z = 2.9;
  } else if (arr[5] == '1001-1500') {
    z = 3.7;
  } else if (arr[5] == '1501-2000') {
    z = 4.5;
  } else if (arr[5] == '2001-2500') {
    z = 6;
  } else if (arr[5] == '2501-3000') {
    z = 7.6;
  } else if (arr[5] == '3001-3500') {
    z = 9.2;
  } else if (arr[5] == '3501-4000') {
    z = 9.5;
  } else if (arr[5] == '4001-4500') {
    z = 11.1;
  } else if (arr[5] == '4501-5000') {
    z = 11.3;
  } else {
    z = 13;
  }
  return z;
}
//Η apomeiosi δέχεται εκτός από διάταξη και τον αριθμό των τετραγωνικών, διότι ο συντελεστής αυτός είναι αντιστρόφος ανάλογος τους
function apomeiosi(arr, m2) {
  var apep;
  if (arr[6] == 'Ναι') {
    if (m2 <= 500) {
      apep = 1;
    } else if (m2 > 500 && m2 <= 1500) {
      apep = 0.8;
    } else if (m2 > 1500 && m2 <= 3000) {
      apep = 0.75;
    } else if (m2 > 3000 && m2 <= 5000) {
      apep = 0.65;
    } else if (m2 > 5000 && m2 <= 10000) {
      apep = 0.55;
    } else if (m2 > 10000 && m2 <= 25000) {
      apep = 0.45;
    } else if (m2 > 25000 && m2 <= 50000) {
      apep = 0.35;
    } else {
      apep = 0.25;
    }
  } else {
    apep = 1;
  }
  return apep;
}
//Η helpfulareas δίνει διαφορετικές τιμές σε περίπτωση που το ακίνητο είναι βοηθητικός χώρος ή όχι
function helpfulareas(arr) {
  var ha;
  if (arr[7] == 'Ναι') {
    ha = 0.1;
  } else {
    ha = 1;
  }
  return ha;
}
//Αντίστοιχα με την αποπάνω, η unfinbuild ελέγχει αν είναι ημητελές το κτήριο ή όχι
function unfinbuild(arr) {
  var ub;
  if (arr[8] == 'Ναι') {
    ub = 0.4;
  } else {
    ub = 1;
  }
  return ub;
}
