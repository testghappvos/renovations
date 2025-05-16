module.exports = {
  extends: ["config:recommended"],
  packageRules: [
    {
      matchCategories: ["docker"],
      enabled: true
    },
    {
      matchDatasources: ["docker"],
      matchPackageNames: ["php"],
      matchFileNames: ["Dockerfile"],
      enabled: true
    }
  ],
  docker: {
    // Any docker manager-specific config goes here
    managerFilePatterns: ["^Dockerfile$"]
  }
};
