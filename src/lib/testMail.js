import transporter from "./mailer";

export async function testMail() {
    try {
        await transporter.verify();

        console.log("✅ Mail server connected");
    } catch (err) {
        console.error(err);
    }
}