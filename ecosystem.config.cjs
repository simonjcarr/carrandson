module.exports = {
    apps: [
        {
            name: 'CarrandSon',
            port: '3000',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs'
        }
    ],
    deploy: {
        // "production" is the environment name
        production: {
            user: 'simon',
            host: ['65.21.242.43'],
            ref: 'origin/main',
            repo: 'git@github.com:simonjcarr/carrandson.git',
            ssh_options: ['/home/simon/.ssh/id_ed25519'],
            path: '/home/simon/apps/carrandson',
            'post-deploy': 'npm install && npm build && pm2 startOrRestart ecosystem.config.js --env production'
        }
    }
}