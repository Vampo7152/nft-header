      // connect to Moralis server,  Checking on ETH
      Moralis.initialize("lGEoHGmxhXoJjiagnEHegBp7zmKyYvw1Vos9J4Ne");
      Moralis.serverURL = "https://cj1sdpgbpod8.usemoralis.com:2053/server";
     
function report(){
    if( value === ethe){
        return getEthNFT()
    } else{
        return getNFT()
    }
}

      async function getEthNFT() {
        let address = document.getElementById("ethnftaddress").value;
        let currentDiv = document.getElementById("ethcontent");

        currentDiv.innerHTML = "";
        const options = {
          chain: "eth",
          address: address,
        };
        const getEthNFTs = await Moralis.Web3.getNFTs(options);
        console.log(getEthNFTs);

        //Loop over the array
        getEthNFTs.forEach((e) => {
          let url = e.token_uri;

          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              let currentDiv = document.getElementById("ethcontent");
              let content = `
                    <div class="nfter">
                        <p>${data.name}</p>
                        <img width=100 height=100 src="${data.image}"/>
                    </div>
                    `;
              currentDiv.innerHTML += content;
            });
        });
      }


      // connect to Moralis server, Checking on matic 

      Moralis.initialize("lGEoHGmxhXoJjiagnEHegBp7zmKyYvw1Vos9J4Ne");
      Moralis.serverURL = "https://cj1sdpgbpod8.usemoralis.com:2053/server";

      async function getNFT() {
        let address = document.getElementById("nftaddress").value;
        let currentDiv = document.getElementById("content");

        currentDiv.innerHTML = "";
        const options = {
          chain: "matic",
          address: address,
        };
        const polygonNFTs = await Moralis.Web3.getNFTs(options);
        console.log(polygonNFTs);

        //Loop over the array
        polygonNFTs.forEach((e) => {
          let url = e.token_uri;

          fetch(url)
            .then((response) => response.json())
            .then((data) => {
              let currentDiv = document.getElementById("content");
              let content = `
                    <div class="nft">
                        <p>${data.name}</p>
                        <img width=100 height=100 src="${data.image}"/>
                    </div>
                    `;
              currentDiv.innerHTML += content;
            });
        });
      }