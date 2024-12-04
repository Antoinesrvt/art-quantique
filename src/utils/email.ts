import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'servant.ermes@gmail.com',
    pass: process.env.EMAIL_PASSWORD
  }
});

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendEmail(data: EmailData) {
  // Email to artist
  const artistMailOptions = {
    from: data.email,
    to: 'servant.ermes@gmail.com',
    subject: `Nouveau message de ${data.name}: ${data.subject}`,
    html: `
      <h2>Nouveau message de contact</h2>
      <p><strong>Nom:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Sujet:</strong> ${data.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    `
  };

  // Confirmation email to sender
  const confirmationMailOptions = {
    from: 'servant.ermes@gmail.com',
    to: data.email,
    subject: 'Confirmation de votre message - Art Quantique',
    html: `
      <h2>Merci pour votre message</h2>
      <p>Cher(e) ${data.name},</p>
      <p>J'ai bien reçu votre message concernant "${data.subject}" et je vous en remercie.</p>
      <p>Je vous répondrai dans les plus brefs délais.</p>
      <br>
      <p>Cordialement,</p>
      <p>Servant Ermes</p>
      <p>Art Quantique</p>
    `
  };

  try {
    await transporter.sendMail(artistMailOptions);
    await transporter.sendMail(confirmationMailOptions);
    return { success: true };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error: 'Failed to send email' };
  }
}