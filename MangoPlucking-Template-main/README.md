# Mango Plucking Game
Mango Plucking Game


Step 1 : create the boy and tree sprites.
Step 2 : load and add the images.
Step 3 : create the mango class with x and y position as parameters in constructor and add the image to it.
Step 4 : create multiple mango objects and place it at different positions in the tree.
Step 5 : create stone class and add image to it
Step 6 : create the sling class with bodyA to be Stone and pointB to be boy's hand point
Step 7 : use the mouse Dragged function to set the position of the stone with the mouseX and mouseY
Step 8 : use the mouse Released function to make the stone fly by using fly(), make the bodyA to be null
Step 9 : Use the detect collision method to detect the collision between all the mangoes and stone
Step 10 : If a collision is detected, use Matter.Body.setStatic to be false.
Step 11 : Add keyPressed function for the keyCode 32, so that the stone is attached to the sling again(use setPosition)