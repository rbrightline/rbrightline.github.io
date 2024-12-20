module.exports = {
  apps: [
    {
      name: 'Brightline Software', // Application name
      script: './dist/apps/api/src/main.js', // Script to execute
      instances: 'max', // Number of instances (max = CPU cores)
      exec_mode: 'cluster', // Cluster or fork mode
      watch: true, // Watch file changes for automatic restart,
            env: {
        NODE_ENV: 'development',

        APP_NAME: 'RBL development ',
        APP_DESCRIPTION: 'RBL development ',
        VERSION: '0.0.1',

        DOMAIN: 'localhost',
        PREFIX: 'api',
        PORT: 3000,

        DB_NAME: 'testdb',
        DB_USERNAME: 'testuser',
        DB_PASSWORD: 'password',
      },

      env_production: {
        NODE_ENV: 'production',

        APP_NAME: 'RBL production',
        APP_DESCRIPTION: 'RBL production',
        VERSION: '0.0.1',

        DOMAIN: 'localhost',
        PREFIX: 'api',
        PORT: 3001,

        DB_NAME: 'testdb',
        DB_USERNAME: 'testuser',
        DB_PASSWORD: 'password',
      },
    },
  ],
};
