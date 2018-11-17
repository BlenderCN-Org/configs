# Setup fzf
# ---------
if [[ ! "$PATH" == */home/moritz/.fzf/bin* ]]; then
  export PATH="$PATH:/home/moritz/.fzf/bin"
fi

# Auto-completion
# ---------------
[[ $- == *i* ]] && source "/home/moritz/.fzf/shell/completion.bash" 2> /dev/null

# Key bindings
# ------------
source "/home/moritz/.fzf/shell/key-bindings.bash"

