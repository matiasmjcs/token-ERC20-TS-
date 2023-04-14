// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract tokenERC20 {
    address public owner;
    string public texto = "hola q tal";
    uint8 public informacion = 10;

    function changeTexto(string memory _newText) public {
        texto = _newText;
    } 

    function changeInfo(uint8  _newInfo)public {
        informacion = _newInfo;
    } 
    constructor() {
        owner = msg.sender;
    }
}
