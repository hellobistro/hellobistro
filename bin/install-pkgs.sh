#!/bin/bash
pm2 stop all
cd /home/ubuntu/hellobistro
sudo npm install
cd /home/ubuntu/hellobistro/client
sudo npm install
sudo npm run prod
echo "install complete"