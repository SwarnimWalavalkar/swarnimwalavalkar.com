---
title: "Information Theory"
date: 2021-09-07
draft: false
type: "note"
---

# Information Theory

Elements of Information Theory
Book by Joy A. Thomas and Thomas M. Cover
http://www.cs-114.org/wp-content/uploads/2015/01/Elements_of_Information_Theory_Elements.pdf

- Information theory is a branch of applied mathematics that revolves around quantifying how much information is present in a signal. It was originally invented to study sending messages from discrete alphabets over a noisy channel, such as communication via radio transmission.
- In the context of signal processing, information theory tells how to design optimal codes and calculate the expected length of messages sampled from specific probability distributions using various encoding schemes. In the context of machine learning, we can also apply information theory to continuous variables where some of these message length interpretations do not apply.

The basic intuition behind information theory is that learning that an unlikely event has occurred is more informative than learning that a likely event has occurred. A message saying “the sun rose this morning” is so uninformative as to be unnecessary to send, but a message saying “there was a solar eclipse this morning” is very informative

### To quantify information in a way that formalizes this intuition:

- Likely events should have low information content, and in the extreme case,events that are guaranteed to happen should have no information content whatsoever.
- Less likely events should have higher information content.
- Independent events should have additive information. For example, finding out that a tossed coin has come up as heads twice should convey twice as much information as finding out that a tossed coin has come up as heads once.

To satisfy all three of these properties, we define the self-information of an event $x = x$ to be:

$$I(x) = −log P (x).$$

$log$ is used to mean the natural logarithm, with base $e$
$I(x)$ is therefore written in units of nats
One nat is the amount of information gained by observing an event of probability $1/e$.

When $x$ is continuous, we use the same definition of information by analogy,but some of the properties from the discrete case are lost. For example, an event with unit density still has zero information, despite not being an event that is guaranteed to occur.
