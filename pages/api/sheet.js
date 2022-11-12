import {google} from "googleapis"

async function handler (req, res) {
    if (req.method === "POST"){
    		const {
          firstName,
          middleName,
          lastName,
          gender,
          dateOfBirth,
          email,
          phoneNumber,
          completeAddress,
        } = req.body;
		res.json({message: "Only POST requests are allowed"});

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.NEXT_PUBLIC_VERCEL_CLIENT_EMAIL,
        client_id: process.env.NEXT_PUBLIC_VERCEL_CLIENT_ID,
        private_key: process.env.NEXT_PUBLIC_VERCEL_PRIVATE_KEY.replace(/\\n/g,'\n'),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.NEXT_PUBLIC_VERCEL_SPREADSHEET_ID,
      range: "MEMBERS!A2:H",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            firstName,
            middleName,
            lastName,
            gender,
            dateOfBirth,
            email,
            phoneNumber,
            completeAddress,
          ],
        ],
      },
    });

    res.status(201).json({ message: 'It works!', response });
    }

    res.status(200).json({ message: 'Hey!' });
}

export default handler;