# Guestify 🎉

Guestify is a highly customizable web application designed for event invitations, primarily weddings. It allows guests to view invitations in multiple languages, RSVP, and even upload event pictures. Additionally, an admin panel helps track attendance.

## Features ✨
- 🌍 **Multi-language support** – Display invitation cards in various languages.
- 🎟 **RSVP system** – Guests can confirm their attendance.
- 🛠 **Admin panel** – Track attendance and guest numbers.
- 📸 **Photo sharing** – Guests can upload and view event photos.

## Installation 🏗

1. Clone the repository:
   ```sh
   git clone https://github.com/AvinoamSebbah/Guestify.git
   cd guestify
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure Firebase:
   - Create a `.env` file and add your Firebase credentials:
     ```
     REACT_APP_API_KEY=your_api_key
     REACT_APP_AUTH_DOMAIN=your_auth_domain
     REACT_APP_PROJECT_ID=your_project_id
     REACT_APP_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_APP_ID=your_app_id
     REACT_APP_MEASUREMENT_ID=your_measurement_id
     ```
4. Start the development server:
   ```sh
   npm start
   ```

## Customization 🛠

### 1. Languages 🌍
To add or modify languages, update the `translations.json` file in your project:
```json
{
  "en": {
    "translation": {
      "confirm_your_attendance": "Confirm your attendance",
           }
        },
   "fr": {
    "translation": {
      "confirm_your_attendance": "Confirmer votre présence",
           }
      }
}
```

### 2. Invitation Card 🎨
Place your custom invitation images inside the `assets/images` directory.

### 3. Firebase Configuration 🔥
Ensure your `.env` file contains the necessary Firebase credentials.

### 4. Event Information 📅
Modify `translations.json` to update event details like date, location, and messages.

## Available Scripts 📜

- `npm start` – Runs the app in development mode.
- `npm build` – Builds the app for production.
- `npm test` – Runs tests.

## Technologies Used 🛠
- React 18 ⚛️
- Firebase 🔥
- Material UI 🎨
- React Query ⚡
- i18next 🌍

---

Enjoy using **Guestify** and make your event management seamless! 🚀

Invitation card :
![image](https://github.com/user-attachments/assets/889bf8c6-c0d9-4beb-be70-1a3783c805d3)

Invitation form :
![image](https://github.com/user-attachments/assets/af17b747-dc28-479f-81dc-b36174794520)

Admin page :
![image](https://github.com/user-attachments/assets/1b8b2b4a-ab06-4e04-b6c5-eae1aa8020ef)

Picture page :
![image](https://github.com/user-attachments/assets/71e55965-e210-49c2-957d-d50c2c8743ed)


