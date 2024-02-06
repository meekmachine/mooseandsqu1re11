#
# Start script for eEva-HSR
# Author: U. Visser
# Date: 
#

#!/bin/bash

#
# For mongod to run properly, you need to sudo mkdir the directory /usr/local/mongodb-data/db
#
PROCESS=mongod
DUMPDIR=`pwd`/mongodump/mongodump-2020-05-05_13_53/eEvaParse

#
# Checking whether mongod is running, if not, start with nohup, run ./start.sh script twice 
# if mongod and mongorestore don't work after the first run, syncronization problem might occur
#
number=$(ps aux | grep $PROCESS | wc -l)

#
# Check if .mongodb-data directory exists, if not, create it
#
if [ ! -d "$HOME/.mongodb-data" ]; then
  # Control will enter here if $DIRECTORY doesn't exist.
  echo .mongodb-data directory does not exist, creating it now...
  mkdir $HOME/.mongodb-data
fi

if [ $number -gt 1 ] 
	then
    	echo Mongod is running
else
	echo Mongod not running. Starting now...
    sudo nohup mongod --dbpath $HOME/.mongodb-data --bind_ip localhost &>/dev/null &
	cd $DUMPDIR
	mongorestore --drop -d eEvaParse .
fi

#
# These variables are needed for the eEva system to work
#
export SECRET=rc239tv9n32vr327r9379vrh232vu9
export PORT=3013
export EMAIL_NAME=visage.lab.fiu@gmail.com
export EMAIL_pass=None
export DATABASE_URI=mongodb://localhost:27017/eEvaParse
export APP_ID=83fy28yfh238
export MASTER_KEY=4j329432j92
export FILE_KEY=r39if93jg33
export SERVER_URL=http://localhost:3013/parse
export SITE_URL=http://localhost:3013
node --abort-on-uncaught-exception bin/www
