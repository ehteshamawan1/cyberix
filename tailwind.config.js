/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "#78787a",
          "200": "#292930",
          "300": "rgba(120, 120, 122, 0.09)",
        },
        dimgray: {
          "100": "#727274",
          "200": "#5f5f62",
          "300": "#5d5d63",
          "400": "#5c5c63",
          "500": "#5b5b61",
          "600": "#555",
          "700": "#535355",
          "800": "#525255",
          "900": "rgba(92, 92, 99, 0.09)",
        },
        darkslategray: {
          "100": "#424245",
          "200": "#3c3c45",
          "300": "#383840",
        },
        khaki: "#ffdc60",
        goldenrod: "#e6c247",
        lightgray: {
          "100": "#d5d5d5",
          "200": "#d0d0d0",
          "300": "#cfcfcf",
          "400": "#ccc",
        },
        gainsboro: {
          "100": "#e6e6e6",
          "200": "#dcdcdc",
          "300": "rgba(230, 230, 230, 0.09)",
        },
        whitesmoke: "#ececec",
        mediumslateblue: "#5956e8",
        gold: "#fec90c",
        crimson: "#ff1850",
        mistyrose: "#ffd1c8",
        cornflowerblue: "#3c88dc",
        mediumaquamarine: "#3dc39e",
        steelblue: "#3d95cf",
        cadetblue: "#3dacb7",
        darksalmon: "#e38676",
        blueviolet: "#7d1af4",
      },
      spacing: {},
      fontFamily: {
        "noto-sans": "'Noto Sans'",
        nunito: "Nunito",
      },
      borderRadius: {
        "6xs": "7px",
        mini: "15px",
        "10xs": "3px",
        "40xl": "59px",
        "3xs": "10px",
        "11xl": "30px",
      },
    },
    fontSize: {
      lg: "18px",
      "6xl": "25px",
      xl: "20px",
      base: "16px",
      "21xl": "40px",
      "5xl": "24px",
      "13xl": "32px",
      mini: "15px",
      "11xl": "30px",
      "51xl": "70px",
      "23xl": "42px",
      "37xl": "56px",
      "26xl": "45px",
      "8xl": "27px",
      "17xl": "36px",
      inherit: "inherit",
    },
    screens: {
      mq1575: {
        raw: "screen and (max-width: 1575px)",
      },
      mq1525: {
        raw: "screen and (max-width: 1525px)",
      },
      mq1250: {
        raw: "screen and (max-width: 1250px)",
      },
      mq1225: {
        raw: "screen and (max-width: 1225px)",
      },
      mq850: {
        raw: "screen and (max-width: 850px)",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
