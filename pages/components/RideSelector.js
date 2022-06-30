import React,{useEffect,useState} from 'react'
import tw from "tailwind-styled-components"
import {carList} from '../../data/carList'

const RideSelector = ({pickupc,dropoffc}) => {
  const [rideDuration,setRideDuration]=useState(0);

  useEffect(()=>{
    rideDuration=fetch(`https://api.mapbox.com/directions/v5/mapbox/driving/${pickupc[0]},${pickupc[1]};${dropoffc[0]},${dropoffc[1]}?access_token=pk.eyJ1IjoibHVjaWZlcjEyOTI5IiwiYSI6ImNsNTB2cHNhbTA5NWMzaW9obDNheTR2cWsifQ.QNr9jj3RGBaDP_XcnPQwzQ`)
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      setRideDuration(data.routes[0].duration / 100)
    })
  },[pickupc,dropoffc])
  return (

    <Wrapper>
        <Title>Choose Your Ride</Title>
        <CarList>
            {
                carList.map((car,index)=>(
                    <Car key={index}>
               <CarImage src={car.imgUrl}/>
               <CarDetails>
                   <Service>{car.service}</Service>
                   <Time>5 min away</Time>
                  
               </CarDetails>
               <Price>{'$'+(rideDuration*car.multiplier).toFixed(2)}</Price>
           </Car>
                ))
                }
        </CarList>
    </Wrapper>
  )
}

export default RideSelector

const Wrapper=tw.div`
flex-1 overflow-y-scroll flex flex-col`
const Title=tw.div`
text-gray-500 text-center text-xs py-2 border-b`
const CarList=tw.div``
const Car=tw.div`
flex p-4 items-center`
const CarImage=tw.img`
h-14 mr-4`
const Service=tw.div`
font-medium`
const Time=tw.div`
text-xs text-blue-500`
const CarDetails=tw.div` flex-1`
const Price=tw.div`
text-sm`