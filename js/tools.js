//Returns monday and sunday of the week
function getWeekRange(weekNo,yearNo) {
    let firstDayofYear = new Date(yearNo, 0, 1);

    if (firstDayofYear.getDay() > 4)  {
        let weekStart = new Date(yearNo, 0, 1 + (weekNo - 1) * 7 - firstDayofYear.getDay() + 8);
        let weekEnd = new Date(yearNo, 0, 1 + (weekNo - 1) * 7 - firstDayofYear.getDay() + 8 + 6);
        return { startDay: weekStart, endDay: weekEnd }
    }
    else {
        let weekStart = new Date(yearNo, 0, 1 + (weekNo - 1) * 7 - firstDayofYear.getDay() + 1);
        let weekEnd = new Date(yearNo, 0, 1 + (weekNo - 1) * 7 - firstDayofYear.getDay() + 1 + 6);
        return { startDay: weekStart, endDay: weekEnd }
    }
}