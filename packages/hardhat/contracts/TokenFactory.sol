pragma solidity >=0.6.0 <0.9.0;
// SPDX-License-Identifier: GPL-3.0

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


// Create the template ERC20 token

contract TokenTemplate is ERC20 {
    constructor(uint totalSupply, string memory name, string memory symbol) ERC20(name, symbol) public {
        _mint(tx.origin, totalSupply);
    }
}


contract TokenFactory {

    event Create(address _Address, uint TotalSupply, string name, string symbol);

    function create(uint totalSupply, string memory name, string memory symbol) public {

        TokenTemplate tokenTemplate = new TokenTemplate(totalSupply, name, symbol);
        emit Create(address(tokenTemplate), totalSupply, name, symbol);
        console.log(totalSupply, name, symbol);
    }

}
