
///git status
`Voir les infos git (permet aussi de voir si un .git existe)`

/// git log
"https://git-scm.com/docs/git-log"
/* 
Donne l'historique complet de votre branche 
Le hash est présent à côté du mot-clé "commit" 
*/


/// git reflog
/* 
See a list of every thing you've done in git, across all branches! 
Each one has an index HEAD@{index}
*/

/// git status
/* voir les infos git (permet aussi de voir si un .git existe)
*/

/**  Navigate through versions  **/
// Naviguer sur les versions du projet dans l'historique
git checkout 4e1b9637427c686274c511f0b44b915b4f4651a3
git checkout master	// revient sur la dernière version


		/** PERSONALISATION **/
		
/// git log --oneline
/* print a single commit in a single line as output */

/// git log --date
"https://stackoverflow.com/questions/7853332/how-to-change-git-log-date-formats"

--date=human /* Sun 20:07 */
--date=(relative|local|default|iso|iso-strict|rfc|short|raw)
--date=format:'%Y-%m-%d %H:%M:%S' 

/// git log --pretty
/* Format the output of the log */
"https://git-scm.com/docs/pretty-formats"
"https://git-scm.com/book/en/v2/Git-Basics-Viewing-the-Commit-History"

/// Configuration d'un format

// Exemple mylog (Optimiser à mon goût)
git config --global alias.mylog "log --graph --pretty=format:'%n%C(bold yellow)%s%n  %C(bold magenta)<%cn>%<(8) %C(white)=>%>(26) %C(green)%cd %C(white)(%C(green)%cr%C(white))%n  %C(bold normal)commit:  %C(red)%h %C(white)- %C(blue)%H%n  %C(bold normal)position:  (%C(auto)%D%C(bold))%n%n' --abbrev-commit --date=format:'%a %d-%m-%Y'"

git mylog


// Exemple test logline
git config --global alias.logline "log --graph --pretty=format:'%Cred%h%Creset - %C(yellow)%d%Creset %C(bold blue)<%an>%Creset %n %s %Cgreen(%cr) %<(8) (%cd) %n' --abbrev-commit --date=format:'%a %d-%m-%Y'"

git logline


// Exemple totalog
git config --global alias.totalog "log --graph --pretty=format:'%C(auto)%d%n %D%n %C(yellow) Commit Hash: %C(bold blue) %H%n %C(yellow) Abbreviated commit hash: %C(red reverse)%h%n %C(green) Tree hash: %Cblue%T%n %C(cyan) Abbreviated tree hash: %Cred%t%n %C(cyan) Parent hashes: %Cblue%P%n %C(magenta) Abbreviated parent hashes: %Cred%p%n %C(magenta) Author name: %Cblue%an%n %C(magenta) Author email: %Cred%ae%n %C(white) Author date: %Cblue%ad%n %C(white) Author date, relative:%Cred%ar%n %Cgreen Committer name: %Cblue%cn%n %C(cyan) Committer email: %Cred%ce%n %C(cyan) Committer date: %Cblue%cd%n %C(cyan) Committer date, relative: %Cred%cr%n   %C(green) Committer date UNIX timestamp: %Cblue%ct%n %C(green) Committer date short : %Cblue%cs%n  %C(green) Committer date human: %Cblue%ch%n  %C(cyan) Subject: %Cblue%s%n%n' --abbrev-commit"

git totalog


/** List of colors an information to display **/
 
 /// Colors:
 normal,  white, black, red, magenta, blue, cyan  green, yellow,
 
 
/// Option de couleurs
// reset color
%Creset
// reverse
%C(yellow reverse)
// Bold
%C(bold yellow)
// Auto
%C(auto)


 /** --pretty éclater en liste (pour la lisibilité **/

// totalog
%C(white)ref names %C(auto)%d%n 
%C(white)ref names <without ( )> %C(auto)%D%n
%C(yellow) Commit Hash: %Cblue%H%n 
%C(bold yellow) Abbreviated commit hash: %Cred%h%n 
%C(bright yellow) Tree hash: %Cblue%T%n 
%C(cyan) Abbreviated tree hash: %Cred%t%n 
%C(cyan) Parent hashes: %Cblue%P%n 
%C(cyan) Abbreviated parent hashes: %Cred%p%n 
%C(cyan) Author name: %Cgreen%an%n 
%C(white) Author email: %Cgreen%ae%n 
%C(white) Author date: %Cblue%ad%n 
%C(white) Author date, relative: %Cred%ar%n 
%Cgreen Committer name: %Cgreen%cn%n 
%C(magenta) Committer email: %Cgreen%ce%n 
%C(magenta) Committer date: %Cblue%cd%n 
%C(magenta) Committer date, relative: %Cred%cr%n 
%C(green) Committer date UNIX timestamp: %Cblue%ct%n 
%C(green) Committer date short : %Cblue%cs%n 
%C(magenta) Subject: %Cblue%s%n
%C(yellow)%d


// mylog

'%n%C(bold yellow)%s%n  %C(bold magenta)<%cn>%<(8) %C(white)=>%>(26) %C(green)%cd %C(white)(%C(green)%cr%C(white))%n  %C(bold normal)commit:  %C(red)%h %C(white)- %C(blue)%H%n  %C(bold normal)position:  (%C(auto)%D%C(bold))%n%n'

%n
%C(bold yellow)%s
%n
  %C(bold magenta)<%cn>
%<(8)
 %C(white)=>
%>(26)
 %C(green)%cd
 %C(white)(%C(green)%cr%C(white))
%n
  %C(bold normal)commit:  %C(red)%h
 %C(white)-
 %C(blue)%H
%n
  %C(bold normal)position:
  (%C(auto)%D%C(bold))
%n%n

%C(bold yellow)%s%n
%C(bold magenta)<%cn>%<(8)
%C(white)=>%>(26) %C(green)%cd
%C(white)(%C(green)%cr%C(white))%n
%C(bold normal)commit:  %C(red)%h
%C(white)-  %C(blue)%H%n
%C(bold normal)position:(%C(auto)%D%C(bold))%n%n

