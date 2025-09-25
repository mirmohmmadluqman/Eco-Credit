# EcoCredit

[![Solidity](https://img.shields.io/badge/Solidity-^0.8.20-blue)](https://soliditylang.org/)
[![Ethereum](https://img.shields.io/badge/Ethereum-ERC--20-green)](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)
[![OpenZeppelin](https://img.shields.io/badge/OpenZeppelin-Contracts-v4.x-orange)](https://openzeppelin.com/contracts/)

EcoCredit is an ERC-20 token smart contract designed for tokenized carbon credits, making global offsetting transparent, secure, and accessible. Built on Ethereum, it extends the standard ERC-20 with features like role-based minting for verified emissions reductions, transfer fees to fund green projects, and a rescue mechanism to prevent token loss (a common ERC-20 gotcha). 

Inspired by the need for real-world utility in blockchain—think verifiable CO2 offsets for your daily commute or corporate ESG compliance—this contract could be the building block for a decentralized carbon market. Deploy it, mint credits via trusted verifiers (e.g., NGOs with Chainlink oracles), and let users burn tokens to retire offsets permanently.

## 🚀 Features

- **Fungible ERC-20 Base**: Standard transfers, balances, approvals (1 ECO = 1 ton CO₂ offset).
- **Secure Minting**: Only `VERIFIER_ROLE` holders can mint, with a `verificationId` for audit trails.
- **Transfer Fees**: 0.1% skimmed to a community treasury—opt-out for burns to keep it fair.
- **Burnable & Pausable**: Retire credits forever; pause in emergencies.
- **Token Rescue**: Admin-only function to recover stuck ERC-20s (fixes the ~$80M loss issue from ethereum.org).
- **Gas Optimized**: Uses Solidity 0.8+ safe math, custom errors, and OpenZeppelin for battle-tested security.
- **Extensible**: Ready for upgrades (UUPS proxy) and integrations (e.g., Uniswap for liquidity, TheGraph for indexing).

## 🛠️ Tech Stack

- **Language**: Solidity ^0.8.20
- **Dependencies**: 
  - [@openzeppelin/contracts](https://github.com/OpenZeppelin/openzeppelin-contracts) (ERC20, Burnable, Pausable, AccessControl)
- **Testing/Deployment**: Hardhat recommended (scripts included in future updates).
- **Standards**: ERC-20 (EIP-20), with nods to ERC-777 for safe transfers.

## 📦 Quick Start

### Prerequisites
- Node.js v16+ and npm/yarn.
- Hardhat or Foundry for local dev.
- MetaMask or similar for testnet deploys.
- Infura/Alchemy API key for Ethereum RPC.

### Installation
1. Clone the repo:
   ```
   git clone https://github.com/mirmohmmadluqman/Eco-Credit.git
   cd Eco-Credit
   ```
2. Install deps:
   ```
   npm init -y
   npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox @openzeppelin/contracts
   npx hardhat init  # Choose JavaScript project
   ```
3. Copy `contracts/EcoCredit.sol` into your `contracts/` folder (it's already here if you uploaded it right).

### Deployment
Run the deploy script (create `scripts/deploy.js` if not present):
```javascript
const hre = require("hardhat");

async function main() {
  const initialSupply = hre.ethers.parseEther("1000000"); // 1M tons initial
  const treasury = "0xYourMultisigTreasuryAddress"; // Update this!

  const EcoCredit = await hre.ethers.getContractFactory("EcoCredit");
  const eco = await EcoCredit.deploy(initialSupply, treasury);
  await eco.waitForDeployment();

  console.log("EcoCredit deployed to:", await eco.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
```
Deploy to Sepolia testnet:
```
npx hardhat run scripts/deploy.js --network sepolia
```
(Configure `hardhat.config.js` with your RPC and private key—never commit secrets!)

### Usage
Interact via Ethers.js or Web3.py. Example (Python, adapted from ethereum.org docs):

```python
from web3 import Web3

w3 = Web3(Web3.HTTPProvider("https://sepolia.infura.io/v3/YOUR_KEY"))
eco_address = "0xYourDeployedAddress"
abi = [...]  # From artifacts/contracts/EcoCredit.json

eco = w3.eth.contract(address=eco_address, abi=abi)
account = w3.eth.account.from_key("YOUR_PRIVATE_KEY")

# Check balance
balance = eco.functions.balanceOf(account.address).call()
print(f"Balance: {w3.from_wei(balance, 'ether')} ECO")

# Transfer 10 ECO (net ~9.99 after fee)
tx = eco.functions.transfer("0xRecipient", w3.to_wei(10, 'ether')).build_transaction({
    'from': account.address, 'gas': 200000, 'nonce': w3.eth.get_transaction_count(account.address)
})
signed = w3.eth.account.sign_transaction(tx, "YOUR_PRIVATE_KEY")
w3.eth.send_raw_transaction(signed.rawTransaction)
```

For minting (as verifier):
```python
# Grant role first via admin
tx = eco.functions.mint(account.address, w3.to_wei(100, 'ether'), "Verra-Cert-123").build_transaction({...})
# Sign & send...
```

Burn to offset:
```python
tx = eco.functions.burn(w3.to_wei(5, 'ether')).build_transaction({...})
```

## 🧪 Testing
Basic Hardhat tests in `test/EcoCredit.js` (add if missing):
```javascript
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("EcoCredit", function () {
  let eco, owner, verifier, user;

  beforeEach(async function () {
    [owner, verifier, user] = await ethers.getSigners();
    const EcoCredit = await ethers.getContractFactory("EcoCredit");
    eco = await EcoCredit.deploy(ethers.parseEther("1000"), owner.address);
    await eco.grantRole(await eco.VERIFIER_ROLE(), verifier.address);
  });

  it("Should mint and transfer correctly", async function () {
    await eco.connect(verifier).mint(user.address, ethers.parseEther("100"), "Test-ID");
    expect(await eco.balanceOf(user.address)).to.equal(ethers.parseEther("100"));
  });
});
```
Run: `npx hardhat test`

## 🔒 Security & Best Practices
- **Audits**: Use Slither or MythX before mainnet. OpenZeppelin contracts are audited.
- **Roles**: Deployer gets admin/verifier/pauser—transfer to multisig ASAP.
- **Upgrades**: Extend with UUPS proxy for future features (e.g., oracle minting).
- **Common Pitfalls Avoided**: No self-transfers; SafeERC20 for rescues; events for all actions.
- **Gas Tips**: Fees are basis points—tweak `FEE_BASIS_POINTS` if needed, but test impacts.

## 🤝 Contributing
Fork it(but check liscense), Open issues for bugs/features. Let's make carbon credits composable with DeFi.

1. Fork the repo.
2. Create your branch (`git checkout -b feature/AmazingFeature`).
3. Commit (`git commit -m "Add some AmazingFeature"`).
4. Push (`git push origin feature/AmazingFeature`).
5. Open a PR.
(But not for use, check liscense)

## 📄 License
Check license, 

## 📞 Contact
Built by a solo dev tinkering with sustainable blockchain.
X/Twitter: @mirmohmadluqman
Github: Same(@mirmohmmadluqman)
Email: 0x867012e82708278fbda998030ace0aa9f14fd83e@dmail.ai

---

*Deployed on Sepolia: 
*Inspired by ethereum.org, Mastering Ethereum, and OpenZeppelin docs.*  
*Last updated: September 25, 2025*
