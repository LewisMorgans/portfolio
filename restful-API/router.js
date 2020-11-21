const express = require('express');
const router = express.Router();
const sgMail = require('@sendgrid/mail');
const bodyParser = require('body-parser');

// MIDDLEWARE
sgMail.setApiKey('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');
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

// REST
router.post('/mail', (req, res) => {
    console.log(process.env.SENDGRID_API_KEY);
    console.log(req.body)

    const msg = {
        to: 'lmorgans90@gmail.com',
        from: req.body.email,
        subject: req.body.subject,
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