		/**  Scripting  **/

// Imperative

// Declarative


/**  Vagrant  **/
`Create init file << Vagrantfile>> ` 
Vagrant init

/// Vagrant box
`Image of a VM with a specific OS installed`

// Start VM
Vagrant up
`=>Check if a box is installed
	if not	=> Download the box
			=> Install the box
=> Start the machine`

// Destroy VM
vagrant destroy


/// BASIC COMMANDS
// pwd
`Show the current position of the console`

// ls
`List of files and directory`

ls -l (or ll)
`List with details`

ls -a
`Show hidden files ade directory`

ls -la 
`ls -l + ls -a = ls -la`

// help
`Simple Documentation of a command`


// man
`Complete Documentation of a command`

// q
quit the processus

// clear (or ctrl+L)
`Clear Console` 

// mkdir
`Create 1 ou many repositories`
mkdir directory1
mkdir directory2 directory3 directory4
mkdir directrory4 directory4/directory5
 => mkdir -p directory4/directory5
 /* -p  Create parent directory */

// touch
`Create 1 ou many files`
touch file1.txt
touch file2 file3 file4

// mv
`Move (and/or rename) file or directory`
mv file1.txt m1				/* Move to m1 (relative path) */
mv file2 /home/vagrant/m2	/* Move to m2 (absolute path) */
mv file3 ./m2/file3.txt		/* Move to m2 and Rename (relative path) */


// cp
`Copy file or directory`
cp m3 

// rm
`Remove file or directory`
rm -rf m2
rm -rf *

// echo
echo "Hello World"
echo "Hello World" > hello.txt /* Create and overide */
echo "Hello World" >> hello.txt /* Create and overide */

// cat 
`Display file content`
cat hello.txt

// nano
`Edit a file`
nano hello.txt

// vim
`Edit a file`
vim hello.txt

i => Insert
:w => Write
:wq => Write and Quit

// curl
`Browser` 
curl localhost
curl "http://localhost/"

// sudo su
`Super User mode`

exit (ou ctrl+d)
`Exit Super User mode`

// echo $0
`show the shell used`

// cat /etc/shells
`List of shells available` 

// Set the bash by default

// history


// tree

// whoami
`Show the username`

/** RIGHTS **/
-rw-rw-r-- 1 vagrant vagrant 148 Oct 20 12:22 luser-demo01.sh
-	=> fichier
rw-	=> User
rw-	=> Group
r--	=> Others

r	=> 4	=> Read
w	=> 2	=> Write
x	=> 1	=> Execute

/// CHANGE RIGHTS
// chmod
chmod 754 luser-demo01.sh
7 = 4+2+1	=> rwx
5 = 4+1 	=> rx
4 = 4 		=> r