import { useState } from "react";
import {
  useMoralisFile,
  useMoralis,
  useWeb3ExecuteFunction,
} from "react-moralis";
import { artifacts } from "hardhat";


const NewStory = () => {


  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const { saveFile } = useMoralisFile();
  //const { Moralis, account } = useMoralis();
  const contractProcessor = useWeb3ExecuteFunction();

  const contract= require("../../artifacts/contracts/Blog.sol/Blog.json");
  //const contract= require(".../artifacts/contracts/Blog.sol/Blog.json");
  console.log(JSON.stringify(contract.abi));
  const account= '0xcdd4a0a113814085D1B73F4F473275fcA59428F1'
  const mint = async (account, uri) => {

    let options ={
      contractAddress: "0xae62585bd19d455783d9f49b44452dd93eccf0d1",
      functionName: "safeMint",
      abi: contract.abi,
      params: {
        to: account,
        uri: uri,
      },
      msgValue: 10000000,
    }

    await contractProcessor.fetch({
      params: options,
      onSuccess: () => {
        alert("Succesful Mint");
        setText("");
        setTitle("");
      },
      onError: (error) => {
        alert(error.message);
      },
    });

  }


  const uploadFile = async (event) => {
    event.preventDefault();
    const textArray = text.split();
    const metadata = {
      title,
      text: textArray,
    };

    try {
      const result = await saveFile(
        "myblog.json",
        { base64: btoa(JSON.stringify(metadata)) },
        {
          type: "base64",
          saveIPFS: true,
        }
      );
      const nftResult = await uploadNftMetada(result.ipfs());

      await mint(account, nftResult.ipfs());
    } catch (error) {
      alert(error.message);
    }

  }


  const uploadNftMetada = async (url) => {
    const metadataNft = {
      image:
        "https://ipfs.moralis.io:2053/ipfs/QmWEsG4ayh75BMk2H1CowAdALPjsi3fD7CSZ6qxNM1yNnz/image/moralis.png",
      description: title,
      externalUrl: url,
    };
    const resultNft = await saveFile(
      "metadata.json",
      { base64: btoa(JSON.stringify(metadataNft)) },
      {
        type: "base64",
        saveIPFS: true,
      }
    );
    return resultNft;
  };

  return (
    <>
        <div>
          <form onSubmit={uploadFile} className="writeForm">
            <div className="writeFormGroup">
            <input
                className="writeInput"
                placeholder="Title"
                type="text"
                autoFocus={true}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="writeFormGroup">
            <textarea
                className="writeInput writeText"
                placeholder="Tell your story..."
                autoFocus={true}
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <button className="writeSubmit" type="submit">
              Publish
            </button>
          </form>
        </div>
    </>
  );
};

export default NewStory;