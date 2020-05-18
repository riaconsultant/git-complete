# GIT Complete commands
.gitconfig
[user]
    name = 
    email =
[core]
    editor = mate -w

git init
git staus
git add . | <file-name>
git add -A  // in case of delete, move or rename the file from the OS level.
git commit -m "message"
git push
git push -f // forcefully



git checkout <branch-name>
git checkout -- <file-name>

// Log
git log
git log --abbrev-commit // 7 Character Unique values


git remote add origin <url>
git push -u origin master

