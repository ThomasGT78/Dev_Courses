		/**  Scripting  **/

// Imperative
???
// Declarative
???

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

