		/** MANIPULATE RIGHTS **/

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