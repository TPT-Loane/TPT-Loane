# Documentation source files

This folder contains the editable versions of the documentation.

## Creating graphs with graphviz

[Quick demo for VSCode folks](https://www.youtube.com/watch?v=N7FC3yDuzWc)

Files with the `.gv` extension are [graphviz](https://www.graphviz.org/) files
that can be used to create graphs with your text editor. The syntax is (in my
opinion) pretty intuitive and should feel somewhat similar to html.

Compiling your `.gv` file to a `.png` file:

```bash
### Make sure that graphviz (preferably with 'dot') is installed.

dot input.gv -Tpng > output.png     # Compile a '.gv' file and output it as '.png'
```
