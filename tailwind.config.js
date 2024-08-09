/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    // ini akan menimpa atau buat manual
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      // ini untuk menamphakan fitur yang sudah dimiliki tailwind
      colors: {
        beige_gw: "#FEF3E2",
        green_gw: "#0A6847",
        dark_gw: "#0f172a",
        abu_gw: "#64748b",
        hijau_pastel: "#B5C18E",
        biru_pastel: "#9BB8CD",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
