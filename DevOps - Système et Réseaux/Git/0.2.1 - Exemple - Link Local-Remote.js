git init
git checkout -b main
git remote add origin https://github.com/ThomasGT78/Dev_Courses.git
git fetch origin
git rebase origin/main
git add "DevOps - Système et Réseaux\."
git commit -m "Add courses: DevOps - Système et Réseaux"
git push origin main

git push -u origin main


git init
git checkout -b main
git remote add origin https://github.com/ThomasGT78/Dev_Courses.git
git fetch origin
git add .
git commit -m "First Commit"
git rebase origin/main
git push origin main



git add .
git commit -m "Add courses: Conception de projet, DevOps"
git push origin main




warning: 
adding embedded git repository: DevOps - Système et Réseaux/Git/Git - M2i/1.1-INITIATION-GIT

hint: 
You've added another git repository inside your current repository.
Clones of the outer repository will not contain the contents of the embedded repository and will not know how to obtain it.
If you meant to add a submodule, use:
	git submodule add <url> DevOps - Système et Réseaux/Git/Git - M2i/1.1-INITIATION-GIT
If you added this path by mistake, you can remove it from the index with:
	git rm --cached DevOps - Système et Réseaux/Git/Git - M2i/1.1-INITIATION-GIT
See "git help submodule" for more information.