const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');

// MIDDLEWARE
sgMail.setApiKey('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')
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// REST
router.post('/mail', (req, res) => {
    const msg = {
        to: 'lewis.morgans@weareswift.dev',
        from: 'info@weareswift.dev',
        subject: `${req.body.subject} from: ${req.body.email}`,
        text: req.body.message
    };

    sgMail
        .send(msg)
        .then(() => {
            res.send({httpCode: 200});
        })
        .catch(error => {
            res.send({
                httpCode: error.code,
                reason: error.message,
                message: error.response.body.errors[0].message
            });
        });
});

module.exports = router;