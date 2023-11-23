function date(year1, month1, day1) {


  let date = new Date(year1, month1 - 1, day1);

  date.setDate(date.getDate() + 1);

  if (date.getDate === 1) {
    date.setMonth(date.getMonth() + 1);
    if (date.getMonth() === 0) {
      date.setFullYear(date.getFullYear() + 1);
    }
  }

  const year = date.getFullYear();
  const month = (date.getMonth() + 1);
  const day = date.getDate();

  console.log(`${year}-${month}-${day}`);

}
