import React, { useState, useEffect } from 'react'
import { ethers } from "ethers"
import { Row, Col, Card, Button } from 'react-bootstrap'
import {items} from './Generate.js';


const NFTList = ({ marketplace, nft }) => {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])

  const loadNFTImages = async () => {
    }


  const listNFTImage = async (item) => {
    //await (await marketplace.purchaseItem(item.itemId, { value: item.totalPrice })).wait()
    //loadMarketplaceItems()
  }

  return (
    <div className="flex justify-center">
      {items.length > 0 ?
        <div className="px-5 container">
          <Row xs={1} md={2} lg={4} className="g-4 py-5">
            {items.map((item, idx) => (
              <Col key={idx} className="overflow-hidden">
                <Card>
                  <Card.Img variant="top" src={item.address} />
                  <Card.Footer>
                    <div className='d-grid'>
                      <Button onClick={() => listNFTImage(item)} variant="primary" size="lg">
                        List NFT Image 
                      </Button>
                    </div>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
        : (
          <main style={{ padding: "1rem 0" }}>
            <h2>No listed NFT Images</h2>
          </main>
        )}
    </div>
  );
}
export default NFTList