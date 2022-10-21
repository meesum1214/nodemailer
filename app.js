const app = require('express')();
const nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", // hostname
    secureConnection: false, // TLS requires secureConnection to be false
    port: 587, // port for secure SMTP
    tls: {
        ciphers: 'SSLv3'
    },
    auth: {
        user: 'alinaqvi097@outlook.com',
        pass: 'aliraza5a5'
    }
});

app.get('/', (req, res) => {



    // setup e-mail data, even with unicode symbols
    var mailOptions = {
        from: 'alinaqvi097@outlook.com', // sender address (who sends)
        to: 'salmannaqvi461@gmail.com', // list of receivers (who receives)
        subject: 'New Form is submitted from your website ', // Subject line
        text: `
        Name: ${req.query.name}
        Subject: ${req.query.subject}
        Email: ${req.query.email}
        Message: ${req.query.msg}
        `
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });

    console.log("params>>>", req.params)
    console.log('query>>>', req.query)

    res.send('Hello World!');
});





app.listen(4000, () => console.log('Listening on port 4000!'));