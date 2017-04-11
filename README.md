I've encountered a problem working on Windows with Docker and Google App Engine. Even though I configured my editor (Atom or VS Code) to use Unix end lines, it seems there is some `\r` when I save a file. Because of that, Google App Engine, launched inside a Unix docker, does not detect any change I make to files. The only way those changes can be detected and used by my server is if I do a `dos2unix` on them.

To automate this, I made this docker image, which will execute `dos2unix` to any saved files. To use it, just launch it with your code linked to the docker in `/code`.
