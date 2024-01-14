document.querySelectorAll('.monthCalendar').forEach(sec => sec.style.display = 'none');
document.querySelectorAll('.daysCalendar').forEach(sec => sec.style.display = 'none');

const years = document.getElementById('years');
years.addEventListener('click', handleYear);

let last;
let clickedYear;

function handleYear(e) {
    let targetTd = e.target.closest('td');
    if (!targetTd) {
        return;
    }
    const year = targetTd.firstElementChild.textContent;
    clickedYear = year;
    if (last) {
        last.style.display = 'none';
    }
    const present = document.querySelector(`.monthCalendar#year-${year}`)
    present.style.display = 'block';
    last = present;
    years.style.display = 'none';
}

document.querySelectorAll('.monthCalendar').forEach(sec => sec.addEventListener('click', handleMonth));

function handleMonth(e) {
    if (e.target.tagName !== 'TD' && e.target.tagName !== 'CAPTION') {
        return;
    } else if (e.target.tagName === 'CAPTION') {
        years.style.display = 'block';
        last.style.display = 'none';
        last = years;
        return;
    }
    const month = e.target.firstElementChild.textContent;
    const months = [0, 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
    const id = `month-${clickedYear}-${months.indexOf(month)}`
    document.getElementById(id).style.display = 'block';
    const present = document.getElementById(id);
    last.style.display = 'none';
    last = present;

    const caption = present.getElementsByTagName('caption')[0];
    caption.removeEventListener('click', handleBackToMonths);
    caption.addEventListener('click', handleBackToMonths);
}

function handleBackToMonths() {
    const months = document.getElementById(`year-${clickedYear}`);
    months.style.display = 'block';
    last.style.display = 'none';
    last = months;
}

