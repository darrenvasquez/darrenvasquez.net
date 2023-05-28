# Personal Website
Last Updated May 27, 2023

Visible at [darrenvasquez.net](https://darrenvasquez.net)

## How to run

```sh
> cd website
> npm i 
> npm start
```

## How to prepare a new website build

There's probably an easier way to do this, but I don't care to learn how :))

```shell
# in the root directory
> npm run-script build
# then remove the ./static/ folder entirely
# then remove the precache-manifest\..*\.js file
# then copy all contents from ./website/build/ into root directory.
git commit -a -m "Your Commmit Message Here"
git push
```