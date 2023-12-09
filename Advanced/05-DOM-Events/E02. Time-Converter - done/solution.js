function attachEventsListeners() {

    let main = document.querySelector('main');
    main.addEventListener('click', calculate);

    let days = document.getElementById('days');
    let hours = document.getElementById('hours');
    let mins = document.getElementById('minutes');
    let secs = document.getElementById('seconds');

    function calculate(e) {
        let input = 0;

        if (e.target.type === 'button') {

            let id = e.target.parentNode.children[1].id;

            switch (id) {

                case 'days':
                    input = Number(days.value);

                    hours.value = input * 24;
                    mins.value = input * 1440;
                    secs.value = input * 86400;
                    break;

                case 'hours':
                    input = Number(hours.value);

                    days.value = input / 24;
                    mins.value = input * 60;
                    secs.value = input * 3600;
                    break;

                case 'minutes':
                    input = Number(mins.value);

                    days.value = input / 1440;
                    hours.value = input / 60;
                    secs.value = input * 60;
                    break;

                case 'seconds':
                    input = Number(secs.value);

                    days.value = input / 86400;
                    mins.value = input / 60;
                    hours.value = input / 3600;
                    break;

            }

        }

    }

}