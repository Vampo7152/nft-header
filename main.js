      // connect to Moralis server,  Checking on ETH
      Moralis.initialize("idwzRilvFaHJkSAmGJbf2mBOfCQP5xNjAkLfxhjF");
      Moralis.serverURL = "https://k3ht0iww1vis.usemoralis.com:2053/server";

      async function getNFT() {
        let address = document.getElementById("walletaddress").value;
        let currentDiv = document.getElementById("contentdiv");

        const options = {
          chain: "eth",
          address: address,
        };
        const getEthNFTs = await Moralis.Web3.getNFTs(options);
        console.log(getEthNFTs);
        getEthNFTs.forEach((e) => {
          let url = e.token_uri;
  
          fetch(url)
            .then((response) => response.json())
            .then((data) => {
             // let currentDiv = document.getElementById("contentdiv");
              let content = `
                    <div class="nfter">
                        <p>${data.name}</p>
                        <img width=100 height=100 src="${data.image}"/>
                    </div>
                    `;
              currentDiv.innerHTML += content;
            });
        }); 
        document.getElementById("walletaddress").value = null;
      }
