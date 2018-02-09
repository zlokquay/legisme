## Adding these scripts to your Bash shell
1. Copy each file to your home directory.

2. Add the following to your `~/.bash_profile`, create the file if it does not exist.

```
if  [ -f $(brew --prefix)/etc/bash_completion ]; then
  source $(brew --prefix)/etc/bash_completion
fi

if  [ -f $(brew --prefix)/etc/bash_completion.d/git-prompt.sh ]; then
  source $(brew --prefix)/etc/bash_completion.d/git-prompt.sh
  GIT_PS1_SHOWDIRTYSTATE=1 # display the unstaged (*) and staged (+) indicators
  # set your prompt. path: \w, git branch & status: $(__git_ps1), newline: \n, dollar sign delimiter: \$
  PS1='\w$(__git_ps1) \n\$ '
fi

PS1='\w$(__git_ps1) \$ '
source ~/.git-prompt.sh

# git tab completion
source ~/.git-completion.bash
```

3. Run `source ~/.bash_profile`

Your Bash shell should be updated to monitor your git branch and you should now be able to use [Tab Completion](https://www.howtogeek.com/195207/use-tab-completion-to-type-commands-faster-on-any-operating-system/) with Git commands.

##### Optional Git aliases
You can add these aliases to your `~/.bash_profile`

```
# git aliases
alias gs='git status'
alias gl='git log --all --decorate --graph --pretty=format:"%C(yellow)%h%Creset %C(auto)%d%Creset %Cblue%ar%Creset %Cred%an%Creset %n%w(72,1,2)%s"'
alias gcm='git commit -m '
```
