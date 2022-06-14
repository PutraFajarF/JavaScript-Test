/**
 * Direction
 * Get name of the day of 4 days ago from today
 *
 * Expected result:
 * 1. if date now = monday
 * 2. then result = thursday
 */
 function result() {
  let d = new Date();
  let dateFourDaysAgo = d.getDate()-4;
  let nameLastFourDay = new Date(dateFourDaysAgo)
  let dayFourDaysAgo = nameLastFourDay.getDay();
  return dayFourDaysAgo;
}

console.log(result());