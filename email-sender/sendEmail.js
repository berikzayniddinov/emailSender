const nodemailer = require('nodemailer'); // Импортируем Nodemailer

// Настройка транспортера для подключения к SMTP-серверу
const transporter = nodemailer.createTransport({
    host: 'smtp.example.com', // Замените на адрес вашего SMTP-сервера (например, smtp.gmail.com)
    port: 587,                // Порт (587 для TLS, 465 для SSL)
    secure: false,            // Установите true для SSL, false для TLS
    auth: {
        user: 'your-username',  // Ваш логин (например, email@example.com)
        pass: 'your-password'   // Ваш пароль (или пароль приложения, если используете Gmail)
    }
});

// Настройка параметров письма
const mailOptions = {
    from: 'your-email@example.com',         // Адрес отправителя
    to: 'recipient-email@example.com',      // Адрес получателя
    subject: 'Test Email from Nodemailer',  // Тема письма
    text: 'This is a test email sent from Node.js using Nodemailer.', // Текст письма
    attachments: [ // (Необязательно) Вложения
        {
            filename: 'example.txt',            // Имя файла
            content: 'This is the content of the attachment.' // Содержимое вложения
        }
    ]
};

// Отправка письма
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error(`Error occurred: ${error.message}`);
        return;
    }
    console.log(`Email sent successfully: ${info.response}`);
});
