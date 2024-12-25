import handlebars from 'express-handlebars';
import Handlebars from "handlebars";

export default function hbsConfig(app) {
    app.engine('hbs', handlebars.engine({
        extname: 'hbs',
        helpers: {
            renderStars: function (rating) {
                const stars = Math.floor(rating / 2);
                let starHtml = '';
                starHtml += '&#x2605;'.repeat(stars);
                return new Handlebars.SafeString(starHtml);
            }
        }
    }));
    app.set('view engine', 'hbs');
    // - needed to allow static files like css and imgs to load
    // app.use('/static', express.static(path.join(__dirname, 'static')));
    // - but actually works simply so - 
}