# GIT Complete commands

## .gitconfig file Changes

```
- [user]\
    - name = 'Manoj Chaurasiya'
    - email =
- [core]\
    - editor = mate -w
```

# <span style="color:green">Start</span>

```
git init
git staus
git add . | <file-name>
git add -A   // in case of delete, move or rename the file from the OS level.
git commit -m "message"
    or
git commit -am "message"  // add + commit
git push
git push -f // forcefully
git push origin master
```

# Checkout

```
git checkout <branch-name>
git checkout -- <file-name>
```

# Log

```
git log
git log --abbrev-commit // 7 Character Unique values
git log --oneline --graph --decorate --all
git log <commitId1>...<commitId10>
git log --since="3days ago"
git log -- <file-name>
git log --follow -- path
git show <commitId>
```

# Pull

```
git pull origin master
```

# Alias

```
git config --global alias.hist "log --all --oneline --graph --decorate"
~/.gitconfig
[alias]
hist = "log --all --oneline --graph --decorate"
```

# Branching

```
git branch -a // show all local and remote branches
git branch <branch-name> // create new branch
git checkout <branch-name> // switch the brach
    or
git checkout -b <new-branch-name>

git branch -mv <old-branch-name> <new-branch-name> // remane the branch
git branch -d <branch-name> // delete the branch
git branch // show local branch
git checkout -b <new-branch> // checkout and create switch in new branch

git remote add origin <url>
git push -u origin master
```

# <span style="color:blue">Diff</span>

```
git diff master-branch title-change-branch  // command prompt
git difftool master-branch title-change-branch  // visually
git difftool title-change
```

# Merge

```
master-branch > git merge <branch-name> // fast-forward code will merge to master branch from the branch-name
git merge --no-ff // no fast-forward - use editor
git mergetool
```

# <span style="color:yellow">Rebase</span>

```
git rebase master
git rebase master --abort
```

# <span style="color:red">Stash</span>

```
git stash
git stash apply
git stash list
git stash -u // include untracked file
git stash drop // drop last from stash list
git stash pop // Adding the line for rebase changes
```

## Thanks,

## <span style="color:orange"> Manoj </span>
