const execSync = require('child_process').execSync

process.env.VUE_APP_GIT_VERSION = execSync('git rev-parse --short HEAD')
