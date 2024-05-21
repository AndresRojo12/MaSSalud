const nodemailer = require("nodemailer");
const { config } = require('../../../config/config');


async function sendConfirmationEmail(email, name, appointmentTime, doctorName, createdBy) {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true,
      port: 465,
      auth: { user: config.emailAdmin, pass: config.credentialCorreo },
    });

    const htmlBody = `
      <p>¡Hola ${name}!</p>
      <p>Has solicitado una cita médica.</p>
      <p><strong>Detalles de la cita:</strong></p>
      <p>Hora de la cita: ${appointmentTime}</p>
      <p>Doctor: ${doctorName}</p>
      <p>Cita creada por: ${createdBy}</p>
    `;

    let info = await transporter.sendMail({
      from: config.emailAdmin,
      to: email,
      subject: "Agenda tu cita",
      text: `¡Hola ${name}! Has solicitado una cita médica.\nHora de la cita: ${appointmentTime}\nDoctor: ${doctorName}\nCita creada por: ${createdBy}`,
      html: htmlBody,
    });

    console.log("Correo de confirmación enviado a:", email);
    console.log("Message ID:", info.messageId);
    console.log("Preview URL:", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.error("Error al enviar el correo de confirmación:", error);
    throw error;
  }
}

module.exports = { sendConfirmationEmail };
