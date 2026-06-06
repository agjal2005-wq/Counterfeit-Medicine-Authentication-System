// async function main() {

//     const Lock =
//         await ethers.getContractFactory(
//             "Lock"
//         );

//     console.log(
//         "Deploying contract..."
//     );

//     const lock =
//         await Lock.deploy();

//     await lock.waitForDeployment();

//     console.log(
//         "Contract deployed to:",
//         await lock.getAddress()
//     );
// }

// main().catch((error) => {
//     console.error(error);
//     process.exitCode = 1;
// });



async function main() {

    // GET CONTRACT
    const MedicineTracker =
        await ethers.getContractFactory(
            "MedicineTracker"
        );

    console.log(
        "Deploying MedicineTracker contract..."
    );

    // DEPLOY CONTRACT
    const medicineTracker =
        await MedicineTracker.deploy();

    // WAIT FOR DEPLOYMENT
    await medicineTracker.waitForDeployment();

    // GET CONTRACT ADDRESS
    const contractAddress =
        await medicineTracker.getAddress();

    console.log(
        "Contract deployed to:",
        contractAddress
    );
}

main().catch((error) => {

    console.error(error);

    process.exitCode = 1;
});