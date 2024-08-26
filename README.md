# Blockchain Simulation with AI-Enhanced Proof of Work

## Overview

This project is a web-based blockchain simulation tool that allows users to interact with a simplified blockchain, visualize the mining process, and explore transactions. The simulation features both traditional Proof of Work (PoW) and an AI-enhanced PoW mechanism. The AI-enhanced PoW uses a heuristic AI method to potentially improve the efficiency of the mining process. This tool is designed for educational purposes, enabling users to understand the fundamental concepts of blockchain technology and mining.

## Features

- **Blockchain Visualization**: Users can visualize the blockchain, including blocks, transactions, and wallets.
- **Mining Options**: The tool provides options to mine using traditional PoW or the AI-enhanced PoW.
- **Transaction Management**: Users can create wallets, initiate transactions, and see how these transactions are added to the blockchain.
- **Mining Simulation**: A detailed simulation of the mining process is displayed, showing the nonce, hash, and other relevant information.
- **Language Support**: The app supports multiple languages, including English and Indonesian.

## Technology Stack

- **Frontend**: Vue.js with Nuxt.js
- **Backend**: Node.js
- **Styling**: Tailwind CSS
- **Icons**: FontAwesome
- **AI Algorithm**: Simple heuristic-based AI integrated into the blockchain mining process

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or Yarn package manager

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/IbrahimDayax/blockchain-simulation-app.git
   cd blockchain-simulation-app

2. **Install dependencies:**
   - Using npm:
     ```bash
     npm install
   - Or using Yarn:
    ```bash
    yarn install

3. *Run the development server:*
   ```bash
   npm run dev

4. *Open the app:* Open your web browser and navigate to http://localhost:3000 to access the blockchain simulation tool.

## Usage

### Creating a Wallet
1. Navigate to the "Wallets" tab.
2. Click on the "New" button to create a new wallet.
3. Enter a name for your wallet. The app will automatically generate a public and private key for you.

### Making a Transaction
1. Go to the "New Transaction" tab.
2. Select a wallet as the sender.
3. Enter the recipient's address and the amount to send.
4. Confirm the transaction, which will then appear in the "Pending" transactions list.

### Mining
1. Navigate to the "Pending" tab where you will see the pending transactions.
2. You can choose to mine the transactions using either the traditional PoW or AI-enhanced PoW.
3. Click "Start Mining" or "Start AI Mining" to initiate the mining process.
4. The mining visualizer will display the progress, including the nonce, hash, and time elapsed.

## Understanding the AI-Enhanced PoW
- *AI Heuristic Mining:* The AI-enhanced PoW method introduces randomness into the mining process, making heuristic guesses to find the correct nonce faster. This method is experimental and demonstrates how AI can be integrated into blockchain technology.

## File Structure
- /components: Vue.js components for the frontend.
- /lib: Core blockchain logic including blockchain, block, transaction, and AI-enhanced PoW code.
- /pages: Nuxt.js pages for routing.
- /static: Static files such as images and JSON data.
- /locales: Localization files for multi-language support.
- nuxt.config.js: Nuxt.js configuration file.
- tailwind.config.js: Tailwind CSS configuration file.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.


   




