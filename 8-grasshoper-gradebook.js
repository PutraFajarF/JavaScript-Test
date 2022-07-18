function getGrade (s1, s2, s3) {
  // Code here
  let nilai = (s1 + s2 + s3) / 3;
  if (nilai >= 90 && nilai <= 100) {
    return 'A';
  } else if (nilai >= 80 && nilai < 90) {
    return 'B';
  } else if (nilai >= 70 && nilai < 80) {
    return 'C';
  } else if (nilai >= 60 && nilai < 70) {
    return 'D';
  } else {
    return 'F';
  } 
};