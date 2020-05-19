# GIT Complete commands
.gitconfig
[user]
    name = 
    email =
[core]
    editor = mate -w
# Start
git init
git staus
git add . | <file-name>
git add -A  // in case of delete, move or rename the file from the OS level.
git commit -m "message"
git push
git push -f // forcefully
git push origin master


# Checkout
git checkout <branch-name>
git checkout -- <file-name>

# Log
git log
git log --abbrev-commit // 7 Character Unique values
git log --oneline --graph --decorate --all
git log <commitId1>...<commitId10>
git log --since="3days ago"
git log -- <file-name>
git log --follow -- path
git show <commitId>

# Pull
git pull origin master


# Alias
git config --global alias.hist "log --all --oneline --graph --decorate"
~/.gitconfig
[alias]
    hist = "log --all --oneline --graph --decorate"

# Branching
git branch -a // show all local and remote branches
git branch <branch-name>  // create new branch
git checkout <branch-name> // switch the brach 
git branch -mv <old-branch-name> <new-branch-name> // remane the branch
git branch -d <branch-name>
git branch // show local branch
git checkout -b <new-branch> // checkout and create switch in new branch

git remote add origin <url>
git push -u origin master

