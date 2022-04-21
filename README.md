WCAT project.................
It is used to display or make a copy content of one or more files in the terminal
Commands:

1- node wcat.js filepath => displays content of the file in the terminal 
2- node wcat.js filepath1 filepath2 filepath3... => displays content of all files in the terminal in (concatenated form) in the given order. 
3- node wcat.js -s filepath => convert big line breaks into a singular line break
4- node wcat.js -n filepath => provide numbering to all the lines
5- node wcat -b filepath => provide numbering to non-empty lines

EDGE  CONDITION
1- If file entered is not found then it gives file does not exist error. 
2- -n and -b are 2 options which cannot exist together  so if user types both of them together only the first enter option should work.
3- -s and any or both -n and -b present then -s will be executed first and then -n and -b according second rule
