# meteor-leaderboard
Sample Meteor application (Leaderboard) as desribed in http://meteortips.com

## Installation
Install Meteor: https://www.meteor.com/install

Then clone this project:
```
git clone https://github.com/gapperdan/meteor-leaderboard.git
```


## Usage
##### To run the application
```
meteor run
```
Point your browser to http://localhost:3000

Click *Sign in*

Click *Create account* (any email and password will do - this is just a local account)

##### To reset data
```
meteor reset
```

#### Other useful meteor commands
```
# create meteor project
meteor create <project name>

# add package for managing account registration in the backend
meteor add accounts-password

# add package for account registration ui
meteor add accounts-ui

# prevent updating of data thru the web console
meteor remove insecure

# deploy app to meteor.com (must be a unique name!)
meteor deploy <application name>.meteor.com
# example
meteor deploy my-app-1.meteor.com

# undeploy app from meteor.com
meteor deploy --delete

# help
meteor --help

# help on any command
meteor help <command>
# example
meteor help deploy
```
