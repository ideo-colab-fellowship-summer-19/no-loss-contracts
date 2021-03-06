var Pool = artifacts.require("../contracts/Pool.sol");
var FixidityLib = artifacts.require('FixidityLib.sol')
var SortitionSumTreeFactory = artifacts.require('SortitionSumTreeFactory.sol')
module.exports = function (deployer) {
  deployer.deploy(FixidityLib).then(
    () => {
      deployer.deploy(SortitionSumTreeFactory)
    }
  ).then(
    () => {
      deployer.link(SortitionSumTreeFactory, Pool)
      deployer.link(FixidityLib, Pool)
      deployer.deploy(Pool);
    }
  )
};