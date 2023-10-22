	/**  MANIPULATE FILES and DIRECTORIES  **/

/**  CREATE  **/
/// CREATE DIRECTORY
// mkdir
`Create 1 directory`
mkdir directory1
mkdir "directory 1"		/* With space */
mkdir directory\ 1		/* Escape the space char */

`Create many directories`
mkdir directory2 directory3 directory4

`Create nested directories`
mkdir -p directory4/directory5
/* -p  Create parent directory */
=> mkdir directrory4 directory4/directory5

/// CREATE FILE in directory
// touch / type (windows)
`Create 1 ou many files`
/* Linux */
touch file1.txt
touch file2 file3 file4
/* Windows */
type new_file.py	/* Windows */

/// CREATE SHORTCUT
ln -s [project_path] [shortcut_path]
ln -s /opt/lampp/htdocs/projet1 /home/tomtomgt/projet1

/// CREATE DESKTOP SHORTCUT
"https://www.maketecheasier.com/create-desktop-file-linux/"

/**  DELETE  **/
// rm
`Remove file or directory`

/// DELETE DIRECTORY
// rm -r
`-r = "recursive" : To delete the full content of the directory`
rm -r dir2
rm -rf dir2/file5
rm -rf dir2
rm -rf *

/// DELETE FILE
rm file3.txt
rm dir2/file5.txt


/**  MOVE / RENAME  **/
// mv
`Move (and/or rename) file or directory`

/// MOVE 1 FILE
mv file1.txt dir1				/* Move to dir1 (relative path) */
mv file2 /home/vagrant/dir2	/* Move to dir2 (absolute path) */

/// MOVE MANY FILES
mv *.txt dir1
`Move all files ending by « .txt » into directory « dir1 » `
mv dir/fil* .
`Move all files starting by « fil » into current directory`


///RENAME
`Leave it in the same directory`
mv file3 file3.txt		/* RENAME only */

`After the moving, add the new file name`
mv file4 ./dir2/file5	
/* MOVE to « dir2 » and RENAME (relative path) */


/**  COPY  **/
// cp
`Copy File or Directory`

/// Copy Directory 
cp -r dir_to_copy path_to_paste
cp -r dir3 dir2/dir1
`-r = "recursive" : To copy the full content of the directory`

/// Copy File 
cp file_to_copy path_to_paste
cp file3 dir2/dir1

/// Copy and Rename the copy
cp file3 dir2/dir1/file8
cp -r dir3 dir2/dir1/dir8


/**  EDIT  **/
// nano
`Edit a file`
nano hello.txt

// vim
`Edit a file`
vim hello.txt

i => Insert
:w => Write
:wq => Write and Quit


/**  DISPLAY  **/
// cat 
`Display file content`
cat hello.txt

// more
// less
`Display file content, but cut when it's too long and add the option to navigate down or up in the text.
« less » is a new version of « more », 
  => it doest the same but with more options`
less hello.txt


/**   REDIRECTION  **/
`Redirection: Send the result of the command into a file`
command > file_name
command >> file_name
// >
`Create file and overide content`
echo "Hello World" > hello.txt 

// >>
`Create or add content`
echo "Hello World" >> hello.txt 