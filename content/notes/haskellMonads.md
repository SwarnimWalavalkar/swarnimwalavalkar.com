---
title: "Monads in Functional Programming"
date: 2021-12-25
draft: false
type: "note"
---

# Monads in Haskell

In functional programming, Monads are an abstraction used to structure programs

- Help reduce complicated sequences of functions into “a pipeline” of actions
- Abstract away control flow
- Facilitate side-effects
- Manage external data interactions

```haskell
class Monad m where
  return :: a					-> m a
  (>>=)  :: m a -> (a -> m b) 	-> m b
```

Monads are abstraction used to help structure programs and help easily achieve some functionality which would be difficult to achieve otherwise.For example, they help achieve side-effects which would be required in the real world.

Monads in Haskell are defined as a Typeclass.

We make things “monadic” by making them an instance of this typeclass.
2 main operations defined by the typeclass:

- Lifting: take a non-monadic value and turn it into a monadic value
- Binding: monadic value and function that return a monadic value
  - The bind operator can have different semantics for different monads

### Functors and Aplicatives

Functors are things that can be mapped over

```haskell
fmap::(a -> b) -> f a -> f b
```

Applicatives are functors that can be applied

```haskell
pure  :: a -> f a
(<*>) :: f(a -> b) -> f a -> f b
```

---

A monad on category C consists of an endofunctor (a functor mapping a category to itself), T: C -> C along with two natural transformations:

1. 1_C -> T where 1C denotes the identity functor on C, and
2. T^2 -> T where T^2 is the functor T to T from C to C

These are required to fulfill coherence conditions

```haskell
class Monad m where
	return :: a					-> m a
	(>>=) :: m a -> (a->m b)	-> m b
	(>>) :: m a -> m b			-> m b
```

## Coherence Conditions

**Left identity**: The first monad law states that if we take a value, put it in a default context with return and then feed it to a function by using >>=, it’s the same as just taking the value and applying the function to it.
`return a >>= f ≡ f a`

**Right identity**: The second law states that if we have a monadic value and we use >>= to feed it to return, the result is our original monadic value.
`m >>= return ≡ m`

**Associativity:** The final monad law says that when we have a chain of monadic function applications with `>>=`, it shouldn’t matter how they’re nested.
`(m >>= f) >>= g ≡ m >>= (\x -> f x >>= g)`

---

## Monads for Side-Effects

**Eg. IO**
Monads in Haskell can function as "containers" that carry "extra information" apart from the value inside that functions need not worry about.
Here, the "information" can be used as the action that performs IO

```haskell
instance Monad IO where
	return :: a -> IO a
	(>>=) :: IO a -> a (a -> IO b) -> IO b
```

Example as a REPL reading/writing to a terminal

```haskell
flushStr :: String -> IO ()
readPrompt :: String -> IO String
evalString :: String -> IO String
until_ :: Monad m => (a -> Bool) -> m a -> (a -> m ()) -> m ()
runRepl :: IO ()
main :: IO ()
```

## Monads for Control Flow

**Eg. Error Handling**
We define all types of errors we want to catch and throw as `MonadicError`
We define a type for functions that may throw a `MonadicError`

```haskell
type ThrowsError = Either MondaicError
```

`Either` is another instance of a monad, The "extra information" in this case is whether the error occurred.

```haskell
instance (Error e) => Monad (Either e) where
	return x = Right x
	Right x >> f = f x
	Left err >>= f = Left err
```

If `(>==)` sees an error it simply passes that error through without subsequent computations, else passes the value along

## Monad Transformers

Take our 2 Error Handling and IO Monads for example, say we need to use their behavior functionality simultaneously.
We use monad transformers to combine functionality of multiple monads
We use ExceptT, a monad transformer that adds exceptions to other monads

```haskell
newtype ExceptT e m a :: * -> (* -> *) -> * -> *
```

The combined Monad would then be:

```haskell
type IOThrowsError = ExceptT MonadicError IO
```

## Monads for Environment Management

Haskell has no notion of mutable state. Each function has an environment storing values for each of its args and vars.

We use a feature called IORef that helps us hold the environment state within the IO monad
We then simply access this environment mutating its state as required, and keep passing it around on each evaluation cycle.

```haskell
type Env = IORef[(String, IORef SomeVal)]

eval :: Env -> SomeVal -> IOThrowsError SomeVal
```
