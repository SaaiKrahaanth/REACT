# Simple File Logger - Node.js Assignment

## Description
This is a basic Node.js application that logs user-provided messages to a file (`app.log`) with a timestamp.

## Features
- Asynchronously appends logs to `app.log`
- Formats log entries as: `[YYYY-MM-DD HH:MM:SS] - Log message`
- Uses only core Node.js modules (`fs` and `path`)
- Handles errors gracefully and confirms successful writes

## How to Run

### 1. Open a terminal and navigate to the directory.

### 2. Run the script using Node.js:

```bash
node fileLogger.js "This is a sample log message"
```

### 3. Check the `app.log` file in the same directory for the logged message.

## Example Log Output

```
[2025-06-30 13:05:21] - This is a sample log message
```

## Assumptions
- The script is run using Node.js on a local machine.
- No external libraries are used.

## Author
Saai Krahaanth S JA  
