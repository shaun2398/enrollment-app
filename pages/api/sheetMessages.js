import {google} from "googleapis"

async function handler (req, res) {
    if (req.method === "POST"){
    		const { completeName, email, description } = req.body;
		res.json({message: "Only POST requests are allowed"});

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.NEXT_PUBLIC_VERCEL_SPREADSHEET_ID,
      range: "MESSAGES!A2:C",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[completeName, email, description]],
      },
    });

    res.status(201).json({ message: 'It works!', response });
    }

    res.status(200).json({ message: 'Hey!' });
}

export default handler;