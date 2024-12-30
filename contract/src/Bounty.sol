// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract CryptoBounty {
    mapping(address => uint256) public totalBounties;
    mapping(string => address) public bountySetters;
    mapping(address => mapping(string => uint8)) public bountyRewarded;
    
    event BountySet(address indexed setter, string blob_id, uint8 reward);
    event BountyGranted(address indexed from, address indexed to, string blob_id, uint8 reward);
    
    function setBounty(string memory _blob_id, uint8 _reward) public {
        require(_reward > 0, "Reward must be greater than 0");
        require(bountyRewarded[msg.sender][_blob_id] == 0, "Bounty already set for this blob_id");
        
        bountyRewarded[msg.sender][_blob_id] = _reward;
        bountySetters[_blob_id] = msg.sender;
        emit BountySet(msg.sender, _blob_id, _reward);
    }
    
    function grantBounty(address _address, string memory _blob_id) public payable {
        require(_address != address(0), "Invalid address");
        require(_address != msg.sender, "Cannot grant bounty to self");
        require(msg.sender == bountySetters[_blob_id],"You cannot grant bounty!");

        uint8 reward = bountyRewarded[msg.sender][_blob_id];
        require(reward > 0, "No bounty set for this blob_id");
        require(msg.value == reward * 1 ether, "Incorrect bounty amount sent");
        
        totalBounties[msg.sender] -= reward;
        totalBounties[_address] += reward;

        bountyRewarded[msg.sender][_blob_id] = 0;

        (bool sent, ) = _address.call{value: msg.value}("");
        require(sent, "Failed to send bounty");
        
        emit BountyGranted(msg.sender, _address, _blob_id, reward);
    }
    
    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function getMyRewardBalance() public view returns(uint256){
        return totalBounties[msg.sender];
    }

}