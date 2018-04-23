// web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:8545"));
// web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io'"));
// window.web3 = new Web3(window.web3 ? window.web3.currentProvider : new Web3.providers.HttpProvider('https://ropsten.infura.io'))
// const abi = JSON.parse(
//   '[{"constant":false,"inputs":[{"name":"xname","type":"string"},{"name":"xtimeIn","type":"string"},{"name":"xtimeOut","type":"string"}],"name":"addTimeIn","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"xhash","type":"bytes32"},{"name":"ytimeOut","type":"string"}],"name":"updateTimeOut","outputs":[{"name":"","type":"bytes32"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"xhash","type":"bytes32"}],"name":"getTime","outputs":[{"name":"xname","type":"string"},{"name":"xtimeIn","type":"string"},{"name":"xtimeOut","type":"string"}],"payable":false,"stateMutability":"view","type":"function"}]'
// );

// const BlueBookContract = web3.eth.contract(abi);
// console.log(abi);

// //get from node using contractInstance.address
// const contractInstance = BlueBookContract.at(
//   '0x43746455e8e78EAfD0fe4267549857aCfFD5e669'
// );

// function addTimeIn(personName, persontimeIn) {
 
//   // const persontimeIn = "8:00:00";
//   const persontimeOut = "18:00:00";
//   console.log(personName);

//   contractInstance.addTimeIn(personName,persontimeIn,persontimeOut,{from: web3.eth.accounts[0]},
//     function(error, result) {
//       //get hashed value from the blockchain
//       if (!error){
//         let hashed = contractInstance.addTimeIn.call(personName, persontimeIn, persontimeOut, function(error,result) {
//           if(!error) {
//             console.log(result)
//           }
//         });
//         console.log(result);
//       }
//     }
//   );
// }

// export default addTimeIn;

// function updateTimeOut(personName) {
//   var currentHash;
//   persontimeOut = $("#time").html();
//   console.log(persontimeOut);

//   $.post(
//     "gethash.php",
//     {
//       "fb-name": personName
//     },
//     function(info) {
//       currentHash = info;
//       console.log(currentHash);

//       contractInstance.updateTimeOut(
//         currentHash,
//         persontimeOut,
//         {
//           from: web3.eth.accounts[0]
//         },
//         function() {
//           hashed = contractInstance.updateTimeOut
//             .call(currentHash, persontimeOut)
//             .toString();
//           console.log(hashed);

//           outputNew = contractInstance.getTime.call(hashed).toString();
//           outputOld = contractInstance.getTime.call(currentHash).toString();
//           console.log(currentHash);
//           console.log(outputOld);
//           console.log(outputNew);
//         }
//       );
//     }
//   );
// }

// function getTime(personName) {

  // testHash = '0x9ed53091d05cdb4a128e22af068abf1c19958f0ec057a7cd3028955962074224';

  // $.post(
  //   "gethash.php",
  //   {
  //     "fb-name": personName
  //   },
  //   function(info) {
  //     currentHash = info;
  //     console.log(currentHash);

  //     // output = contractInstance.getTime.call(testHash).toString();
  //     // console.log(output);
  //     // alert(output);
  //     console.log(testHash)
  //     contractInstance.getTime.call("0x4c38f3192b6a55e8af1249952ccc19cea0c6cf9f68170228124ac144c2e4ebd6", function(error, result){
  //       if(!error)
  //         console.log(result)
  //       else
  //         console.error(error);
  //     });
  //   }
  // );
// }
