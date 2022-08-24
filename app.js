const cron = require("node-cron");
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const fs = require("fs");
const config = require("./db.config");



const sendMail = (email, name) => {
    let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            // user: "a******@gmail.com",
            // pass: "*****"

        }
    });

    let mailDetails = {
        from: "a***@gmail.com",
        to: `${email}`,
        subject: `happy birthday ${name} `,
        text: `wish you many many return of day ${name}`
    };

    mailTransporter.sendMail(

        mailDetails, (err, data) => {
            if (err) {
                return res
                    .status(203)
                    .json({
                        statuscode: 203,
                        message: "unble to send mail"
                    });
            }
        }

    );
}

var date_ob = new Date();
var day = date_ob.getDate();
var month = (date_ob.getMonth() + 1);
var date = day + "-" + month;


const checkbday = () => {

    let SQL = `SELECT [username],[email] FROM [user_info].[user_data_table] WHERE [dob] LIKE '[${date}]%'`
    config.sequelize.query(SQL, { type: config.sequelize.QueryTypes.SELECT })
        .then((data) => {
            sendMail(data[i].email, data[i].username)
            return res
                .status(200)
                .json({
                    statuscode: 200,
                    message: `mail sent to'${username}' successfully`
                })
        }).catch((error) => {
            return res
                .status(203)
                .json({
                    statuscode: 203,
                    message: "something went wrong"
                });
        })
}

cron.schedule("* * */1 * *", () => {
    checkbday();
});
app.listen(3000);
