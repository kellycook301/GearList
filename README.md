
# Hello And Welcome To MyGearList!

![alt text](https://github.com/kellycook301/GearList/blob/master/readmeImages/MGLLogo.png)

With this app you may create a visual representation of the music gear that you have.

Let's get started!

## Launching The App

Let's get the app set up first.

1. Clone the git repository
```
git clone https://github.com/kellycook301/GearList.git
```

2. Install modules in the project's root directory 
```
npm install
```

3. Run the project in the root directory
```
npm start
```

4. Run JSON server within the api directory
```
cd api 
json-server -p 5002 -w MyGearList.json
```

To launch the app simply bring up the login page by going to...
```
http://localhost:3000/login
```
Go ahead and create an account. 

![alt text](https://github.com/kellycook301/GearList/blob/master/readmeImages/NewRegister.png)

Once you create an account you can go ahead and log into your page.
Here you will see your profile. 

![alt text](https://github.com/kellycook301/GearList/blob/master/readmeImages/NewMainPage.png)

At first your gear list will be blank. Let's change that!

## Adding Some Gear
To create your first post click on "Add Gear." 

A form will populate asking you what you would like to add. 

![alt text](https://github.com/kellycook301/GearList/blob/master/readmeImages/NewAdd_Gear.png)

You may select amplifier, pedal, guitar, or speaker cabinet. 

![alt text](https://github.com/kellycook301/GearList/blob/master/readmeImages/NewWhat_Would_You1.png)

Upon clicking one of them you will be asked what KIND of amp, pedal, or guitar you would like to add.

![alt text](https://github.com/kellycook301/GearList/blob/master/readmeImages/NewWhat_Would_You2.png)

(Since there's really only ONE kind of speaker cabinet, an additional window does not open). 

Once you have selected what you are looking to add, you will be asked to fill out some specifics. 

![alt text](https://github.com/kellycook301/GearList/blob/master/readmeImages/NewFeatures.png)

After the fields have been filled out you may save the entry to your gear list!

## Editing A Post
Let's say you have an acoustic guitar listed and you recently had it restrung with some different strings. You may edit the initial post by clicking on the "pencil" icon. Here you may change whatever you need to update. Once you are done you may save the changes. Or if you need not update the post at all, go ahead and click "cancel."

## Deleting A Post
Now let's say you have sold something you have listed in your gear list. You may delete your entry by clicking on the trashcan icon. You will be prompted to confirm its deletion. You may choose at this point to have the post listed or confirm the entry's deletion. If you do have it deleted it will no longer be listed in your gear list.

## Logging Out
Whenever you would like to log out you may click on the logout button in the upper right-hand corner. This will take you back to the login page where you may log in again when you would like!

------

## The Process
Everything below details the process of how the app was created. All in all it was a fun and challenging process. I was thinking of ideas for what to do for my capstone. I remember Brenda (our main instructor for the front-end development class) saying that we should work on something that we enjoy. Because if your project isn't on something you're passionate about, then it becomes more of a chore. I remember browsing for icons on IconScout and found some PNGs of instruments. I then thought about making an app that will show a list of the music gear that you own and these icons could be displayed in cards for each entry. I then drew out how I would want the app to look (see below).

![alt text](https://github.com/kellycook301/GearList/blob/master/App%20Layout%201_final2.JPG)

I knew we'd have to have a login page. I originally wanted to have separate sign in and register cards but the login proved to be quite a challenge, so I condensed it into a single sign in/register card. Fun!

The first day was spent trying to tackle the login portion of the process. I floundered the first day and started to work on the actual app the next day. I wanted to get the basic layout with the "add gear" button on the page. What I really wanted to implement were some forms contained within modals. Thankfully, ReactStrap had just what I needed. Because the instruments all have different criteria, I had to make a LOT of different forms. So there was going to be a lot of data passed in. I started with only a select few kinds of gear but realized I needed more for variety's sake. By the end of the first week I had pretty much met MVP. Data was getting passed in and populated to the DOM in card form. I was very happy. I just wanted to tighten up some of the things.

I ran into some trouble with setting state in some areas. I was trying to figure out a cool way to have it work with the delete function. At first when you clicked on the trashcan icon to delete the post you would be prompted with the "localhost:3000 Would you like to delete this post?" thing and it would delete the post but it would still show it until the page refreshed. I found something to force reload the page, but hated the functionality of it. Because we're using React, it should just update state. I didn't end up fixing that until week three. By the end of week two I had pretty much fully met MVP. The login was working and you could easily edit and delete posts. One of my stretch goals was implementing different users. The following week proved to be very mentally challenging.

During week three I came in to have someone guide me through the process of implementing different users. Meg, a teaching assistant, said it would be easier than I thought. Turns out my project was a little wonky and a LOT of bandaids needed to be placed onto my project to get it up and running the way I wanted. Serious shouts out to Brenda, Jenna, Meg, and Steve for their help and guidance. At one point I thought that I would be presenting my MVP project. Thankfully, it was all working the way I wanted.

One thing I did to fix the force reload of the page was actually implement a delete modal. When you click on the trashcan a modal pops up with a message asking if you want to have the post deleted. You may choose to cancel or delete the post and it updates state. I also have a similar post applied to when you add something to your list. Instead of the "localhost:3000" message popping up, a modal appears confirming the addition of your post. I thought it would just look better that way.

And here we are! All done. Very happy with the project even though there's some small stuff I wanted to have added. Here's a list of the plugins and things I used in my project.

* ReactStrap for modals, buttons, etc.
* MDB React for more color options compared to regular old Bootstrap.
* Iconscout for the instrument and musician icons.
* Canva for the logo
* Gimp (a free photo editing app similar to Photoshop. I used this for editing the logo)
* Fontawesome for the trashcan and pencil icons

Shouts out to...
* Cohort 27 for being awesome!
* Brenda, Meg, Jenna, and Steve for helping with app issues!
* Coffee for keeping me ENERGIZED.
* My family for always believing in me. Thank you thank you thank you!
