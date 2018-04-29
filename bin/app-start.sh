#!/bin/bash
cd /home/ubuntu/hellobistro/server
pm2 start app.js
cd /home/ubuntu/hellobistro/client/server
pm2 start app.js
echo "servers booted"