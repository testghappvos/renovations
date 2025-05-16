module.exports = {
  extends: ['config:base'],
  docker: {
    enabled: true
  },
  packageRules: [
    {
      matchDatasources: ['docker'],
      matchPackageNames: ['php'],
      groupName: 'PHP Docker base image'
    }
  ],
  dockerfile: {
    fileMatch: ['^Dockerfile$']
  },
  schedule: ['weekly'],
  timezone: 'UTC'
};
