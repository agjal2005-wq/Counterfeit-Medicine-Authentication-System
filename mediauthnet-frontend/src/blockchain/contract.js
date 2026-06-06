// export const contractAddress =
//   "0x5FbDB2315678afecb367f032d93F642f64180aa3";

// export const contractABI = [
//   {
//     "inputs": [
//       {
//         "internalType": "string",
//         "name": "_name",
//         "type": "string"
//       },
//       {
//         "internalType": "string",
//         "name": "_serialNumber",
//         "type": "string"
//       }
//     ],
//     "name": "addProduct",
//     "outputs": [],
//     "stateMutability": "nonpayable",
//     "type": "function"
//   }
// ];



export const contractAddress =
  "0x5FbDB2315678afecb367f032d93F642f64180aa3";

export const contractABI = [

  // =========================
  // ADD PRODUCT
  // =========================
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_serialNumber",
        "type": "string"
      }
    ],
    "name": "addProduct",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },

  // =========================
  // UPDATE SHIPMENT
  // =========================
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_serialNumber",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_status",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_location",
        "type": "string"
      }
    ],
    "name": "updateShipment",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },

  // =========================
  // GET PRODUCT
  // =========================
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_serialNumber",
        "type": "string"
      }
    ],
    "name": "getProduct",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },

  // =========================
  // GET SHIPMENT
  // =========================
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_serialNumber",
        "type": "string"
      }
    ],
    "name": "getShipment",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
];