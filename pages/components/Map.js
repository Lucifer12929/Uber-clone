import React from 'react'
import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoibHVjaWZlcjEyOTI5IiwiYSI6ImNsMTVic3dqdTA0bTUzYnMxa3p5aGQ3NWkifQ.nLWuIX7_IHCGR9PjD7C-UA';

const Map = (props) => {
    useEffect(()=>{
        const map= new mapboxgl.Map({
          container: "map",
          style:'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
          center: [-99.29011,39.39172],
          zoom: 4,
        })
        if(props.pickupc){
          addToMap(map,props.pickupc)
        }
        if(props.dropoffc){
           addToMap(map,props.dropoffc)
        }
        if(props.pickupc && props.dropoffc){
          map.fitBounds([
            props.pickupc,
            props.dropoffc
          ],{
            padding:60
          })
        }
      },[props.pickupc,props.dropoffc])


    const addToMap=(map,coordinates)=>{
      const marker1=new mapboxgl.Marker()
      .setLngLat(coordinates)
      .addTo(map);
    }

  return (
    <Wrapper id='map'></Wrapper>
  )
}

export default Map


const Wrapper=tw.div`
flex-1 h-1/2
`