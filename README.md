# longman-to-anki-local

Deprecated. Ldoceonline have made a big redesign, so cards created by this program will be broken.

The same functionality is available in [longman-to-anki-web](https://github.com/yakhinvadim/longman-to-anki-web)

## What is it?
**longman-to-anki-local** is command line tool to help you learn English words. Type the words you want to learn in words.txt, run the program and get the file with a list of flash cards for these words. File is ready to import by [Anki](http://ankisrs.net/) - most popular flash cards software.

## Install

1. Download and install the latest version of [Git](https://git-scm.com/) and [Node.js](https://nodejs.org/en/).
2. Run in terminal:
```
# Clone this repository
git clone https://github.com/yakhinvadim/longman-to-anki-local.git
# Go into the repository
cd longman-to-anki-local
# Install dependencies
npm install
```

## Use

1. Open `words.txt`, type the words you want to learn separated by comma:
```
cat, dog, mouse
```
2. Run in terminal:
```
npm start
```
Now in current folder should appear `result.txt` with all the flash cards for your words.
3. Import `result.txt` with Anki.

Select import from main screen

![Select import from main screen](https://raw.githubusercontent.com/yakhinvadim/longman-to-anki-local/master/images/1.png)

Choose result.txt from you file system

![Choose result.txt from you file system](https://raw.githubusercontent.com/yakhinvadim/longman-to-anki-local/master/images/2.png)

Set up import options. Outlined options are requred for correct import!

![Set up import options. Outlined options are important for correct import!](https://raw.githubusercontent.com/yakhinvadim/longman-to-anki-local/master/images/3.png)

You should see the number of imported notes

![You should see the number of imported notes](https://raw.githubusercontent.com/yakhinvadim/longman-to-anki-local/master/images/4.png)

Learn English like a pro

![Learn English like a pro](https://raw.githubusercontent.com/yakhinvadim/longman-to-anki-local/master/images/5.png)

## Have questions? 
You can create an [issue](https://github.com/yakhinvadim/longman-to-anki-local/issues/new), or write me on [Twitter] (https://mobile.twitter.com/yakhinvadim) 
