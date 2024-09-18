/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "logo-url": "url('@/assets/logo.png')",
        "login-url": "url('@/assets/login.png')",
        "temp-url": "url('@/asstes/avator.jpg')",
        "work-center-url": "url('@/assets/work-center.png')",
      },
      height: {
        160: "40rem",
        128: "32rem",
        100: "25rem",
      },
      width: {
        160: "40rem",
        128: "32rem",
        100: "25rem",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
