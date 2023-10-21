	/** Scripting  **/

// Create file
touch luser-demo01.sh

// Define the shell we use
#!/bin/bash

// Display Hello
echo "Hello"

// Create Variable
WORD='World'

// Display the variable
echo "$WORD"
echo "Hello ${WORD}"
`Both are working the same way`

/// CONDITION
if [["${UID}" - eq 0]]
then
    echo 'You are root'
else
    echo 'You NOT are root'
fi

/**  MANIPULATE USER  **/
/// INPUTS
read -p "Enter your username: " USERNAME
> Enter your username: TomtomGT
echo $USERNAME // return: TomtomGT

/// Create User
sudo useradd -m Tom
sudo useradd -c "${COMMENT}" -m "${USERNAME}"

-m	/* Create home folder for the new user */
-c	/* Description */

/// DELETE USER
sudo userdel -r Tom

/// PASSWORD
echo "${USERNAME}:${PASSWORD}" | chpasswd