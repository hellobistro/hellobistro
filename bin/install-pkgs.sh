#!/bin/bash
sudo cp -a /home/ubuntu/config/ /home/ubuntu/hellobistro/config
cd /home/ubuntu/hellobistro
sudo npm install
cd /home/ubuntu/hellobistro/client
sudo npm install
sudo npm run prod
echo "install complete"