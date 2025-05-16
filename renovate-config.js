module.exports = {
  extends: [
    "config:base"
  ],
  docker: {
    enabled: true
  },
  packageRules: [
    {
      matchDatasources: ["docker"],
      matchPackageNames: ["php"],
      matchPaths: ["Dockerfile"],
      enabled: true,
      // Customize schedule, groupName, etc. as needed
    }
  ],
  // Optional: Restrict Renovate to only the root Dockerfile
  fileMatch: ["^Dockerfile$"]
};
