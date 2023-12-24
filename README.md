# My Lego Build

![AM I Responsive images](#)

### [Live Website](#)

A community wesite to share your Lego builds.  
Share your newest Lego set or custom build with the community. Other users can easily identify the Lego Set, like and comment on the post. With an easy process to signup and start adding posts of your own.


## Table of Contents
2
  3
    4
1. [User Experience (UX)](#user-experience-ux)
    1. [Strategy](#strategy)
        1. [Project Goals](#project-goals)
        2. [User Goals](#user-goals)
        3. [Starting Board](#starting-board)
    2. [Structure](#structure)
        1. [Database Model](#database-model)
        2. [Wireframes](#wireframe)
2. [Features](#features)
    1. [Nav Bar](#the-nav-bar)
    2. [Home Page](#home-page)
    3. [Event Details Page](#event-details-page)
3. [Features Left to Implement](#features-left-to-implement)
4. [Testing](#testing)
  1. [Testing](#testing)
4. [Credits](#credits)

***


## User Experience (UX)

### Strategy

#### Project Goals

* The website is built using a simple colour palate to both match Lego's aesthetic and for a modern and clean design.

* Responsive design to make the website accessible on different screen sizes and devices.

* The Website Structure is easy to understand and navigates smoothly.

* Site users are able to register an account to unlock ways to interact with the content.

* Site users are able to post their Lego Builds and comment on other builds, Follow, Like and Search for builds.


#### User Goals
GitHub projects was used as my project management tool to track user stories. Using a Kanban board helped to focus on specific tasks and track the project progress. I used lables on the stories to priority of the feature.

[Features/Planning Board](https://github.com/users/EMarnus/projects/5)  

#### Starting Board
![Starting Planning Board](readme_assets/Starting%20Board.PNG) 


### Structure


#### Database Model

The database models were designed using [drawsql](https://drawsql.app/), based on the models used by the Moments Porject. The type of database being used for the is a relational database being managed using [PostgreSQL](https://www.postgresql.org/) and hosted on [ElephantSQL](https://www.elephantsql.com/).

#### Model Diagram
![Data Model](readme_assets/model.PNG)  

#### Wireframes

Page | Desktop Version | Mobile Version
--- | --- | ---
Index / User Logged Out | ![Desktop index / user logged out wireframe image](assets/readme/outindex.png) | ![Mobile index / user logged out wireframe image](assets/readme/outindexm.png)
Index / User Logged In | ![Desktop sign up wireframe image](assets/readme/inindex.png) | ![Mobile sign up wireframe image](assets/readme/inindexm.png)
Sign Up | ![Desktop log in wireframe image](assets/readme/register.png) | 
Profile | ![Desktop index / user logged in wireframe image](assets/readme/profile.png) | 

### Features 

#### The Nav Bar

  - Featured at the top of the page, bracketed by the site name on the left and the nav links on the right.
  - If you're not logged in you see, A home link, A sign in link and the sign up link.  
    ![Logged out Nav](assets/readme/outnav.PNG)
  - If you are logged in you see, A Home link that show all the events with some detals, Add Events which lets you add events, and a User dropdown which lets you logout and view your profile(To be expanded)  
  ![Logged in Nav](assets/readme/innav.PNG)

#### Home Page

  - This section is the main focus of the website(for now). Here you see all the Events that have been posted by users with some detail.
  - As a logged in user you can view more details on the Events or if you posted the Event you can access the Edit and Delete functions from here.  
  ![Logged in Index](assets/readme/inindexbody.PNG)  

  - As a logged out user you can only see the Event panels.
  ![Logged out Index](assets/readme/outindexbody.PNG)

#### Event Details Page  

- In the first section you can see all the details for the events.
![Details secion one](assets/readme/detialsone.PNG)
- In the second section you can mark yourself as attanding the event, see previous comments and leave a comment of your own.
![Details secion one](assets/readme/detailstwo.PNG)  


### Features Left to Implement

- 
## Testing 

Ongoing testing on Chrome as features were added. Additional Testing was done desktop Edge, Firefox & Mobile Chrome. Manual testing was done following this checklist [Checklist](https://docs.google.com/spreadsheets/d/1UXtTze1940aCpoY0gpDi4OD64AhHgHELo6on6-MYtAA/edit?usp=sharing).

### Validator Testing 

- HTML - [W3C validator](https://validator.w3.org/)
    - Pages tested on W3C, all issues raise were fixed
- CSS - [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator)
    - CSS tested and no problems found, Majority of styling from Bootstrap
- Python code was checked by running pycodestyle and pylint on all the apps. Unable to resolve pycodestyle on migration files.

### Lighthouse Resualts
- Login  
![Login](/assets/readme/lighthouse_login.PNG)

- Register  
![Register](/assets/readme/lighthouse_register.PNG)

- Home  
![Home](/assets/readme/lighthouse_home.PNG)

- Profile  
![Profile](/assets/readme/lighthouse_profile.PNG)

- Add Event  
![Add Event 1](/assets/readme/lighthouse_booking1.PNG)  
![Add Event 2](/assets/readme/lighthouse_booking2.PNG)


### Fixed Bugs
- Search Broken [Fix Commit](https://github.com/EMarnus/Lego-Builds/commit/c8ff1f7e0cf9eacb12bc68c2870372991eed9422)
- Login Status occasionaly lost with page loading
- 


## Deployment

- The site was deployed using Heroku following instructions from Code Institute for deploying a combined API and React Frontend: 
  - In heroku Create a new App
  - In your new App go to settings and reveal Config Vars, add your variables from env.py as well as PORT: 8000
  - Make sure your repo contains a Procfile
  - Go to Deploy, select GitHub as the Deployment method, Deploy Branch from Main.


## Credits 
- Project is based on the Moments walkthrough Project by Code Institute.
- Logo sourced from [Logo](https://www.freepnglogos.com/images/lego-png-logo-3370.html)
- And as always Stack Overflow, just an awesome site where you can find all the answers especially the ones you weren't looking for.

### Content 
- Content written by developer, unless otherwise credited
- Logo sourced from [Logo](https://www.freepnglogos.com/images/lego-png-logo-3370.html)