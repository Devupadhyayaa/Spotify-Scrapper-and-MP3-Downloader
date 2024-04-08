# Spotify Scraper and MP3 Downloader

## Overview
🎵 This web app combines Puppeteer, RAPID API, and a user-friendly interface to seamlessly interact with Spotify and YouTube. The tech stack includes EJS, HTML, CSS, and JavaScript for the frontend, with the backend powered by Express.js and Node.js. The primary purpose is to facilitate the search and download of MP3 files corresponding to Spotify tracks, all while offering a responsive and intuitive user experience.

**Disclaimer:** 🚨 Please note that scraping and downloading content from platforms like Spotify and YouTube may violate their terms of service. Use this script responsibly and at your own risk.

## Features
- **Login to Spotify:** 🎧 The script uses Puppeteer to automate the login process to Spotify. Provide your credentials securely to access Spotify's content.

- **Scrape Data:** 📊 After logging in, the script can scrape various data from Spotify, such as playlists, track details, and artist information.

- **Search on YouTube:** 🔍 Utilizing the scraped data, the script performs searches on YouTube to find corresponding videos for the Spotify tracks.

- **MP3 Download:** 🎶 Once the YouTube video is identified, the script uses the RAPID API to convert and download the MP3 version of the audio.

- **User-Friendly UI:** 🌐 The frontend is developed using EJS, HTML, CSS, and JavaScript, providing an intuitive and visually appealing user interface.

- **Responsive Design:** 📱 The UI is designed to be responsive, ensuring a seamless experience across different devices and screen sizes.

## Setup Instructions
1. **Install Dependencies:**
   - Make sure you have Node.js installed on your system.
   - Run `npm install` to install the required dependencies.

2. **Run the Application:**
   - Execute the script by running `node script.js`.
   - Access the user-friendly UI through your preferred web browser by visiting the local host, you can adjust the port in the script.js.
   - Follow the on-screen instructions to initiate the desired actions.

## Important Notes
- **Legal Considerations:** ⚖️ Ensure that you comply with Spotify, YouTube, and RAPID API's terms of service. Unauthorized scraping or downloading may result in legal consequences.

- **Authentication:** 🔒 Keep your Spotify credentials secure. Avoid sharing your login details or storing them in insecure locations.

- **Use Responsibly:** 🌐 Use this script responsibly and consider the impact on the platforms you are interacting with. Excessive requests or unauthorized access can lead to account suspension.

- **Disclaimer:** 📚 This project is for educational purposes only, and the developers are not responsible for any misuse of the script.

## Contributing
🤝 Contributions are welcome! If you find issues or have suggestions for improvements, please open an issue or submit a pull request.

## License
📄 This project is licensed under the [MIT License](LICENSE.txt).
