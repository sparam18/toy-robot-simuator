# toy-robot-simuator

A JavaScript Toy Robot Simulator which can take commands in .txt file and execute them. The Robot can execute the below commands

- **PLACE X, Y, DIRECTION (PLACE 0,0,NORTH):** Place the robot on the table.
- **MOVE:** Move the robot one unit in the direction it is facing
- **LEFT:** Turn the robot left
- **RIGHT:** Turn the robot right
- **REPORT:** Report the current position and direction of the robot (0,0,NORTH)

## Environment Requirements
Node > 4 and npm

## Installation  & usage

The robot can be installed globally or locally. 
**Global**
This will add ```robot``` to your path.  
```sh
$ npm install -g
$ robot commands.txt
$ robot help
```
**Local**

If you install it locally, you can use it within the directory via ```npm start``` or ```node```.
```sh
$ npm install
$ npm start -- commands.txt
$ node ./bin/ToyRobot.js commands.txt
```

## Testing
```sh
npm test
```
