#!/bin/bash

firefox -width=3000 -height=1000 -new-window=$1 &

if [ "$2" -eq "0" ]; then
  echo $1
else
  sleep $2

  # Find the window ID of a Firefox window.
  FFWID=$(xdotool search --name "Mozilla Firefox" | head -1)

  # use the Firefox window ID to activate that window
  xdotool windowactivate --sync $FFWID

  # Send the "Quit" hotkey "Ctrl + q" to Firefox.
  # https://support.mozilla.org/en-US/kb/keyboard-shortcuts-perform-firefox-tasks-quickly
  xdotool key --clearmodifiers ctrl+q

  # Give the system a moment to process
  sleep 0.1

  # Find the window ID of the Firefox close confirmation window
  CWID=$(xdotool search --name "close tabs")

  # End the script if xdotool didn't detect a confirmation window
  if [ $? -ne 0 ]; then
    exit 0
  fi

  # Activate the Confirmation window
  xdotool windowactivate --sync $CWID

  # Simulate an "enter" key press in the confirmation window.
  # This does the default action of pressing the "Close tabs" button.
  xdotool key --clearmodifiers Return
fi