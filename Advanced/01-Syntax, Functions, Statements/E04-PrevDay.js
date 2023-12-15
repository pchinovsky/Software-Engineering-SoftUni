function prevDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    date.setDate(day - 1)

    const y = date.getFullYear();
    const m = (date.getMonth() + 1);
    const d = date.getDate();
    console.log(`${y}-${m}-${d}`);

}