const fs = require('fs');
const path = require('path');

const logMessage = process.argv.slice(2).join(' ');

if (!logMessage) {
  console.error('❌ Please provide a log message as a command-line argument.');
  process.exit(1);
}

const now = new Date();
const timestamp = now.toISOString().replace('T', ' ').substring(0, 19);
const formattedLog = `[${timestamp}] - ${logMessage}\n`;

const logFilePath = path.join(__dirname, 'app.log');

fs.appendFile(logFilePath, formattedLog, (err) => {
  if (err) {
    console.error('❌ Failed to write to log file:', err.message);
  } else {
    console.log('✅ Log written successfully to app.log');
  }
});
