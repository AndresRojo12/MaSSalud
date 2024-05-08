const nodemailer = require("nodemailer");

async function sendConfirmationEmail(email, name) {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      secure: true,
      port: 465,
      auth: { user: "pandamesa123@gmail.com", pass: "qizy piym egxg miul" },
    });

    const htmlBody = `
    <p>¡Hola ${name}!</p>
    <p>Te has registrado con éxito en nuestro sistema.</p>
    <p>Por favor, haz clic en el siguiente botón para confirmar tu registro:</p>
    <a href="http://localhost:3000/paciente/inicio" style="display: inline-block; background-color: #4CAF50; color: white; padding: 14px 20px; text-align: center; text-decoration: none; display: inline-block; border-radius: 4px; border: none; cursor: pointer;">Aceptar</a>
`;


    let info = await transporter.sendMail({
      from: "massalud@gmail.com",
      to: email,
      subject: "Confirmación de registro exitoso",
      text: `¡Hola ${name}! Te has registrado con éxito en nuestro sistema.`,
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