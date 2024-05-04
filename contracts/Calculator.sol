// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract Calculator {
    function calculate(
        uint256 x,
        bytes32 operator,
        uint256 y
    ) public pure returns (uint256) {
        if(operator == keccak256(abi.encodePacked("+"))) {
            return (x + y);
        } else if(operator == keccak256(abi.encodePacked("-"))) {
            return (x - y);
        } else if(operator == keccak256(abi.encodePacked("*"))) {
            return (x * y);
        } else if(operator == keccak256(abi.encodePacked("/"))) {
            return (x / y);
        } else if(operator == keccak256(abi.encodePacked("^"))) {
            return (x ** y);
        } else {
            return 0;
        }
    }
}
