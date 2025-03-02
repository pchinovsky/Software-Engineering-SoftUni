import handlebars from 'express-handlebars';

export default function hbsConfig(app) {
    app.engine('hbs', handlebars.engine({
        extname: 'hbs',
        helpers: {
            selectOption: function (val) {
                const optionData = [
                    { value: 'Wildfire', label: 'Wildfire' },
                    { value: 'Flood', label: 'Flood' },
                    { value: 'Earthquake', label: 'Earthquake' },
                    { value: 'Hurricane', label: 'Hurricane' },
                    { value: 'Drought', label: 'Drought' },
                    { value: 'Tsunami', label: 'Tsunami' },
                    { value: 'Other', label: 'Other' }
                ];

                return optionData.map(option => {
                    const selected = option.value === val ? 'selected' : '';
                    return `<option value="${option.value}" ${selected}>${option.label}</option>`;
                }).join('\n');
            },
            interestCount: function (interestedList) {
                console.log('interestedList - ', interestedList);
                return Array.isArray(interestedList) ? interestedList.length : 0;
            },
        }
    }));
    app.set('view engine', 'hbs');

}