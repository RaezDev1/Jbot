# Install jbot

# Define Colors
RESET='\033[0m'
BCYAN='\033[0;96m'
GREEN='\033[0;32m'

echo -e "Installing packages ${BCYAN}jbot ${RESET}requires to operate. This may take a few minutes."

sleep 2

apt update
wait
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
wait
source ~/.nvm/nvm.sh
wait
nvm install 18
wait
cd /home/jbot && npm install
wait
screen -dmS jbot bash -c "cd /home/jbot; node deploy-commands.js; node .; exec bash"
wait
echo -e "${GREEN}Required packages installed. ${RESET} Use 'screen -r jbot' to connect to the jbot session."
screen -r jbot