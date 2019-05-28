module.exports = {
  apps : [{
    name: 'teachplatform',
    script: './src/index.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      JWTSECRET:'benji'
    },
    env_production: {
      NODE_ENV: 'production',
      JWTSECRET:'benji'
    },
    log_date_format: "JJ-MM-YYYY",
    out_file: "./logs/app-out.log",
    error_file: "./logs/app-err.log",
  }],

  deploy : {
    production : {
      user : 'ubuntu',
      host : 'plus1sec.cn',
      ref  : 'origin/master',
      repo : "git@github.com:Benjaminyuan/teachPlatForm.git",
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
