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