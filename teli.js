//Υπολογισμός τελών κυκλοφορίας
//Η ypol υπολογίζει τα τέλη, καλώντας τις παρακάτω συναρτήσεις
function ypol(arr) {
  var co2, timi, result;
  
  //Αν η χρονιά πρώτης κυκλοφορίας είναι πριν το 2010
  if (arr[4] > 2010) {
    //Καλέι την συναστηση συντελεστή ρύπων και πολλαπλασιάζει με τους ρύπους
    co2 = gases(arr);
    timi = co2 * arr[6];
    //Αλλιώς καλεί την συνάρτηση κυβισμού και δίνει απευθείας το ποσό
  } else {
    timi = engineCapacity(arr);
  }
  //Τέλος στρογγυλοποιεί το αποτέλεσμα με δύο δεκαδικά και επιστέφει το ποσό
  result = (Math.round(timi * 100) / 100).toFixed(2);
  return result;
}

//Με βάση τα κυβικά του οχήματος επιστέφει ποσό
function engineCapacity(arr) {
  var ec;
  if (arr[5] <= 300) {
    ec = 22;
  } else if (arr[5] > 300 && arr[5] <= 785) {
    ec = 55;
  } else if (arr[5] > 785 && arr[5] <= 1071) {
    ec = 120;
  } else if (arr[5] > 1071 && arr[5] <= 1357) {
    ec = 135;
  } else if (arr[5] > 1357 && arr[5] <= 1548) {
    if (arr[4] <= 2000) {
      ec = 225;
    } else if (arr[4] > 2000 && arr[4] <= 2005) {
      ec = 240;
    } else {
      ec = 255;
    }
  } else if (arr[5] > 1548 && arr[5] <= 1738) {
    if (arr[4] <= 2000) {
      ec = 250;
    } else if (arr[4] > 2000 && arr[4] <= 2005) {
      ec = 265;
    } else {
      ec = 280;
    }
  } else if (arr[5] > 1738 && arr[5] <= 1928) {
    if (arr[4] <= 2000) {
      ec = 280;
    } else if (arr[4] > 2000 && arr[4] <= 2005) {
      ec = 300;
    } else {
      ec = 320;
    }
  } else if (arr[5] > 1928 && arr[5] <= 2357) {
    if (arr[4] <= 2000) {
      ec = 615;
    } else if (arr[4] > 2000 && arr[4] <= 2005) {
      ec = 630;
    } else {
      ec = 690;
    }
  } else if (arr[5] > 2357 && arr[5] <= 3000) {
    if (arr[4] <= 2000) {
      ec = 820;
    } else if (arr[4] < 2000 && arr[4] <= 2005) {
      ec = 840;
    } else {
      ec = 920;
    }
  } else if (arr[5] > 3000 && arr[5] <= 4000) {
    if (arr[4] <= 2000) {
      ec = 1025;
    } else if (arr[4] > 2000 && ar[4] <= 2005) {
      ec = 1050;
    } else {
      ec = 1150;
    }
  } else {
    if (arr[4] <= 2000) {
      ec = 1230;
    } else if (arr[4] > 2000 && arr[4] <= 2005) {
      ec = 1260;
    } else {
      ec = 1380;
    }
  }
  return ec;
}

//Με βάση τους ρύπους, επιστρέφει συντελεστή με ευρώ ανα κυβικό εκατοστό 
function gases(arr) {
  var gas;
  if (arr[6] <= 90) {
    gas = 0;
  } else if (arr[6] > 90 && arr[6] <= 100) {
    gas = 0.9;
  } else if (arr[6] > 100 && arr[6] <= 120) {
    gas = 0.98;
  } else if (arr[6] > 120 && arr[6] <= 140) {
    gas = 1.2;
  } else if (arr[6] > 140 && arr[6] <= 160) {
    gas = 1.85;
  } else if (arr[6] > 160 && arr[6] <= 180) {
    gas = 2.45;
  } else if (arr[6] > 180 && arr[6] <= 200) {
    gas = 2.78;
  } else if (arr[6] > 200 && arr[6] <= 250) {
    gas = 3.05;
  } else {
    gas = 3.72;
  }
  return gas;
}
