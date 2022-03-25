---
title: "Turing Completeness"
date: 2022-03-25
draft: false
type: "note"
---

# Turing Completeness

In 1936 Alan Turing created a mathematical model of a computer consisting of a state machine that manipulates symbols by reading and writing them on sequential memory (resembling an infinite-length paper tape).

With this construct, Turing went on to provide a mathematical foundation to answer (in the negative) questions about universal computability, meaning whether all problems are solvable. He proved that there are classes of problems that are uncomputable.

Specifically, he proved that the halting problem (whether it is possible, given an arbitrary program and its input, to determine whether the program will eventually stop running) is not solvable.

Turing further defined a system to be _Turing complete_ if it can be used to simulate any Turing machine. Such a system is called a _Universal Turing machine_ (UTM).

---

### Interesting References

[The simplest Turing-complete state machine](https://www.sciencedirect.com/science/article/pii/S0304397596000771)
[Accidentally Turing complete systems](http://beza1e1.tuxen.de/articles/accidentally_turing_complete.html)
