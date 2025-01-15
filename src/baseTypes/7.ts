/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum dayOfTheWeek {
    Monday = "Monday",
    Tuesday = "Tuesday",
    Wednesday = "Wednesday",
    Thursday = "Thursday",
    Friday = "Friday",
    Saturday = "Saturday",
    Sunday = "Sunday"
}

function isWeekend(day: dayOfTheWeek): boolean {
  return day === dayOfTheWeek.Saturday || day === dayOfTheWeek.Sunday;
};

console.log(isWeekend(dayOfTheWeek.Monday));
console.log(isWeekend(dayOfTheWeek.Sunday));