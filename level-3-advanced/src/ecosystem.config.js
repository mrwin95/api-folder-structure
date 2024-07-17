module.exports = {
  apps: [
    {
      name: "app1",
      script: "index.js",
      env_production: {
        NODE_ENV: "",
      },
      env_development: {
        NODE_ENV: "development",
      },
    },
  ],
};
