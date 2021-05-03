# Documentation

This folder contains ready to read documentation. The 'src' folder contains the
editable versions of these documents.

## Creating graphs with graphviz

Files with the `.gv` extension are [graphviz](https://www.graphviz.org/) files
that can be used to create graphs with your text editor. The syntax is (in my
opinion) pretty intuitive and should feel somewhat similar to html.

Compiling your `.gv` file to a `.png` file:

```bash
dot input.gv -Tpng > output.png     # Compile a '.gv' file and output it as '.png'
```
