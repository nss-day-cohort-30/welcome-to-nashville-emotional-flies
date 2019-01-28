# Welcome to Nashville: Emotional Flies 

In this app users can search for four different things to do/visit in Nashville:
* Parks
* Restaurants
* Meetups
* Concerts

When the user searches for any of the four categories of things to do, the results will be listed. 
The user then has the option of saving the item to the current itinerary. 


## How to download and run the app


### Node
Visit the [Node.js](https://www.nodejs.org/) site and install the LTS release.

### Node Packages
Now that you have Node installed, you can install some open source software that you will need in the course.

sudo npm i -g http-server


### Create SSH key
SSH is a technology that allows you to create a very secure connection between your computer, and a computer located somewhere else in the world. It's an acronym for Secure SHell. When you create an SSH key on your computer, it actually creates two files

A public key file that you share with other people and computers. It is usually named id_rsa.pub.
A private key file that you never, ever, ever, ever, ever share with anyone. It is usually named id_rsa.

Follow the [Github instructions](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/#platform-mac) for creating a new SSH key, and providing your public key to Github, so that you can establish a secure connection between your computer and Github's computers.


## Clone the project to your computer

1. In your terminal, when you're in the directory you'd like the project in, paste the following:
(This may requre your passcode)

git clone git@github.com:nss-day-cohort-30/welcome-to-nashville-emotional-flies.git

2. Enter into the directory just created ("welcome-to-nashville-emotional-flies)

3. Start your local server and open the app in your browser using the command:

http-server -o


