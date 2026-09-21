# Terim Taslağı (ana liste)

Bu dosya sözlüğün **ana listesidir**. Her `- ` satırı bir terimdir ve bir `.md` dosyasına dönüşür.
Kurallar:
- Terim adı İngilizce kanonik haliyle yazılır. Türkçe karşılığı içerik yazılırken `tr` alanına girer.
- Satır sonundaki `{slug: ...}` slug'ı elle belirler (ör. `C++ {slug: cpp}`).
- Parantez içindeki ifade **anlam ayrımıdır** (disambiguation): `Fork (Blockchain)` ve `Fork (Git)` iki ayrı terimdir, slug'ları `fork-blockchain` ve `fork-git` olur.
- Başlıktaki `slug:` değeri kategori kimliğidir, değiştirilmez.
- Yeni terim eklemek için ilgili alt başlığın altına satır eklenir; seed script'i sadece eksik olanları oluşturur.

---

## 1. Blockchain Temelleri (slug: temeller)

### Temel kavramlar
- Blockchain
- Distributed Ledger Technology (DLT)
- Ledger
- Decentralization
- Peer-to-Peer (P2P)
- Trustless
- Permissionless
- Permissioned Blockchain
- Public Blockchain
- Private Blockchain
- Consortium Blockchain
- Immutability
- Censorship Resistance
- Double Spending
- Byzantine Generals Problem
- Blockchain Trilemma
- Satoshi Nakamoto
- Whitepaper
- Web1
- Web2
- Web3
- dApp
- Protocol
- On-chain
- Off-chain
- Layer 0
- Layer 1

### Bloklar ve işlemler
- Block
- Genesis Block
- Block Header
- Block Height
- Block Time
- Block Size
- Block Reward
- Blockspace
- Transaction
- Transaction Hash (TxID)
- Transaction Fee
- Nonce (İşlem)
- Confirmation
- Mempool
- Orphan Block
- Uncle Block
- Timestamp
- Chain ID
- UTXO
- Account Model
- State (Blockchain)
- State Transition
- World State

### Ağ ve node
- Node
- Full Node
- Light Node
- Archive Node
- Mainnet
- Testnet
- Devnet
- Faucet
- Block Explorer
- Fork (Blockchain)
- Hard Fork
- Soft Fork
- Chain Split

### Para birimleri ve ücretler
- Cryptocurrency
- Coin
- Token (Blockchain)
- Native Token
- Altcoin
- Satoshi (Birim)
- Wei
- Gwei
- Gas
- Gas Limit
- Gas Price
- Base Fee
- Priority Fee
- EIP-1559
- Halving

## 2. Kriptografi (slug: kriptografi)

### Temeller
- Cryptography
- Encryption
- Decryption
- Encoding
- Symmetric Encryption
- Public-Key Cryptography
- Public Key
- Private Key
- Entropy
- Randomness
- Nonce (Kriptografi)
- Salt
- Checksum
- Hexadecimal
- Base58
- Base64
- Key Derivation
- Post-Quantum Cryptography

### Hash fonksiyonları
- Hash Function
- Hash
- SHA-256
- Keccak-256
- BLAKE2
- Collision Resistance
- Preimage Resistance
- Avalanche Effect
- HMAC

### İmzalar ve eğriler
- Digital Signature
- Elliptic Curve Cryptography (ECC)
- secp256k1
- ECDSA
- EdDSA
- Ed25519
- Schnorr Signature
- BLS Signature
- Signature Aggregation
- Threshold Signature (TSS)
- Multi-Party Computation (MPC)
- Shamir's Secret Sharing
- Ring Signature
- Verifiable Random Function (VRF)

### Veri yapıları
- Merkle Tree
- Merkle Root
- Merkle Proof
- Merkle Patricia Trie
- Verkle Tree

### Sıfır bilgi (ZK) ve ileri kriptografi
- Zero-Knowledge Proof (ZKP)
- zk-SNARK
- zk-STARK
- Prover
- Verifier
- Circuit (ZK)
- Trusted Setup
- Groth16
- PLONK
- Recursive Proof
- zkVM
- Commitment Scheme
- Polynomial Commitment
- KZG Commitment
- Homomorphic Encryption (FHE)

## 3. Konsensüs ve Ağ (slug: konsensus)

### Mekanizmalar
- Consensus Mechanism
- Proof of Work (PoW)
- Proof of Stake (PoS)
- Delegated Proof of Stake (DPoS)
- Proof of Authority (PoA)
- Proof of History (PoH)
- Proof of Space
- Nakamoto Consensus
- Byzantine Fault Tolerance (BFT)
- Practical Byzantine Fault Tolerance (PBFT)
- Federated Byzantine Agreement (FBA)
- Tendermint (CometBFT)
- Longest Chain Rule
- Fork Choice Rule
- GHOST Protocol

### Madencilik
- Mining
- Miner
- Mining Pool
- Hashrate
- Difficulty
- Difficulty Adjustment
- ASIC

### Staking ve validator'lar
- Staking
- Stake
- Validator
- Delegator
- Solo Staking
- Staking Pool
- Staking Rewards
- Slashing
- Unbonding Period
- Proposer
- Attestation
- Committee
- Leader Election
- Inactivity Leak

### Kesinlik ve güvenlik özellikleri
- Finality
- Probabilistic Finality
- Deterministic Finality
- Economic Finality
- Safety (Consensus)
- Liveness
- Chain Reorganization (Reorg)
- Weak Subjectivity
- Nothing-at-Stake Problem
- Sybil Resistance
- Epoch (Blockchain)
- Slot
- Checkpoint

### Ağ katmanı
- Gossip Protocol
- Peer Discovery
- Bootnode
- Node Synchronization
- Client (Blockchain)
- Execution Client
- Consensus Client
- Client Diversity
- Network Upgrade

## 4. Cüzdanlar ve Hesaplar (slug: cuzdanlar)

### Cüzdan türleri
- Wallet
- Hot Wallet
- Cold Wallet
- Hardware Wallet
- Software Wallet
- Browser Extension Wallet
- Paper Wallet
- Custodial Wallet
- Non-Custodial Wallet
- Self-Custody
- Embedded Wallet
- MPC Wallet
- Burner Wallet
- Watch-only Wallet
- Smart Contract Wallet

### Anahtarlar ve adresler
- Seed Phrase
- BIP-39
- HD Wallet (BIP-32)
- Derivation Path
- Keystore File
- Key Management
- Wallet Address
- Vanity Address
- Name Service (ENS)
- Balance
- Dust

### Hesap soyutlama
- Externally Owned Account (EOA)
- Contract Account
- Account Abstraction
- ERC-4337
- Bundler (Account Abstraction)
- Paymaster
- Gasless Transaction
- Session Key
- Passkey
- Social Recovery
- Multisig

### Bağlanma ve imzalama
- WalletConnect
- MetaMask
- Signing Request
- Blind Signing
- Sign-In with Ethereum (SIWE)
- EIP-712

## 5. Akıllı Sözleşmeler ve Sanal Makineler (slug: akilli-sozlesmeler)

### Temeller
- Smart Contract
- Virtual Machine (Blockchain)
- Ethereum Virtual Machine (EVM)
- EVM Compatibility
- WASM Smart Contracts
- Solana Virtual Machine (SVM)
- MoveVM
- Bytecode
- Opcode
- Turing Completeness
- Deterministic Execution
- Composability
- Cross-contract Call

### Dağıtım ve arayüz
- Contract Deployment
- Contract Address
- Contract Verification
- Constructor
- Application Binary Interface (ABI)
- Function Selector
- Event (Smart Contract)
- Log
- Precompile
- Contract Size Limit

### Bellek ve depolama
- Storage (EVM)
- Memory (EVM)
- Stack (EVM)
- Calldata
- Storage Slot
- Storage Rent

### Düşük seviye çağrılar
- Call (Low-level)
- Delegatecall
- Staticcall
- CREATE2
- Selfdestruct
- Signature Verification (ecrecover)

### Tasarım kalıpları
- Proxy Contract
- Upgradeable Contract
- Transparent Proxy
- UUPS Proxy
- Diamond Pattern (EIP-2535)
- Minimal Proxy (Clone)
- Factory Pattern
- Access Control
- Ownable
- Role-Based Access Control (RBAC)
- Pausable
- Reentrancy Guard
- Checks-Effects-Interactions
- Pull over Push Payments
- Commit-Reveal Scheme

### Dış dünya ve verimlilik
- Oracle
- Price Feed
- Automation (Keeper)
- Gas Optimization
- Gas Estimation

## 6. Token'lar ve Tokenomi (slug: tokenlar)

### Standartlar
- Token Standard
- ERC (Ethereum Request for Comments)
- ERC-20
- ERC-721
- ERC-1155
- ERC-4626
- ERC-2612 (Permit)
- SPL Token
- Decimals
- Allowance
- Approve
- transferFrom

### Token türleri
- Fungible Token
- Semi-Fungible Token
- Utility Token
- Governance Token
- Security Token
- Wrapped Token
- Memecoin
- Rebase Token
- Soulbound Token
- Vote-Escrowed Token (veToken)

### Tokenomi
- Tokenomics
- Total Supply
- Max Supply
- Circulating Supply
- Fully Diluted Valuation (FDV)
- Token Inflation
- Token Deflation
- Token Burn
- Mint
- Emission Schedule
- Allocation
- Vesting
- Cliff
- Token Unlock
- Buyback
- Tokenization
- Token Gating

### Dağıtım ve lansman
- Airdrop
- Retroactive Airdrop
- Points Program
- Snapshot (Token)
- Allowlist
- Token Generation Event (TGE)
- Initial Coin Offering (ICO)
- Initial DEX Offering (IDO)
- Initial Exchange Offering (IEO)
- Presale
- Fair Launch
- Launchpad

## 7. DeFi (slug: defi)

### Temeller
- Decentralized Finance (DeFi)
- Centralized Finance (CeFi)
- Traditional Finance (TradFi)
- DeFi Primitive
- Money Legos
- Total Value Locked (TVL)
- APR
- APY
- Protocol Revenue
- Real Yield

### Takas ve likidite
- Decentralized Exchange (DEX)
- Automated Market Maker (AMM)
- Constant Product Formula
- Liquidity Pool
- Liquidity Provider (LP)
- LP Token
- Swap
- Trading Pair
- Slippage
- Price Impact
- Impermanent Loss
- Concentrated Liquidity
- StableSwap
- Order Book DEX
- DEX Aggregator
- Bonding Curve
- Liquidity Bootstrapping Pool
- Protocol-Owned Liquidity
- Arbitrage

### Getiri
- Yield Farming
- Liquidity Mining
- Vault
- Yield Aggregator
- Strategy (Vault)
- Liquid Staking
- Liquid Staking Token (LST)
- Restaking
- Liquid Restaking Token (LRT)
- Yield Tokenization
- Vote Incentives (Bribes)

### Borç verme ve alma
- Lending Protocol
- Money Market
- Borrowing (DeFi)
- Collateral
- Overcollateralization
- Collateral Ratio
- Loan-to-Value (LTV)
- Health Factor
- Liquidation
- Liquidation Threshold
- Interest Rate Model
- Utilization Rate
- Collateralized Debt Position (CDP)
- Stability Fee
- Bad Debt
- Flash Loan

### Stablecoin'ler
- Stablecoin
- Fiat-backed Stablecoin
- Crypto-backed Stablecoin
- Algorithmic Stablecoin
- Peg
- Depeg

### Türevler
- Derivatives
- Perpetual Futures (Perps)
- Funding Rate
- Leverage
- Margin
- Long Position
- Short Position
- Options
- Synthetic Asset
- Delta-Neutral Strategy
- Hedging
- Prediction Market
- Insurance Protocol

### MEV ve işlem akışı
- Maximal Extractable Value (MEV)
- Searcher
- Block Builder
- Proposer-Builder Separation (PBS)
- Back-running
- Private Mempool
- Order Flow
- Intent
- Solver
- Request for Quote (RFQ)
- Time-Weighted Average Price (TWAP)
- Circuit Breaker

### Gerçek dünya varlıkları
- Real World Assets (RWA)
- Tokenized Treasuries

## 8. NFT ve Dijital Varlıklar (slug: nft)

- Non-Fungible Token (NFT)
- NFT Metadata
- Token URI
- On-chain Metadata
- Off-chain Metadata
- NFT Collection
- Generative Art
- PFP (Profile Picture) Project
- Floor Price
- Royalties
- NFT Marketplace
- Reveal
- Rarity
- Trait (NFT)
- Lazy Minting
- Dynamic NFT
- Fractional NFT
- Edition
- One of One (1/1)
- Blue-chip NFT
- Provenance
- POAP
- Digital Collectible
- Phygital
- Tokenbound Account (ERC-6551)
- Compressed NFT
- Ordinals
- Inscription
- BRC-20
- GameFi
- Play-to-Earn
- Metaverse

## 9. Ölçeklenme ve Birlikte Çalışabilirlik (slug: olceklenme)

### Temeller
- Scalability
- Transactions Per Second (TPS)
- Layer 2
- Layer 3
- Modular Blockchain
- Monolithic Blockchain
- Execution Layer
- Settlement Layer
- Consensus Layer
- Data Availability
- Data Availability Layer
- Parallel Execution
- Sharding
- Danksharding
- Appchain

### Rollup'lar
- Rollup
- Optimistic Rollup
- ZK Rollup
- Fraud Proof
- Validity Proof
- Challenge Period
- Withdrawal Period
- Forced Withdrawal (Escape Hatch)
- Sequencer
- Decentralized Sequencer
- Shared Sequencer
- Based Rollup
- Sovereign Rollup
- Blob (EIP-4844)
- zkEVM
- EVM Equivalence
- Validium
- Volition
- Proof Aggregation
- Rollup-as-a-Service (RaaS)

### Diğer yaklaşımlar
- Sidechain
- Plasma
- State Channel
- Payment Channel
- Lightning Network
- Stateless Client
- State Growth
- State Expiry
- Pruning

### Köprüler ve zincirler arası
- Interoperability
- Cross-chain
- Blockchain Bridge
- Canonical Bridge
- Third-party Bridge
- Lock-and-Mint
- Burn-and-Mint
- Liquidity Network Bridge
- Light Client
- Relayer
- Cross-chain Messaging
- Inter-Blockchain Communication (IBC)
- Chain Abstraction
- Omnichain

## 10. Güvenlik ve Gizlilik (slug: guvenlik)

### Temel kavramlar
- Vulnerability
- Exploit
- Attack Vector
- Threat Model
- Smart Contract Audit
- Auditor
- Bug Bounty
- Whitehat
- Blackhat
- Responsible Disclosure
- Zero-day
- CVE
- Incident Response
- Post-mortem
- Principle of Least Privilege
- Defense in Depth
- Key Rotation
- Secrets Management

### Sözleşme açıkları
- Reentrancy Attack
- Integer Overflow and Underflow
- Access Control Vulnerability
- Unchecked External Call
- tx.origin Phishing
- Delegatecall Vulnerability
- Uninitialized Proxy
- Storage Collision
- Timestamp Dependence
- Weak Randomness
- Signature Replay
- Signature Malleability
- Replay Attack
- Gas Griefing
- Griefing
- Denial of Service (DoS)

### Ekonomik ve protokol saldırıları
- Front-running
- Sandwich Attack
- Oracle Manipulation
- Flash Loan Attack
- Governance Attack
- Bridge Exploit
- 51% Attack
- Sybil Attack
- Eclipse Attack
- Long-Range Attack
- Distributed Denial of Service (DDoS)

### Kullanıcıyı hedef alan dolandırıcılıklar
- Rug Pull
- Honeypot Token
- Exit Scam
- Ponzi Scheme
- Phishing
- Wallet Drainer
- Address Poisoning
- Ice Phishing
- Infinite Approval Risk
- Fake Airdrop
- Social Engineering
- SIM Swap
- Front-end Attack (DNS Hijack)
- Supply Chain Attack

### Güvenlik test yöntemleri
- Static Analysis
- Fuzzing
- Invariant Testing
- Symbolic Execution
- Formal Verification

### Gizlilik
- Pseudonymity
- Anonymity Set
- Privacy Coin
- Mixer
- Stealth Address
- Confidential Transactions
- Chain Analysis

## 11. DAO ve Yönetişim (slug: yonetisim)

- Decentralized Autonomous Organization (DAO)
- Governance
- On-chain Governance
- Off-chain Governance
- Governance Proposal
- Improvement Proposal (EIP, BIP)
- Governance Forum
- Temperature Check
- Snapshot Voting
- Governor Contract
- Quorum
- Voting Power
- Vote Delegation
- Delegate
- Token-weighted Voting
- Quadratic Voting
- Quadratic Funding
- Conviction Voting
- Futarchy
- Timelock
- Treasury
- Council
- Veto
- Ragequit
- Vote Buying
- Plutocracy
- Voter Apathy
- Progressive Decentralization
- Public Goods
- Retroactive Public Goods Funding
- Working Group
- DAO Constitution

## 12. Önemli Ağlar ve Protokoller (slug: aglar)

Not: Bu bölüm genel kültür içindir. Her ağ tek terim olarak kalır, alt kavramları ayrı terim yapılmaz. Tarih ve rakam içeren bilgiler "yazıldığı tarih itibarıyla" diye işaretlenir.

- Bitcoin
- Ethereum
- Solana
- BNB Chain
- Polygon
- Avalanche
- Arbitrum
- Optimism
- Base
- zkSync
- Starknet
- Cosmos
- Polkadot
- Cardano
- NEAR
- Aptos
- Sui
- Monad
- Stellar
- TON
- Tron
- XRP Ledger
- Celestia
- EigenLayer
- Chainlink
- Uniswap
- Aave
- Lido
- Curve Finance
- Sky (MakerDAO)
- Tether (USDT)
- USD Coin (USDC)

## 13. Programlama (slug: programlama)

### Temel kavramlar
- Programming Language
- Source Code
- Syntax
- Variable
- Constant
- Data Type
- Integer
- Floating Point
- String
- Boolean
- Array
- List
- Hash Map (Dictionary)
- Tuple
- Struct
- Enum
- Null
- Function
- Parameter
- Argument
- Return Value
- Conditional Statement
- Loop
- Recursion
- Scope (Programlama)
- Mutability
- Generics
- Bit
- Byte
- Binary
- Regular Expression (Regex)
- Serialization
- Deserialization
- Comment (Kod)

### Paradigmalar ve tasarım
- Object-Oriented Programming (OOP)
- Class
- Object
- Method
- Inheritance
- Interface
- Polymorphism
- Encapsulation
- Abstraction
- Functional Programming
- Design Pattern
- Clean Code
- DRY
- KISS
- SOLID
- Boilerplate
- Refactoring
- Technical Debt

### Çalışma zamanı ve bellek
- Compiler
- Compilation
- Interpreter
- Transpiler
- Runtime
- Static Typing
- Dynamic Typing
- Type Safety
- Memory Management
- Garbage Collection
- Pointer
- Reference
- Stack and Heap
- Memory Safety
- Concurrency
- Parallelism
- Thread
- Async/Await
- Promise
- Callback
- Event Loop
- Error Handling
- Exception

### Algoritmalar
- Algorithm
- Data Structure
- Big O Notation
- Time Complexity
- Space Complexity

### Kod organizasyonu
- Library (Yazılım)
- Framework
- SDK
- Module
- Package
- Import
- Dependency
- Open Source
- Open Source License
- Documentation
- Snippet
- Bug
- Debugging

### Diller ve formatlar
- Solidity
- Vyper
- Yul
- Huff
- Rust
- Move
- Cairo
- Noir
- Circom
- Go
- JavaScript
- TypeScript
- Python
- C (Dil)
- C++ {slug: cpp}
- Java
- WebAssembly (WASM)
- HTML
- CSS
- SQL
- JSON
- YAML
- TOML
- Markdown

### Solidity kavramları
- Pragma
- SPDX License Identifier
- Solidity Compiler (solc)
- State Variable
- Visibility
- Data Location
- Modifier
- Mapping
- msg.sender
- msg.value
- tx.origin
- block.timestamp
- require
- revert
- assert
- Custom Error
- Payable
- Fallback Function
- Receive Function
- View Function
- Pure Function
- Library (Solidity)
- Abstract Contract
- Immutable Variable
- unchecked Block
- Inline Assembly
- NatSpec

### Rust kavramları
- Cargo
- Cargo.toml
- Crate
- crates.io
- Cargo Workspace
- rustup
- Toolchain
- Ownership
- Borrowing (Rust)
- Borrow Checker
- Lifetime
- Mutable Reference
- Trait (Rust)
- impl Block
- Pattern Matching
- Option
- Result
- unwrap
- Macro
- Attribute
- Derive
- Closure
- Iterator
- Smart Pointer
- Unsafe Rust
- no_std
- Zero-cost Abstraction
- Clippy
- rustfmt

### Move kavramları
- Resource (Move)
- Abilities (Move)
- Resource-oriented Programming

## 14. Web Geliştirme (slug: web)

### İnternet temelleri
- Internet
- World Wide Web
- Browser
- URL
- Domain Name
- DNS
- IP Address
- HTTP
- HTTPS
- SSL/TLS
- HTTP Request
- HTTP Response
- HTTP Status Code
- HTTP Methods
- Latency
- Cookie
- Session
- Local Storage

### API'ler
- API
- Endpoint
- REST API
- GraphQL
- JSON-RPC
- WebSocket
- Webhook
- API Key
- Rate Limiting
- CORS

### Frontend
- Frontend
- Client (Web)
- DOM
- Virtual DOM
- Component
- Props
- State (Frontend)
- Hook (React)
- Single Page Application (SPA)
- Server-Side Rendering (SSR)
- Static Site Generation (SSG)
- Responsive Design
- Accessibility (a11y)
- SEO
- Design System
- Design Token
- Figma
- React
- Next.js
- Tailwind CSS
- Astro
- Vite
- Module Bundler

### Backend
- Backend
- Server
- Full-stack
- Database
- SQL Database
- NoSQL Database
- PostgreSQL
- ORM
- Query
- Database Index
- Cache
- Authentication
- Authorization
- JWT
- OAuth
- Node.js
- Environment Variable

### Yayınlama
- Hosting
- Deployment
- Cloud Computing
- Serverless
- CDN
- Load Balancer

## 15. Geliştirici Araçları ve Süreçleri (slug: araclar)

### Geliştirme ortamı
- IDE
- Code Editor
- VS Code
- Cursor
- Extension (Eklenti)
- Terminal
- Shell
- Bash
- PowerShell
- Command Line Interface (CLI)
- PATH
- Working Directory
- Operating System
- Linux
- WSL
- Package Manager
- npm
- pnpm
- nvm
- Python Virtual Environment (venv)
- Semantic Versioning

### Git ve GitHub
- Version Control
- Git
- GitHub
- Repository
- README
- .gitignore
- Clone
- Commit
- Commit Message
- Conventional Commits
- Branch
- Main Branch
- Merge
- Merge Conflict
- Rebase
- Cherry-pick
- Diff
- HEAD
- Remote
- Push
- Pull
- Fetch
- Stash
- Tag
- Release
- Fork (Git)
- Pull Request (PR)
- Code Review
- Issue
- GitHub Actions
- Monorepo

### Test ve kalite
- Software Testing
- Unit Test
- Integration Test
- End-to-End Test
- Test Coverage
- Mock
- Fixture
- Test-Driven Development (TDD)
- Linter
- Formatter
- ESLint
- Prettier
- Type Checker
- Debugger
- Breakpoint
- Stack Trace
- Logging
- Monitoring

### Derleme ve dağıtım süreci
- Build
- Build Artifact
- CI/CD
- Environment
- Staging
- Production
- Docker
- Container
- Docker Image
- Virtual Machine (Bilgisayar)

### Blockchain geliştirici araçları
- Hardhat
- Foundry
- Forge
- Cast
- Anvil
- Remix IDE
- OpenZeppelin
- ethers.js
- viem
- wagmi (Kütüphane)
- web3.js
- Anchor Framework
- Scaffold-ETH
- thirdweb
- Tenderly
- Slither
- Echidna
- Local Blockchain
- Mainnet Fork
- Deployment Script
- Gas Reporter

### Altyapı ve veri
- RPC Provider
- RPC Node
- Indexer
- Subgraph
- On-chain Analytics
- Decentralized Storage
- IPFS
- Content Identifier (CID)
- Pinning
- Arweave
- Filecoin

## 16. Yapay Zekâ (slug: yapay-zeka)

### Temeller
- Artificial Intelligence (AI)
- Narrow AI
- Artificial General Intelligence (AGI)
- Turing Test
- Machine Learning (ML)
- Deep Learning
- Neural Network
- Perceptron
- Model (AI)
- Training
- Inference
- Dataset
- Training Data
- Label
- Feature
- Supervised Learning
- Unsupervised Learning
- Reinforcement Learning
- Classification
- Regression
- Clustering
- Overfitting
- Underfitting
- Loss Function
- Gradient Descent
- Backpropagation
- Epoch (ML)
- Batch
- Learning Rate
- Weights
- Parameters
- Hyperparameter
- Tensor
- GPU
- TPU
- CUDA
- Accuracy
- Precision and Recall
- Benchmark
- Computer Vision
- Natural Language Processing (NLP)
- Generative AI
- Generative Adversarial Network (GAN)
- Diffusion Model

### Büyük dil modelleri
- Large Language Model (LLM)
- Small Language Model (SLM)
- Transformer
- Attention Mechanism
- Self-Attention
- Token (AI)
- Tokenizer
- Context Window
- Embedding
- Vector
- Vector Database
- Semantic Search
- Pretraining
- Fine-tuning
- Instruction Tuning
- RLHF
- Constitutional AI
- Foundation Model
- Base Model
- Open-weight Model
- Closed Model
- Mixture of Experts (MoE)
- Distillation
- Quantization
- LoRA
- Local LLM
- Temperature
- Sampling (Top-p, Top-k)
- Max Tokens
- Streaming
- Knowledge Cutoff
- Hallucination
- Grounding
- Multimodal
- Reasoning Model
- Chain of Thought
- Test-time Compute
- Scaling Laws
- Emergent Abilities
- Text-to-Image
- Text-to-Speech (TTS)
- Speech-to-Text (STT)

### Güvenlik ve değerlendirme
- Alignment
- AI Safety
- AI Bias
- Guardrails
- Jailbreak
- Prompt Injection
- Red Teaming
- Evals

### Prompt ve kullanım
- Prompt
- Prompt Engineering
- Context Engineering
- System Prompt
- Zero-shot Prompting
- Few-shot Prompting
- Role Prompting
- Structured Output
- Tool Use (Function Calling)
- LLM API
- Token Pricing
- Prompt Caching
- Memory (AI)
- Retrieval-Augmented Generation (RAG)
- Chunking
- Reranking
- Knowledge Base
- Context Compaction

### Ajanlar ve araçlar
- AI Agent
- Agentic Workflow
- Autonomous Agent
- Multi-agent System
- Subagent
- Orchestration
- Human-in-the-loop
- Model Context Protocol (MCP)
- MCP Server
- Agent Skill
- Slash Command
- Hook (AI Agent)
- Agent Instructions File (CLAUDE.md, AGENTS.md)
- Sandbox
- Computer Use
- Browser Agent
- Coding Agent
- AI Pair Programming
- Code Completion
- Vibecoding
- Copilot
- AI Wrapper
- LangChain
- Hugging Face
- Anthropic
- OpenAI
- Claude {slug: claude-model}
- Claude Code
- ChatGPT
- Gemini
- GitHub Copilot

### Yapay zekâ ve blockchain
- Decentralized AI
- On-chain AI Agent
- zkML
- Verifiable Inference
- AI Oracle
- DePIN
- Decentralized Compute

## 17. Topluluk Kültürü ve Jargon (slug: jargon)

- gm
- gn
- WAGMI
- NGMI
- LFG
- HODL
- FUD
- FOMO
- DYOR
- NFA
- IYKYK
- Wen
- Ser
- Fren
- Anon
- OG
- Normie
- Degen
- Ape In
- Alpha
- Whale
- Diamond Hands
- Paper Hands
- Bagholder
- Rekt
- To the Moon
- Shill
- Pump
- Dump
- Exit Liquidity
- Ponzinomics
- Vaporware
- Narrative
- Meta (Trend)
- Altseason
- Maximalist (Maxi)
- Based
- Cope
- Probably Nothing
- Touch Grass
- Crypto Twitter (CT)
- KOL (Key Opinion Leader)
- Airdrop Farming
- Doxxing
- Cypherpunk
- Build in Public
- Ship It
- Regen

## 18. Hackathon, Ürün ve Girişim (slug: hackathon)

### Hackathon
- Hackathon
- Hacker (Hackathon)
- Track
- Bounty
- Prize Pool
- Judge
- Judging Criteria
- Mentor
- Workshop
- Submission
- Demo
- Demo Video
- Demo Day
- Pitch
- Pitch Deck
- Elevator Pitch

### Ürün geliştirme
- Problem Statement
- Use Case
- User Story
- User Persona
- Target User
- Minimum Viable Product (MVP)
- Proof of Concept (PoC)
- Prototype
- Wireframe
- Mockup
- User Interface (UI)
- User Experience (UX)
- User Flow
- Onboarding
- User Testing
- Roadmap
- Litepaper
- Project Scope
- Feature Creep
- Backlog
- Agile
- Scrum
- Sprint
- Kanban
- Prior Art
- Competitor Analysis
- Key Performance Indicator (KPI)
- Traction

### Girişim ve finansman
- Startup
- Founder
- Co-founder
- Product-Market Fit (PMF)
- Go-to-Market (GTM)
- Accelerator
- Incubator
- Venture Capital (VC)
- Angel Investor
- Pre-seed
- Seed Round
- Series A
- Valuation
- Equity
- Cap Table
- SAFE
- Grant
- Ecosystem Fund
- Ambassador Program
- Developer Relations (DevRel)

## 19. Piyasa, Borsa ve Regülasyon (slug: piyasa)

### Borsa ve alım satım
- Exchange
- Centralized Exchange (CEX)
- Order Book
- Market Order
- Limit Order
- Stop-loss
- Maker and Taker
- Market Maker
- Bid and Ask
- Spread
- Liquidity
- Market Depth
- Trading Volume
- Spot Trading
- Futures
- Candlestick Chart
- Technical Analysis
- Fundamental Analysis
- Volatility
- Market Capitalization
- Bitcoin Dominance
- Fear and Greed Index
- Bull Market
- Bear Market
- Crab Market
- All-Time High (ATH)
- All-Time Low (ATL)
- Buy the Dip
- Dollar-Cost Averaging (DCA)
- Portfolio
- Diversification
- Wash Trading
- Pump and Dump
- Bank Run

### Fiat ve saklama
- Fiat
- On-ramp
- Off-ramp
- P2P Trading
- Custody
- Custodian
- Proof of Reserves
- Crypto ETF
- Central Bank Digital Currency (CBDC)

### Regülasyon
- KYC
- AML
- Travel Rule
- Sanctions (OFAC)
- MiCA
- SEC
- Howey Test
- Regulatory Sandbox
- Crypto Taxation
- SPK (Sermaye Piyasası Kurulu)
- Kripto Varlık Hizmet Sağlayıcı (KVHS)
