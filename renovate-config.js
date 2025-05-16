module.exports = {
  extends: [
    'config:base' // Inherits Renovate's recommended default configurations
  ],
  // The following rule ensures that your Dockerfile at the root is processed.
  // While 'config:base' often covers Dockerfiles by default,
  // being explicit can be helpful for clarity and future customizations.
  packageRules: [
    {
      matchFileNames: ['Dockerfile'], // Targets the Dockerfile at the root of your repository
      matchManagers: ['dockerfile'],  // Specifies that this rule applies to Dockerfiles
    }
  ]
};
