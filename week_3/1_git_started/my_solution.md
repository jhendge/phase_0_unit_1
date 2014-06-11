## Release 2: Basic Git Commands
Define the following commands and describe how they work/what they do.  


#### add
- Add file changes in your working directory to your index

#### branch
- Lists existing branches, including remote branches if '-a' is provided. Creates a new branch if a branch new is provided.

#### checkout
- Checks out a different branch; switches branches by updating the index, working tree, and HEAD to reflect the chosen branch.

#### clone
- Makes a git repo copy from a remote source. It also adds the original location as a remote so you can fetch from it again and push to it if you have permissions.

#### commit
- Takes all of the changes written in the index, creates a new commit object pointing to it and sets the branch to point to that new commit.

#### fetch
- Fetches all of the objects from the remote repo that are not present in the local one.

#### log
- Shows a listing of commits on a branch including the corresponding details.

#### merge
- Merges one or more branches into your current branch and automatically creates a new commit if there are no conflicts.

#### pull
- Fetches the files from the remote repo and merges it with your local one. This command is equal to the git fetch and the git merge sequence. 

#### push
- Pushes all the modified local objects to the remote repo and advances its branches.

#### reset
- Resets your index and working directory to the state of your last commit. 

#### rm
- Removes files from your index and your working directory so they will not be tracked.

#### status
- Shows you the status of files in the index versus the working directory. It will list out files that are untracked (only in your working directory), modified (tracked but not yet updated in your index), and staged (added to your index and ready for committing).


## Release 4: Git Workflow

- Push files to a remote repository = *create or make changes to a file(s)* -> git add [file name] -> git commit -m ['message'] -> *assuming you have initialized/reactivated the remote repo you're working with,* use git push origin master (not always going to be 'origin master')
- Fetch changes = *set up the remote that changes will be fetched from (in this case, DBC) by using* git remote add upstream https://github.com/Devbootcamp/phase_0_unit_1.git -> git fetch upstream -> git checkout master -> git merge upstream/master -> git commit -m 'added DBC changes' -> git push origin master
- Commit locally = *create or make changes to a file(s)* -> git add [file name] -> git commit -m ['message']

## Release 5: Errors you encountered
1. Error
2. Solution
3. Cause (explain the error)

## Release 6: Reflection