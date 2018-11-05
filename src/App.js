import React, { Component } from 'react';
import Web3 from 'web3';


// import abi from './abi';
var orsTokenAbi = [{ "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "approve", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_value", "type": "uint256" }], "name": "burn", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "burnFrom", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_subtractedValue", "type": "uint256" }], "name": "decreaseApproval", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "finishMinting", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_spender", "type": "address" }, { "name": "_addedValue", "type": "uint256" }], "name": "increaseApproval", "outputs": [{ "name": "success", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_amount", "type": "uint256" }], "name": "mint", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "pause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [], "name": "unpause", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "name": "_cap", "type": "uint256" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [], "name": "Pause", "type": "event" }, { "anonymous": false, "inputs": [], "name": "Unpause", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "amount", "type": "uint256" }], "name": "Mint", "type": "event" }, { "anonymous": false, "inputs": [], "name": "MintFinished", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "previousOwner", "type": "address" }, { "indexed": true, "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "burner", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Burn", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" }], "name": "allowance", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "name": "_owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "cap", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "mintingFinished", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "paused", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }]
var paymentInORSAbi = [{ "constant": false, "inputs": [{ "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" }], "name": "acceptAndTransfer", "outputs": [{ "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "_address", "type": "address" }], "name": "setORSTokenContractAddress", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "previousOwner", "type": "address" }, { "indexed": true, "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }]
var acceptETHAbi = [{ "constant": false, "inputs": [], "name": "sendETH", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function" }, { "constant": false, "inputs": [{ "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "anonymous": false, "inputs": [{ "indexed": false, "name": "", "type": "address" }, { "indexed": false, "name": "", "type": "uint256" }], "name": "SendEvent", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "name": "previousOwner", "type": "address" }, { "indexed": true, "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }]

const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
let data = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isConnected: false,
      payType: '',
      amount: 0,
      selectedAddress: "",
      selectedBalance: 0,
      paymentInORSContractAddress: "0x689c2eddc5c6329520e35e335501b6ee962ccf45",
      orsTokenContractAddress: "0xd33fab6740e525ed6f7376e2c419a719e3435019",
      acceptETHContractAddress: "0x3222421afaea99a22be81e06da8e8b710aa04e6a",
      customerTxHash: "",
      customerTxStatus: "",
      adminTxHash: "",
      adminTxStatus: "",
      orsTokenContractOwnerAddress: "0xf17f52151EbEF6C7334FAD080c5704D77216b732",
      paymentInORSContractOwnerAddress: "0xf17f52151EbEF6C7334FAD080c5704D77216b732",
      acceptEthOwnerAddress: "0xf17f52151EbEF6C7334FAD080c5704D77216b732",
      data: [],
      orsTokenBalance: 0,
      orsETHBalance: 0
    }
    this.onPayTypeChanged = this.onPayTypeChanged.bind(this);

  };

  componentWillMount() {
    console.log(web3);
    var getThis = this;
    web3.eth.net.isListening()
      .then(response => {
        if (response) {
          var address = ""
          web3.eth.getAccounts().then(accounts => {
            address = accounts[0];
            this.setState({
              isConnected: true,
              selectedAddress: address
            }, () => {
              var orsTokenInstance = new web3.eth.Contract(orsTokenAbi, this.state.orsTokenContractAddress);
              console.log("orsTokenInstance", orsTokenInstance)

              orsTokenInstance.methods.balanceOf(this.state.orsTokenContractOwnerAddress).call()
                .then(function (result) {
                  getThis.setState({ orsTokenBalance: result });
                })
              web3.eth.getBalance(this.state.orsTokenContractOwnerAddress)
                .then(function (result) {
                  result = web3.utils.fromWei(result, 'ether');
                  getThis.setState({ orsETHBalance: result });
                })
            });

          });
          // console.log(address);

        }
      })
  }

  handleBalance() {
    console.log('Getting total supply...');
    var getThis = this;
    if (this.state.payType === "ORS") {

      var orsTokenInstance;

      orsTokenInstance = new web3.eth.Contract(orsTokenAbi, this.state.orsTokenContractAddress);
      console.log("orsTokenInstance", orsTokenInstance)

      orsTokenInstance.methods.balanceOf(this.state.selectedAddress).call()
        .then(function (result) {
          getThis.setState({ selectedBalance: result });
        })
    }
    else {
      web3.eth.getBalance(this.state.selectedAddress)
        .then(function (result) {
          // console.log(result);
          result = web3.utils.fromWei(result, 'ether');
          getThis.setState({ selectedBalance: result });
        })
    }
  }

  handleApprove = event => {
    var getThis = this;
    event.preventDefault();

    if (this.state.payType === 'ORS') {

      var amount = getThis.state.amount;

      var orsTokenInstance = new web3.eth.Contract(orsTokenAbi, this.state.orsTokenContractAddress);

      var spender = this.state.paymentInORSContractAddress;
      // console.log(spender);

      orsTokenInstance.events.Approval()
        .on('data', function (event) {
          console.log("event", event);
        })
        .on('changed', function (event) {
          // remove event from local database
          // console.log("event changed", event);

        })
        .on('error', console.error);


      orsTokenInstance.methods.approve(spender, amount).send({ from: this.state.selectedAddress })
        .on('transactionHash', function (hash) {
          getThis.setState({ customerTxHash: hash });
        })
        .on('receipt', function (receipt) {
          console.log("receipt", receipt.events.Approval.returnValues[0])
          getThis.setState({ customerTxStatus: (receipt.status) ? "Success" : "Failed" }, () => {
            console.log('setState');

            data.push({
              "number": (data.length > 0) ? (parseInt(data[data.length - 1].number) + 1) : 1,
              "from": receipt.events.Approval.returnValues[0],
              "tokens": receipt.events.Approval.returnValues[2]
            })
            console.log("data", data);
            getThis.setState({ data: data })

          });



        })
        .on('error', console.error);
    }
    else {
      var acceptETHInstance = new web3.eth.Contract(acceptETHAbi, this.state.acceptETHContractAddress);
      console.log(this.state.amount);
      acceptETHInstance.methods.sendETH().send({ from: this.state.selectedAddress, value: this.state.amount.toString() })
        .on('transactionHash', function (hash) {
          getThis.setState({ customerTxHash: hash });
        })
        .on('receipt', function (receipt) {
          console.log("ETH receipt:", receipt);
        });
    }
  }

  handleTransfer(from, tokens) {
    var getThis = this;
    console.log("from:", from, ', token:', tokens)

    var amount = tokens
    var fromAddress = from;
    // var toAddress = $('#TTTransferToAddress').val();

    var paymentInstance = new web3.eth.Contract(paymentInORSAbi, this.state.paymentInORSContractAddress);
    paymentInstance.methods.acceptAndTransfer(fromAddress, this.state.orsTokenContractOwnerAddress, amount)
      .send({ from: this.state.orsTokenContractOwnerAddress })
      .on('transactionHash', function (hash) {
        console.log("transfer hash:", hash)
        getThis.setState({ adminTxHash: hash });
      })
      .on('receipt', function (receipt) {
        console.log("transfer receipt:", receipt);
        getThis.setState({ adminTxStatus: (receipt.status) ? "Success" : "Failed" })
      })
      .on('error', console.log);

  }

  onPayTypeChanged(event) {
    this.setState({
      payType: event.target.value,
      amount: (event.target.value === 'ORS') ? 10 : web3.utils.fromWei("1000000000000000", 'ether')
    }, () => {
      this.handleBalance();
    });

  }

  render() {
    return (
      <div id="content">
        <div className="row" >
          <div className="col-xs-6 col-sm-12 col-md-6">
            <div className="react-grid-item _full-width double-width   cssTransforms  " >
              <div className="container">
                <div className="row">
                  <div className="col-xs-6 col-sm-12 col-md-6">
                    <h1 className="text-center">Customer</h1>
                    <hr />
                    <br />
                    <div className="form-group">
                      <label className="radio-inline">
                        <input type="radio" name="paytype"
                          value="ORS"
                          checked={this.state.payType === "ORS"}
                          onChange={this.onPayTypeChanged} />ORS
                                  </label>
                      <label className="radio-inline">
                        <input type="radio" name="paytype"
                          value="ETH"
                          checked={this.state.payType === "ETH"}
                          onChange={this.onPayTypeChanged} />ETH
                                  </label>
                    </div>
                    <div className="row">
                      <div className="form-group">
                        <strong>Amount to pay: {(this.state.payType === 'ORS') ? this.state.amount : this.state.amount.toString()} {this.state.payType}</strong>
                      </div>

                      <div className="container-form">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>First name <em>*</em> </label>
                              <input className="form-control" type="text" name="firstname" placeholder="First name" required="" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Last name <em>*</em> </label>
                              <input className="form-control" type="text" name="lastname" placeholder="Last name" required="" />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Email Address <em>*</em> </label>
                              <input className="form-control" type="text" name="email" placeholder="Email address" required="" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Mobile Number <em>*</em> </label>
                              <input className="form-control" type="text" name="mobile" placeholder="Mobile Number" required="" />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Address</label>
                              <input className="form-control" type="text" name="address" placeholder="Address" required="" />
                            </div></div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>State</label>
                              <input className="form-control" type="text" name="state" placeholder="State" required="" />
                            </div>

                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>City</label>
                              <input className="form-control" type="text" name="city" placeholder="City" required="" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-group">
                              <label>Zip</label>
                              <input className="form-control" type="text" name="code" placeholder="Zip" required="" />
                            </div>
                          </div>
                        </div>

                      </div>

                      <div className="userSignedIn" >

                        <div className="form-group">
                          <label>Pay from</label>
                          <div className="valueFieldRO">
                            <span className="remaining">
                              {this.state.selectedAddress} ({this.state.selectedBalance.toString()} {this.state.payType})
                          </span></div>

                        </div>
                        <div className="form-group">
                          <label>Pay to ORS</label>
                          <div className="valueFieldRO">
                            {this.state.orsTokenContractOwnerAddress}
                          </div>
                        </div>
                        <div className="text-right">
                          <button className="btn btn-default pull-left">Cancel</button>
                          <button className="btn btn-primary btn-main " onClick={this.handleApprove}>Make Payment</button>


                        </div>
                        <div className="transactionStatus" style={{ marginTop: '15px' }}>
                          Transaction Status:<span className="status success"> {this.state.customerTxStatus}</span><br />
                          Transaction Hash: <a href="#" target="_blank"> {this.state.customerTxHash}</a>
                        </div>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xs-6 col-sm-12 col-md-6">
            <div className="react-grid-item _full-width double-width   cssTransforms  " >
              <div className="container">
                <div className="row">
                  <div className="col-xs-6 col-sm-12 col-md-6">
                    <h1 className="text-center">CH Admin</h1>
                    <strong>Admin Address:</strong> {this.state.orsTokenContractOwnerAddress} <br/>
                    <strong>ORS Balance:</strong> {this.state.orsTokenBalance} ORS<br/>
                    <strong>ETH Balance:</strong> {this.state.orsETHBalance} ETH
                    <hr />
                    <br />
                    <div className="row">
                      <div className="col-md-12">
                        <div className="panel-body">
                          <div className="transactionStatus" style={{ marginTop: '15px' }}>
                            Transaction Status:<span className="status success"> {this.state.adminTxStatus}</span><br />
                            Transaction Hash: <a href="#" target="_blank"> {this.state.adminTxHash}</a>
                          </div>
                          <br />
                          <table className="table table-bordered">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>From</th>
                                <th>Tokens</th>
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>

                              {this.state.data.map(d => {
                                return (<tr key={d.number}>
                                  <td>{d.number}</td>
                                  <td>{d.from}</td>
                                  <td>{d.tokens}</td>
                                  <td>
                                    <button onClick={() => this.handleTransfer(d.from, d.tokens)}>Transfer</button>
                                  </td>
                                </tr>
                                )
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}
export default App;