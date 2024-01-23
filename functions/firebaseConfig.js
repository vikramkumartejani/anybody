const adminApp = require('firebase-admin/app');
const initializeApp = adminApp.initializeApp;
const getApps = adminApp.getApps;
const cert = adminApp.cert;

const getFirestore = require('firebase-admin/firestore').getFirestore;
const getStorage = require('firebase-admin/storage').getStorage;

const dotenv = require('dotenv');

dotenv.config();

if (!getApps().length) {
  initializeApp({
    //TODO: MOVE SECRET CREDENTIALS TO ENV FILE AND REPLACE THEM WITH VARIABLES
    credential: cert({
      "type": "service_account",
      "project_id": "anybodymovz",
      "private_key_id": "73d91c0e9f08e403b5bbb7c66fe28a707c60ab53",
      "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDRUdy7PLFddQf8\nMU8MLT+INMuiF1hOk2pfB7ahmHdUGdTMF5WYac9ebKkYGxZx/mt6iQZyNAFy53Wo\n6qXk8noJa2/pm6QK+1FC7FMhApDbf5A37KduKj6bu1yfN+CtMvw0vBUK8XVxJkOU\n5IISVEmUfSZCooQ8uWuI848W/20bE+FXL8SrD0XKmkRsdy18ZW7BHQBvp/r8QCv9\nbyrhVWxUi7iCeO4tvzE8vYXUBJnhz6O2vt9sJJPrxltTitugEx1FxwfHPa2w1Ajp\nifXjn3bgvCvmmqLw04ekHSJ116tdHDxyJtDFFwEf4vhdTrtR5KfkWgoum8SztRhx\nagczOvShAgMBAAECggEAANimWkiRsSKCFxm4D5ES5EceHgZPE1+AxQBHA4iOPjQV\n6GK1pmhyW+fnn70LjFfAdY4GdV2O5lD/sJB9DefB8P3+7X5lUYzsQld6MzBfb39A\nsQyxLTqhDtwxONSzCSE7PD94zG7fLCdI63oYaWh/RQkj343ol+YiJGNDdD7hcRQr\nx9bL/SkH3O3bsqfKKKnjyd8UO2RR8C/z1/UyPzJhm4zsz75nlWzog0uwi/nzsYAx\nyZoMIAZdipdGk+QTfya/sYgFDo47e3fjDUg6ockZjJ2DVBL7sAmt/yJMsOyoDNxG\nFRyCE/0kKJN3cJXJcT0jQ5WWidJ9kOfU2Uiqbh43wQKBgQDxnE7Wu1QGQPIpxzVF\nk74bocyJl3gmU9LyCs1q12yUkE5BM2cjDAH9Z8EfIP+H4bKPAdItZE+Fdy3MqP6i\ngClvx0sw51iZMEiOWggxNkU0GlDsqhwMJhO72pfFGnx1Ay5LjnD3ntAkVVS0vzDt\n4Ui/GbxdXxJpNzBxZqxBf2Z5wQKBgQDdyTxWK9r86XwFf3BHiuPQ1Pz5Lqrgk6Oi\nE68b1fnRlStFz8gUa+3fIHtzjUAkvDLnMUuFfNYcDdEvnGuK/16zp4U0TqHdoU8a\n3nW+gPzTETxKxq9tvZAHYrOylZ+nAy0RVhye6WDllB56J8FTzPrzqE884lk/kYKg\nG2xwYHJy4QKBgQCLjbtD8IPB8PVvCC9O9t1R3Izl1GWDzdsEDxVDZxbCYO+yXVxv\nM9paYfl8X3T5KXYXf/fEXDJKZuI/WkVp2xkUBUr6/kWAhhECmCIvOqeSRrkDWeZF\nZiDz2njbUkcc1y+AWNALVuHmepsoo15BqGR6bQUN8YIS39vNRH6ufkXUgQKBgDPw\nkMTNeHeKZpUTB0R57mhVuPjSSQpXCRdH7NZkAiFnAb9TrdO6gvaiMMca6U6xFGq4\nTKtyVOI1CixQQY9HxvHj5XoegCHbSR9Nwd1fb9YuTyRj62mT30sbfmHwUHdYcxGA\nTSuaFCsvyQNqlAgAFTVC0Wu8xpHwjdrZEUgwDh2BAoGAfbGdygbVlHJi9EJ55sYd\nW92xJo6LipRFAmC47HRK2dTaBPUoBM0Lzw9ksAvtOKxFIhAaS+UxwJkYjmWKrDoi\nCsSYH9XRJPZhQMV2A18y7LZMN8pmVCpnZ5XPrg3LIqA1/blFFYk3+gxHjHUKaAZo\nFaK7LPQMBzV2N3HyJn9biAc=\n-----END PRIVATE KEY-----\n",
      "client_email": "firebase-adminsdk-hexkc@anybodymovz.iam.gserviceaccount.com",
      "client_id": "104811137792590549792",
      "auth_uri": "https://accounts.google.com/o/oauth2/auth",
      "token_uri": "https://oauth2.googleapis.com/token",
      "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
      "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-hexkc%40anybodymovz.iam.gserviceaccount.com",
      "universe_domain": "googleapis.com"
    })
  });
}

// Initialize Firebase
const firestore = getFirestore();
const storage = getStorage().bucket('anybodymovz.appspot.com');

module.exports = {
  firestore: firestore,
  storage: storage
};
