// THIS WAS OPTIONAL. I DON'T LIKE IT. IT IS UGLY
// const addDateSuffix = (date) => {
//     let dateStr = date.toString();
  
//     // get last char of date string
//     const lastChar = dateStr.charAt(dateStr.length - 1);
  
//     if (lastChar === '1' && dateStr !== '11') {
//       dateStr = `${dateStr}st`;
//     } else if (lastChar === '2' && dateStr !== '12') {
//       dateStr = `${dateStr}nd`;
//     } else if (lastChar === '3' && dateStr !== '13') {
//       dateStr = `${dateStr}rd`;
//     } else {
//       dateStr = `${dateStr}th`;
//     }  
//     return dateStr;
// };
  
//   // create current time stamp at time of thought creation.
//   module.exports = (
//     timestamp,
//     { monthLength = 'short', dateSuffix = true } = {}
//   ) => {
//     // months starts 0 ending 11
//     const months = {
//         0: monthLength === 'short' ? 'Jan' : 'January',
//         1: monthLength === 'short' ? 'Feb' : 'February',
//         2: monthLength === 'short' ? 'Mar' : 'March',
//         3: monthLength === 'short' ? 'Apr' : 'April',
//         4: monthLength === 'short' ? 'May' : 'May',
//         5: monthLength === 'short' ? 'Jun' : 'June',
//         6: monthLength === 'short' ? 'Jul' : 'July',
//         7: monthLength === 'short' ? 'Aug' : 'August',
//         8: monthLength === 'short' ? 'Sep' : 'September',
//         9: monthLength === 'short' ? 'Oct' : 'October',
//         10: monthLength === 'short' ? 'Nov' : 'November',
//         11: monthLength === 'short' ? 'Dec' : 'December',
//     };
  
//     // format received standardized date.
//     const dateObj = new Date(standardDate);

//     const thisMonth = months[dateObj.getMonth()];
  
//     const thisDay = dateSuffix ? addDateSuffix(dateObj.getDate()) : dateObj.getDate();
  
//     const thisYear = dateObj.getFullYear();

//     var currentHour =
//       dateObj.getHours() > 12 ? Math.floor(dateObj.getHours() - 12) : dateObj.getHours();
  
//     // hours 24 hr clock.
//     if (currentHour === 0) {
//         currentHour = 12;
//     };
  
//     const minsIntoHour = (dateObj.getMinutes() < 10 ? '0' : '') + dateObj.getMinutes();

//     // morning or evening
//     const periodOfDay = dateObj.getHours() >= 12 ? 'pm' : 'am';
  
//     const formattedTimeStamp = `${thisMonth} ${thisDay}, ${thisYear} at ${currentHour}:${minsIntoHour} ${periodOfDay}`;
  
//     return formattedTimeStamp;
//   };