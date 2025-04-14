/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: "doc",
      id: "quick-start/getting-started",
      label: "Quick Start Guide",
    },
    {
      type: "category",
      label: "Installation",
      items: ["installation/dependencies"],
    },
    {
      type: "category",
      label: "Setups",
      items: [
        "setups/prerequisites",
        "setups/hadoop",
        "setups/spark",
        "setups/aws",
        "setups/additional-setup",
      ],
    },
    {
      type: "category",
      label: "Operations",
      items: ["operations/service-management"],
    },
    {
      type: "category",
      label: "Troubleshooting",
      items: ["troubleshooting/common-issues"],
    },
  ],
};

module.exports = sidebars;
