import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  base: "/lab_zudoku/",
  site: {
    logo: {
      src: { light: "/logo-light.svg", dark: "/logo-dark.svg" },
      alt: "Zudoku",
      width: "130px",
    },
  },
  navigation: [
    {
      type: "category",
      label: "Documentation",
      items: [
        {
          type: "doc",
          file: "Installation",
          label: "Installation",
        },
        {
          type: "doc",
          file: "Authorization",
          label: "Authorization",
        },

        {
          type: "category",
          label: "Useful Links",
          collapsible: false,
          icon: "link",
          items: [
            {
              type: "link",
              label: "SDK Sources",
              to: "https://github.com/sosnaF225z/znu-lab/tree/main/src",
            },
          ],
        },
      ],
    },
    {
      type: "link",
      to: "/api",
      label: "API Reference",
    },
    {
      type: "doc",
      file: "about",
      label: "About",
    },
  ],
  redirects: [{ from: "/", to: "/introduction" }],
  apis: [
    {
      type: "file",
      input: "./apis/openapi.yaml",
      path: "/api",
    },
  ],
};

export default config;
