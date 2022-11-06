import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { server } from "../index";
import { Container, HStack, Button, RadioGroup, Radio } from '@chakra-ui/react';
import Loader from './Loader';
import CoinsCard from './CoinCard';
import Error from './Error';

function Coins() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState('inr')
  
  const currencySymbol = currency==="inr"?"₹":currency==="eur"?"€":"$";
  const changePage = (page) => {
    setPage(page);
    setLoading(true);
  }
  const btns = new Array(132).fill(1); 
  useEffect(()=>{
    async function fetchCoins(){
      try{
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`)
        setCoins(data);
        setLoading(false);
      }catch(e){
        setError(true);
        setLoading(false);
      }
    }
    fetchCoins();
  },[currency,page])

  if(error){
    return <Error message={"Error while fetching Coins"}/>
  }
  return (
    <Container maxW={"container.xl"} >
      {loading? <Loader /> :
       <>
        <RadioGroup value={currency}>
          <HStack spacing={"4"} mt={"4"} ml={"4"}>
            <Radio value="inr" onClick={() => setCurrency("inr")}>INR</Radio>
            <Radio value="usd" onClick={() => setCurrency("usd")}>USD</Radio>
            <Radio value="eur" onClick={() => setCurrency("eur")}>EUR</Radio>
          </HStack>
        </RadioGroup>
        <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
          {coins.map(i=>{
            return <CoinsCard 
              key={i.id} 
              id={i.id}
              name={i.name} 
              img={i.image} 
              price={i.current_price}
              symbol={i.symbol}
              currencySymbol={currencySymbol}
            />
          })}
        </HStack>
        <HStack w={"full"} overflowX={"auto"} p={"8"}>
          {btns.map((item, index) => (
            <Button 
              key={index}
              bgColor={"blackAlpha.900"}
              color={"white"}
              onClick={() => changePage(index+1)}>
                {index+1}
             </Button>
          ))}
        </HStack>
      </>}
    </Container>
  )
}

export default Coins
