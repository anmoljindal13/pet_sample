module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    },

    ganache: {
			provider: function() {
				var mnemonic = "advice side similar regret item pottery neutral virtual mail usage real risk";//put ETH wallet 12 mnemonic code	
				return new HDWalletProvider(mnemonic, "HTTP://127.0.0.1:7547");
			  },
			  network_id: '5777', 
			 }  

  }
};
