// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract MedicineTracker {

    // =========================
    // PRODUCT STRUCT
    // =========================
    struct Product {

        string name;
        string serialNumber;

        address manufacturer;

        uint256 timestamp;
    }

    // =========================
    // SHIPMENT STRUCT
    // =========================
    struct Shipment {

        string status;

        string location;

        address updatedBy;

        uint256 updatedAt;
    }

    // =========================
    // STORAGE
    // =========================
    mapping(string => Product)
        public products;

    mapping(string => Shipment)
        public shipments;

    // =========================
    // EVENTS
    // =========================
    event ProductAdded(

        string serialNumber,

        string name,

        address manufacturer,

        uint256 timestamp
    );

    event ShipmentUpdated(

        string serialNumber,

        string status,

        string location,

        address updatedBy,

        uint256 updatedAt
    );

    // =========================
    // ADD PRODUCT
    // =========================
    function addProduct(

        string memory _name,

        string memory _serialNumber

    ) public {

        products[_serialNumber] = Product({

            name: _name,

            serialNumber: _serialNumber,

            manufacturer: msg.sender,

            timestamp: block.timestamp
        });

        emit ProductAdded(

            _serialNumber,

            _name,

            msg.sender,

            block.timestamp
        );
    }

    // =========================
    // UPDATE SHIPMENT
    // =========================
    function updateShipment(

        string memory _serialNumber,

        string memory _status,

        string memory _location

    ) public {

        shipments[_serialNumber] = Shipment({

            status: _status,

            location: _location,

            updatedBy: msg.sender,

            updatedAt: block.timestamp
        });

        emit ShipmentUpdated(

            _serialNumber,

            _status,

            _location,

            msg.sender,

            block.timestamp
        );
    }

    // =========================
    // GET PRODUCT
    // =========================
    function getProduct(

        string memory _serialNumber

    )

        public
        view

        returns (

            string memory,

            string memory,

            address,

            uint256
        )

    {

        Product memory p =
            products[_serialNumber];

        return (

            p.name,

            p.serialNumber,

            p.manufacturer,

            p.timestamp
        );
    }

    // =========================
    // GET SHIPMENT
    // =========================
    function getShipment(

        string memory _serialNumber

    )

        public
        view

        returns (

            string memory,

            string memory,

            address,

            uint256
        )

    {

        Shipment memory s =
            shipments[_serialNumber];

        return (

            s.status,

            s.location,

            s.updatedBy,

            s.updatedAt
        );
    }
}