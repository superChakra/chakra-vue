/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "logo-url": "url('@/assets/logo.png')",
        "login-url":"url('@/assets/login.png')"
      },
    },
  },
  plugins: [],
};

