# Start up jbot

# Define Colors
RESET='\033[0m'
BCYAN='\033[0;96m'
GREEN='\033[0;32m'

echo -e "Starting up ${BCYAN}jbot ${RESET}requires to operate. This may take a few minutes."



cd /home/jbot
wait
source ~/.nvm/nvm.sh
wait
screen -S jbot bash -c "cd /home/jbot; node deploy-commands.js; node .; exec bash"
wait
echo -e "${GREEN}Required packages installed. ${RESET} Use 'screen -r jbot' to connect to the jbot session."
screen -r jbot