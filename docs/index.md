# Welcome to GIT Complete commands

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
git branch -a   // show all local and remote branches
git branch <branch-name> // create new branch
git checkout <branch-name> // switch the brach
git branch -mv <old-branch-name> <new-branch-name> // remane the branch
git branch -d <branch-name>
git branch // show local branch
git checkout -b <new-branch> // checkout and create switch in new branch

git remote add origin <url>
git push -u origin master
```

# <span style="color:blue">Diff</span>

```
Configure the pmerge tool in git bash
git config --global merge.tool p4merge
git config --global mergetool.p4merge.path "C:/Program Files/Perforce/p4merge.exe"
git config --global mergetool.prompt false

git config --global diff.tool p4merge
git config --global difftool.p4merge.path "C:/Program Files/Perforce/p4merge.exe"
git config --global difftool.prompt false
```

```
git diff master title-change
git difftool title-change
git difftool
```

// difference between local branch to remote branch

```
git diff master origin/master
```

# Merge

```
git merge <branch-name> // fast-forward
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

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://support.github.com/contact) and we’ll help you sort it out.
