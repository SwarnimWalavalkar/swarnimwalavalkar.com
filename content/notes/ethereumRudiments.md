---
title: "Ethereum Rudiments"
date: 2022-03-25
draft: false
type: "note"
---

# Ethereum Rudiments

### A broad explanation

Ethereum is a deterministic but practically unbounded state machine, consisting of a globally accessible singleton state and a virtual machine that applies changes to that state.

Ethereum is designed to be a general-purpose programmable blockchain that runs a virtual machine capable of executing code of arbitrary and unbounded complexity. Ethereum’s language is Turing complete, meaning that Ethereum can straightforwardly function as a general-purpose computer.

### Components of a blockchain

- A peer-to-peer (P2P) network connecting participants and propagating transactions and blocks of verified transactions, based on a standardized protocol

- Messages in the form of transactions, representing state transitions

- A set of consensus rules, governing what constitutes a transaction and what makes for a valid transition

- A consensus algorithm that decentralizes control over the blockchain, by forcing participants to cooperate in the enforcement of the consensus rules

- A game-theoretically sound incentivization scheme (e.g., proof-of work costs plus block rewards) to economically secure the state machine in an open environment

- Open-Source clients

### Turing Completeness

Ethereum’s ability to execute a stored program, in a state machine called the Ethereum Virtual Machine, while reading and writing data to memory makes it a [Turing complete system](/notes/turingcompleteness) and therefore a UTM. Ethereum can compute any algorithm that can be computed by any Turing machine, given the limitations of finite memory.

Ethereum’s groundbreaking innovation is to combine the general-purpose computing architecture of a stored-program computer with a decentralized blockchain, thereby creating a distributed single-state (singleton) world computer. Ethereum programs run “everywhere,” yet produce a common state that is secured by the rules of consensus.

### Implications of Turing Completeness

Turing-Complete systems can run in "Infinite-loops", unintended never-ending loops can arise without warning, due to complex interactions between the starting conditions and the code. This poses a challenge:

every participating node (client) must validate every transaction, running any smart contracts it calls. But as Turing proved, Ethereum can’t predict if a smart contract will terminate, or how long it will run, without actually running it (possibly forever). This is effectively a DoS attack.

### Gas to the rescue

To counter this, Ethereum has a metering mechanism called _gas_.
As the EVM executes a smart contract, it carefully accounts for every Instruction (computation, data-access, etc). Each instruction has a predetermined cost in units of gas

When a transaction triggers the execution of a smart contract, it must include an amount of gas that sets the upper limit of what can be consumed running the smart contract. The EVM will terminate execution if the amount of gas consumed by computation exceeds the gas available in the transaction.

Gas is the mechanism Ethereum uses to allow Turing-complete computation while limiting the resources that any program can consume.

### ÐApps

Ethereum started as a way to make a general-purpose blockchain that could be programmed for a variety of uses. But very quickly, Ethereum’s vision expanded to become a platform for programming ÐApps (Decentralized Applications)

DApps represent a broader perspective than smart contracts. A DApp is, at the very least, a smart contract and a web user interface. More broadly, a DApp is a web application that is built on top of open, decentralized, peer-to-peer infrastructure services.

### Web3

In the early 2000s the term “Web 2.0” came to prominence, describing an evolution of the web toward user-generated content, responsive interfaces, and interactivity. Web 2.0 is not a technical specification, but rather a term describing the new focus of web applications.

The concept of DApps is supposed to take the World Wide Web to its next natural evolutionary stage, introducing decentralization with peer-to-peer protocols into every aspect of a web application. The term used to describe this evolution is web3, meaning the third “version” of the web.

web3 represents a new vision and focus for web applications: from centrally owned and managed applications, to applications built on decentralized protocols.

---

### Interesting Resources

- The Ethereum Yellow Paper: https://ethereum.github.io/yellowpaper/paper.pdf

- The Beige Paper, a rewrite of the Yellow Paper for a broader audience in less formal language: https://github.com/chronaeon/beigepaper

- Dr Gavin Wood's Web3 Proposal: https://gavwood.com/dappsweb3.html

- ÐΞVp2p network protocol: http://bit.ly/2quAlTE

- Ethereum Virtual Machine list of resources: http://bit.ly/2PmtjiS

- LevelDB database (used most often to store the local copy of the blockchain): http://leveldb.org

- Merkle Patricia trees: https://github.com/ethereum/wiki/wiki/Patricia-Tree

- Ethash PoW algorithm: https://github.com/ethereum/wiki/wiki/Ethash

- Casper PoS v1 Implementation Guide: http://bit.ly/2DyPr3l

- Go-Ethereum (Geth) client: https://geth.ethereum.org/
