import SibApiV3Sdk from "sib_api_v3_sdk";

export const handler = async (event) => {
  try {
    const { civility, name, email, subject, message } = JSON.parse(event.body || "{}");

    if (!name || !email || !message) {
      return { statusCode: 400, body: "Missing fields" };
    }

    const client = SibApiV3Sdk.ApiClient.instance;
    client.authentications["api-key"].apiKey = process.env.BREVO_API_KEY;

    const api = new SibApiV3Sdk.TransactionalEmailsApi();

    const safeSubject = (subject && String(subject).trim()) ? String(subject).trim() : "Nouveau message – Galerie MNC";

    await api.sendTransacEmail({
      sender: { email: "contact@galeriemnc.com", name: "Galerie MNC" },
      to: [{ email: "gmnc@club-internet.fr" }],
      replyTo: { email },
      subject: safeSubject,
      htmlContent: `
        <p><strong>Vous avez reçu un nouveau message via le site Galerie MNC.</strong></p>
        <p><strong>Civilité :</strong> ${civility || "-"}</p>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong><br/>${String(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (e) {
    console.error(e);
    return { statusCode: 500, body: JSON.stringify({ ok: false }) };
  }
};
