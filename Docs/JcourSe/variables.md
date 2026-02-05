In low-level languages such as C or C++, working with variables requires
explicit consideration of many details: stack vs heap allocation,
variable types (`int`, `char`, pointers), values vs memory addresses,
pointer manipulation, and manual memory management.

This complexity exists because these languages give the programmer
fine-grained control over how memory is used and how data is represented.

In JavaScript, the developer mostly thinks in terms of *what* to store,
and stops there. Memory allocation, typing, and lifetime management are
handled automatically by the JavaScript engine.
