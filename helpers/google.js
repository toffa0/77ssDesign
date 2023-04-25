import { GoogleAuth } from "googleapis-common";

export default class Google {
  constructor() {
    this.oauth2Client = new google.auth.OAuth2(
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
      process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URL
    );
  }
  async login() {
    const scopes = [
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile",
    ];
    const url = await this.oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: scopes,
    });
    return url;
  }
  async getGoogleAccountFromCode(code) {
    const data = await this.oauth2Client.getToken(code);
    const tokens = data.tokens;
    this.oauth2Client.setCredentials(tokens);
    const plus = google.plus({ version: "v1", auth: this.oauth2Client });
    const me = await plus.people.get({ userId: "me" });
    const userGoogleId = me.data.id;
    const userGoogleEmail =
      me.data.emails && me.data.emails.length && me.data.emails[0].value;
    return {
      id: userGoogleId,
      email: userGoogleEmail,
      tokens: tokens,
    };
  }
}
