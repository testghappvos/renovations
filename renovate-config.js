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
  managers: {
    docker: {
      managerFilePatterns: ["^Dockerfile$"]
    }
  }
};
