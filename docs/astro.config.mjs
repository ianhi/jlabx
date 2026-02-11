import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  site: "https://ianhi.github.io",
  base: "/jlabx",
  integrations: [
    starlight({
      title: "jlabx",
      customCss: ["./src/styles/custom.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ianhi/jlabx",
        },
      ],
      editLink: {
        baseUrl: "https://github.com/ianhi/jlabx/edit/main/docs/",
      },
      sidebar: [
        { label: "Getting Started", slug: "getting-started" },
        { label: "Usage", slug: "usage" },
        { label: "Configuration", slug: "config" },
        { label: "Environments", slug: "environments" },
        { label: "Requirements", slug: "requirements" },
      ],
    }),
  ],
});
