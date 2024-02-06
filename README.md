# eEva install guide


**Author**: Ubbo Visser

This is a CLI installation guide for the necessary dependencies to start local development on the current eEvaParseHSR repository.

The requirements of the chosen PC are as follows:
- Ubuntu 20.04 Linux OS
- MacOS 11 or above
- Windows 10 or above

The current instructions are for any platform, the CLI are based on a MacOS/Linux installation though. You may need to convert some instructions for your platform, especially for Windows where the MongoDb installation is a little different. You should use a terminal to run the following commands.

## Install [Brew](https://brew.sh/)
Use a package manager such as 'apt' (Linux) or 'brew' (MacOS) for easy installation. We use brew here. 

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

## Install [MongoDB](https://www.mongodb.com/try/download/community)
You need an instance of the MongoDB. We recommend to use the MongoDB Community Server

```
brew tap mongodb/brew
brew update
brew install mongodb
mkdir ~/.mongodb-data
```

## Install [Node](https://code.visualstudio.com/)
You need a specific version of Node: node 14.17.0 will work, node 19 and above will throw errors. Node 14.21.3 will also work.

```
brew install node
brew install nvm
mkdir ~/.nvm
```

Run the following commands and add them to your start script (~/.bashrc or ~/.zshrc):

```
export NVM_DIR="$HOME/.nvm"
[ -s "/usr/local/opt/nvm/nvm.sh" ] && \. "/usr/local/opt/nvm/nvm.sh"
[ -s "/usr/local/opt/nvm/etc/bash_completion" ] && \. "/usr/local/opt/nvm/etc/bash_completion"
```

Source your terminal to reflect the changes

MacOS:
```
source ~/.zshrc
```

Linux:
```
source ~/.bashrc
```

Install and use version 14.17.0 or 14.21.3
```
nvm install 14.17.0 && nvm use 14.17.0
```

## Install [Chrome](https://www.google.com/chrome/us/download-chrome/?brand=QMKX&geo=US&gclid=CjwKCAiAjrarBhAWEiwA2qWdCDML-7J1u2D2a0Gwomu8YXXlVN77AR7N0gZ8SfCjGf92k_SD6tnNuxoCh6cQAvD_BwE&gclsrc=aw.ds)

We recommend using the Google browser because some of the features of this framework need this browser. However, the newest version of Chrome does not allow certain features, such as accessing the microphone in certain cases. This is why we have to start Chrome with a specific flag, the *--autoplay-policy=no-user-gesture-required* flag. We wrote a script for MacOS that can be used.

Copy/paste the following code into a script *chrome.sh* that you have in ypur $PATH. 
```
#!/bin/bash
pkill Google\ Chrome
sleep 1
open -a Google\ Chrome.app 'http://localhost:3013/#!/robocanes' --args --autoplay-policy=no-user-gesture-required
```
Make the script executable with
```
chmod +x chrome.sh
```
Then run the script ```chrome.sh```. Chrome opens up and waits for the service to start.

## Run eEvaParseHSR

Make sure you are in the eEVAParseHSR project root, then invoke the program with

```
./start.sh
```

eEVAParseHSR will start in the browser.

----------------------

## Installation on Windows 
The only difference in the installation script is the installation of MongoDB. We recommend installing the [MongoDB Community Edition](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-7.0.5-signed.msi) and the [MongoDB Database Tools](https://fastdl.mongodb.org/tools/db/mongodb-database-tools-windows-x86_64-100.9.4.zip). You need to start the mongodb locally and then restore a mongodb dump with the help of the MongoDB Tools:

```
cd into .\eEVAParseHSR\mongodump\mongodump-2020-05-05_13_53\eEvaParse
mongorestore.exe --drop -d eEvaParse .
```
Make sure ```mongorestore``` is in your PATH, otherwise you need to add the full path to the binary.

----------------------

## Goodies (Optional)
We recommend to install common and very useful addtional software packages

### Install [Terminator](https://gnome-terminator.org/)
```
sudo add-apt-repository ppa:gnome-terminator
sudo apt-get update
sudo apt-get install -y terminator 
```

### Install [Visual Studio (VS) Code](https://code.visualstudio.com/)

For MacOS
1. Go to link, downlaod, and install: https://code.visualstudio.com/

For Linux (Debian-based OS)
1. Download `.deb` file from VS code [homepage](https://code.visualstudio.com/).
2. Install `.deb` file.
```
sudo dpkg -i [name_of_install_file].deb
```


### Install Fuzzy Finder
```
git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
~/.fzf/install
```

## Explantion of the project structure

Welcome to this massiveness of a project. Here writing this is Guido Ruiz, a Masters student in charge of the creation and
maintenance of the eEva node.js website. In this file, I will be explaining the structure and choices we made to help
you get acquainted with the source code. Good luck!

### ROOT FOLDER

- [ bin ]
- [ client ]
- [ data ]
- [ mongodump ]
- [ node_modules ]
- [ public ]
- [ server ]
- app.js
- gulp.js
- package.json


### [ bin ]

This folder contains a file that has all the necessary parameters for a barebones node.js server to start. It needs a
port, functions to call when it is listening or when there is an error, etc. This file should NEVER be touched unless
you know exactly what you are doing. If you're having problems with the port number being taken, you can change eEva's
port number by adding an environmental variable named PORT = <your_port_number_here>. For example, PORT = 3001. You can
also change it manually in the www file found within the bin folder, but I advise against it.


### [ client ]

This folder contains all the angular logic for the website. The angular site has controllers, services, modules, routes,
and other things related to angular. Note that this folder is essentially the environment that the user is interacting
with. The angular environment then interacts with the server. Thus: user <--> angular (client) <--> express (server).
If you are looking to modify a controller for an HTML page, then this is where you need to go. However, do not edit
anything here if you want to edit actual HTML or if you are looking to change the server logic.

### [ data ]

The virtual counselor uses a mainframe created by Mihai that requires a specific formatted file called a road map. This
road map essentially tells it what the character needs to do and what functions need to be called within the mainframe
for an intervention to work. The data folder contains some of these primitive functions that are static. DO NOT MODIFY
ANYTHING WITHIN THIS FOLDER unless you know what you are doing. This folder merely contains constants and other static
code that is needed by the virtual character and is added to the road map when the map is requested by the browser.

### [ mongodump ]

We work locally, therefore, when a state machine is modified, you modify the state machine in your local computer. We
keep backups of the database in here for this exact purpose and also for security reasons in case all that hard work
that went into making those beautiful state machines gets erased due to some inconvenient server logic. Make a habit of
adding a new dump of your database if you want in here with the proper naming convention in case for some reason the
server completely breaks to have something to restore.

### [ node_modules ]

Sometimes Angular 2 doesn't work with some other library version 3, but it works with version 2, etc. We can't be
bothered to keep track of these things. One benefit of node is the npm manager, which is essentially the App Store of
javascript libraries. Each time you do npm install <package> --save, you add this package to this folder and it
automatically makes sure it is compatible with all your other libraries, downgrading or upgrading as needed. Therefore,
you either download a javascript from the website and drag it into your public js folder, or you use npm and do the
same. By the way, npm stands for node package manager.

### [ public ]

Everything in this folder is accessible through the internet. In fact, it is the ONLY folder that is accessible through
GET requests (not specifically specifying a route, like done on the express routes). Therefore, in this folder lie all
the HTML, CSS, JS, mainframe logic, etc that must be given to the user to actually use the site. Now, you might be
thinking, if this is the only folder that the user has access to, how does the site work without the client folder that
has all the angular logic? Please visit gulp.js below for more information.

### [ server ]

We started the node server with the www file under bin, but in server lies the actual configurations that happen before
you start the server. That is, what to do when a route is reached throughout an HTTP request, what modules to load, etc.
This is all done within app.js (see below), but app.js uses files that are stored in here to make it clear that files
within this folder are server related. More specifically, there's a models, modules, and routes folder. The route folder
lets the node server know what to do when a usser sends a request to a particular url, say, http://localhost:<port>/api.
The models folder contains routes specific to a database collection, that is, these routes modify the mongodb server.
Finally, the modules folder is tightly knit code (helper functions) used within the routes.

### app.js

The infamous root settings of the node server. Think of it like this: www start up the server and asks app.js for the
configurations and routes, then app.js asks the files within the server for specific routes and helper functions.
Within this file lie the basic routes and the route that provides the public folder

### gulp.js

This is a task that runs every time a change is noticed on the client folder. What does it do? It compiles all the
controllers, services, etc into one file within the public folder: app.min.js. It is all mangled and minified for
production use. In other words, think of the client folder as the ingredients, the gulp as the oven, and the app.min.js
the final cake to show the users.

### package.json

Very simple file. Each time you npm install <package> --save, you add a new line to this json. This makes it so that
when you are starting this eEva environment setup, you can simply npm install package.json to install all the packages
ever installed on eEva in one command. Helpful when moving to another PC or when a new user wants to contribute and can
download all the npm packages we've used quickly
# mooseandsqu1re11
