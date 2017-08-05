
/*
    new Date(): // Print Current Date & time
    new Date(Millseconds): // Print Milliseconds from UTC 1 Jan 1970 00:00:00 
    new Date(Date String): // Can add Date String
    new Date(Year, Month, Day, Hour, Minute, second, Millisecond)
 */

 var myTime = new Date(1995, 6, 25, 10, 30, 30, 500); // Mix them / forget comma Js don't care !
 console.log(myTime);

/*
    Date Format:
        Full Format
        Long Format
        Short Format: (DD-MM-YYYY Or MM-DD-YYYY With the Hours)
        ISO Format: (MM-DD-YYYY hh:mm:ss TZD) 
*/

var myTime2 = new Date("7/25/1995 10:30:00");
console.log(myTime2); 

/*
    Date Functions:
        getDate(): Day of the Month 1-30
        getDay(): Day of the week 0-6
        getFullYear(): Get the full year
        getHours(): Get Hours 1-59
        getMinutes(): Get Minutes 1-59
        getSeconds(): Get Seconds 1-59
        getMilliseconds(): Get Milliseconds 0-999
        getTime(): Number of Milliseconds from 1970 Or sepecific Date
        getTimezondeOffset(): Get diff between UTC & Your local time in minutes

*/

var theDate =   new Date("7/25/1998"),
    dt = theDate.getTime();

console.log(dt + " Milliseocnds from 1970");