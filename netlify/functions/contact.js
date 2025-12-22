const SibApiV3Sdk = require("sib-api-v3-sdk");

exports.handler = async (event) => {
  try {
    const { civility, name, email, subject, message } = JSON.parse(event.body || "{}");

    if (!name || !email || !message) {
      return { statusCode: 400, body: "Missing fields" };
    }

    const client = SibApiV3Sdk.ApiClient.instance;
    client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

    const api = new SibApiV3Sdk.TransactionalEmailsApi();

    await api.sendTransacEmail({
      sender: { email: "contact@galeriemnc.com", name: "Galerie MNC" },
      to: [{ email: "gmnc@club-internet.fr" }],
      replyTo: { email },
      subject: (subject && String(subject).trim()) ? String(subject).trim() : "Nouveau message – Galerie MNC",
      htmlContent: `
        <p><strong>Nouveau message via le site Galerie MNC</strong></p>
        <p><strong>Civilité :</strong> ${civility || "-"}</p>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br/>${String(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (err) {
    console.error("BREVO ERROR:", err);
    return { statusCode: 500, body: "Email failed" };
  }
};
