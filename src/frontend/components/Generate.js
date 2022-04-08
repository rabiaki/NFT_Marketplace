import React, { useState} from 'react'
import { ethers } from "ethers"
import { Row, Form, Button } from 'react-bootstrap'
import { create as ipfsHttpClient } from 'ipfs-http-client'

var items = []

const Generate = ({ marketplace, nft, }) => {
  const [count, setCount] = useState(null)
  

  const generateNFT = async () => {
    if (!count) return

    const uri = `http://127.0.0.1:5000/generator/${count}`
    fetch(uri)
    .then(response => response.json())
    .then(data => {
      loadNFTImages(data);
    });
  }

  const loadNFTImages = async (data) => { 
    console.log(data.items);
    items = data.items;
    console.log(items.length)
  }

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <main role="main" className="col-lg-12 mx-auto" style={{ maxWidth: '1000px' }}>
          <div className="content mx-auto">
            <Row className="g-4">
              <Form.Control onChange={(e) => setCount(e.target.value)} size="lg" required type="number" placeholder="Number of NFT Images" />
              <div className="d-grid px-0">
                <Button onClick={generateNFT} variant="primary" size="lg">
                  Generate!
                </Button>
              </div>
            </Row>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Generate