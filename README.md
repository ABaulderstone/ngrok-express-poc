# Purpose

This is the bare bones you'll need for testing a webhook. It exposes an extremely lightweight express server to the web through ngrok.

## Instructions

1. Make sure server is running with `npm run start`
2. **In another terminal window** run `npm run tunnel`
3. Send requests to the ngrok url that is logged to the console as if they were going to localhost
4. Go do webhook things
