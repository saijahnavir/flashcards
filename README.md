
# Flashcards

- An application which allows users to add flashcards for study references. 
- Clicking the 'add card' button on the widget page will display a pop-up that will read the data, and display it on the screen. 
- If the flashcard has an error, there's no worry! users can always delete and add another flashcard with correct details.


## Tech Stack

**Client:** React, CSS

**Server:** Node, Express, MySQL


## Steps to run

Clone the repository / download the zip file. 

**To run it locally :**
In a new terminal, do

```bash
  cd flashcards
  npm start
```
In another terminal, do

```bash
  cd server
  npm init
  npm run dev
```
**NOTE :**

- Make sure you have MySQL installed in your system. If not, install it from [here](https://dev.mysql.com/downloads/installer/)
- next, in the server-side index.js file, add your root user password of MySQL in the following piece of code.

```bash
  const db=mysql.createConnection({
    host     :"localhost",
    user     :"root",
    password : "[Your_root_password]",
    database : "cruddb",
    port     : 3306
});
```


