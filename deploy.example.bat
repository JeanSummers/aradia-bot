@ECHO OFF

if "%1"=="local" (
    set BOT_TOKEN=<DEV_BOT_TOKEN>
    set BOT_PROXY=<PROXY_URL>
    npm run dev
) 

if "%1"=="now" (
    now -e BOT_TOKEN="<PROD_BOT_TOKEN>"
)