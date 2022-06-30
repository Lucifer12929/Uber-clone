import {useEffect,useState} from 'react'
import tw from "tailwind-styled-components"
import Map from "./components/Map"
import {useRouter} from 'next/router'
import RideSelector from './components/RideSelector'
import Link from 'next/link'

const Confirm = () => {
    const router=useRouter()
    const {pickup,dropoff}=router.query
    const [pickupc,setPickupC]=useState([0,0]);
    const [dropoffc,setDropoffC]=useState([0,0]);

    const getPickupCoordinates=(pickup)=>{
    
    
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?`+
        new URLSearchParams({
            access_token:"pk.eyJ1IjoibHVjaWZlcjEyOTI5IiwiYSI6ImNsMTVic3dqdTA0bTUzYnMxa3p5aGQ3NWkifQ.nLWuIX7_IHCGR9PjD7C-UA",
            limit:1
        }))
        .then(response=>response.json())
        .then(data=>{
            setPickupC(data.features[0].center);
        })
    }
    const getDropoffCoordinates=(dropoff)=>{
        
        fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?`+
        new URLSearchParams({
            access_token:"pk.eyJ1IjoibHVjaWZlcjEyOTI5IiwiYSI6ImNsMTVic3dqdTA0bTUzYnMxa3p5aGQ3NWkifQ.nLWuIX7_IHCGR9PjD7C-UA",
            limit:1
        }))
        .then(response=>response.json())
        .then(data=>{
            setDropoffC(data.features[0].center);
        })
    }
    useEffect(()=>{
        getPickupCoordinates(pickup);
        getDropoffCoordinates(dropoff);
    },[pickup,dropoff])
    
  return (
    <Wrapper>
        <ButtonContainer>
        <Link href='/search'>
          <BackButton src='https://img.icons8.com/ios-filled/50/000000/left.png' />
        </Link>
      </ButtonContainer>
      <Map
      pickupc={pickupc}
      dropoffc={dropoffc}
      />
      <Ridecontainer>
        <RideSelector
         pickupc={pickupc}
         dropoffc={dropoffc}/>
        <ConfirmButtonContainer>
            <ConfirmButton>
            Confirm Your Ride
            </ConfirmButton>
        </ConfirmButtonContainer>
      </Ridecontainer>
    </Wrapper>
  )
}

export default Confirm;

const Wrapper=tw.div`
h-screen flex flex-col`
const Ridecontainer=tw.div`
flex-1 flex flex-col h-1/2` 

const ConfirmButtonContainer=tw.div`
border-t-2
`

const ConfirmButton=tw.div`
bg-black text-white my-4 mx-4 py-4 text-center text-xl `

const ButtonContainer = tw.div`
  absolute top-4 left-4 rounded-full z-10 bg-white shadow-lg cursor-pointer
`

const BackButton = tw.img`
  h-8 object-contain`