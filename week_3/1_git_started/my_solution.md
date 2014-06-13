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

Thankfully, I have yet to encounter an error message but I know I will git (har har) one sooner or later... and will probably go into cardiac arrest... and ask 40 million questions before it's fixed. I'll post the first one I come across! (written on June 11, 2014)

Edit: It happened - I finally got an error message. I had been committing and pushing changes to my phase_0_unit_1 repo with no issues but wanted to try adding or changing the remote so that I could also push to my jhendge.github.io repo. When I tried doing that, I received a "fatal: origin already exists" message. Apparently, because I had already reserved the "origin" for my phase_0_unit_1 repo, I was getting the message when I tried to also refer to my jhendge.github.io repo as the "origin." I looked up how to ameliorate the issue on StackOverflow and found that I simply needed to call the remote something other that "origin," so I picked "io." Now, when I want to push something to my github.io repo, I use "git push io master." (updated on June 12, 2014)

## Release 6: Reflection

I hung on to the Github App for as long as I could, basking in the glow of it's eye-pleasing visual interface and enjoying the ease with which I learned to use the app. Everything was perfect. I made changes to the files in my github.io and phase_0_unit_1 repos and committed them with ease. No problems, no fuss. Even though I knew I needed to wean myself off of the app the way an infant needs to learn to distance itself from its blanket, I didn't want to. Why switch to something when what I'm using is working perfectly? Why use the unattractive and at times intimidating terminal to commit and push changes? 

Taking a step back, it's easy for me to understand why the terminal is the way to go despite my unending affection for the Github app. The app is installed and works well on my Macbook. What if I need to work on someone else's computer and he/she didn't have the app installed? I would be totally stuck! Well, the reality is that the app is fairly new and programmers simply prefer the terminal because that's what they've been using for decades. Thus, in order for me to be able to commit and push changes from anywhere on any system (a system, say, that doesn't have the Github app), I need to know how to work with git and Github from my terminal. That being said, I'm working to become more and more comfortable with the terminal and less reliant on the app. 