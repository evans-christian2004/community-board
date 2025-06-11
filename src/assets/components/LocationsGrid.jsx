import React from 'react'
import { Link } from 'react-router-dom'
import wynwoodWalls from "../images/card-images/wynwoodWalls.jpg"
import vizcayaMuseum from "../images/card-images/vizcayaMuseum.jpg"
import calleOcho from "../images/card-images/calleOcho.jpg"
import artDeco from "../images/card-images/artDeco.jpg"
import perezArt from "../images/card-images/perezArt.jpg"
import versailles from "../images/card-images/versailles.jpg"
import coyoTaco from "../images/card-images/coyoTaco.jpg"
import ballNChain from "../images/card-images/ballNChain.jpg"
import oletaRiver from "../images/card-images/oletaRiver.jpg"
import artBasel from "../images/card-images/artBasel.jpg"
import amara from "../images/card-images/amara.jpg"
import lagniappe from "../images/card-images/lagniappe.jpg"
import Card from './Card'

const LocationsGrid = () => {
    const locations = [
    {
        id:1,
        image: wynwoodWalls,
        title: "Wynwood Walls",
        description: "An essential Miami experience, this renowned outdoor street art museum features massive, vibrant murals from some of the world's best-known graffiti artists and muralists.",
        link: "https://thewynwoodwalls.com/"
    },
    {
        id:2,
        image: vizcayaMuseum,
        title: "Vizcaya Museum and Gardens",
        description: "Step into a European-inspired fantasy at this Gilded Age estate on Biscayne Bay. The stunning mansion and its ten acres of immaculate, formal gardens offer a breathtaking glimpse into old-world Miami glamour.",
        link: "https://vizcaya.org/"
    },
    {
        id:3,
        image: calleOcho,
        title: "Little Havana & Calle Ocho",
        description: "The cultural and social heart of Miami's Cuban community. Explore Calle Ocho to find authentic cigar rollers, lively music, ventanita coffee windows, and the Walk of Fame celebrating Cuban artists.",
        link: "https://www.miamiandbeaches.com/things-to-do/attractions/explore-calle-ocho-in-little-havana"
    },
    {
        id:4,
        image: artDeco,
        title: "Art Deco Historic District",
        description: "Take a stroll or a guided tour through South Beach to see the world's largest collection of Art Deco architecture. The pastel-colored, streamlined buildings create a unique, retro-cool atmosphere, especially along Ocean Drive.",
        link: "https://www.miamiandbeaches.com/l/attractions/art-deco-historic-district/2116"
    },
    {
        id:5,
        image: perezArt,
        title: "Pérez Art Museum Miami",
        description: "A stunning contemporary and modern art museum with impressive architecture by Herzog & de Meuron. Its hanging gardens and sweeping views of Biscayne Bay make it as much an architectural landmark as a cultural one.",
        link: "https://www.pamm.org/en/"
    },
    {
        id:6,
        image: versailles,
        title: "Versailles Restaurant",
        description: "Known as The Most Famous Cuban Restaurant, this Little Havana institution is a gathering spot for the Cuban diaspora. The go-to place for authentic dishes like ropa vieja, Cuban sandwiches, and sweet cafecitos.",
        link: "https://www.versaillesrestaurant.com/"
    },
    {
        id:7,
        image: coyoTaco,
        title: "Coyo Taco",
        description: "A hip, bustling taqueria in Wynwood serving up delicious and authentic Mexican street food. It's also famous for its hidden speakeasy bar in the back, offering a lively spot for cocktails after your tacos.",
        link: "https://www.coyo-taco.com/"
    },
    {
        id:8,
        image: ballNChain,
        title: "Ball and Chain",
        description: "This historic Little Havana club, originally opened in 1935, has been beautifully restored. It offers live music daily, but its salsa nights are legendary, complete with free lessons and a vibrant crowd.",
        link: "https://ballandchainmiami.com/"
    },
    {
        id:9,
        image: oletaRiver,
        title: "Oleta River State Park",
        description: "Escape the city bustle at Florida's largest urban park. Rent a kayak or stand-up paddleboard and explore the calm mangrove-lined waterways, a peaceful contrast to the ocean waves.",
        link: "https://ballandchainmiami.com/"
    },
    {
        id:10,
        image: artBasel,
        title: "Art Basel Miami Beach",
        description: "If you're in Miami in early December, this is the main event. The world's premier modern and contemporary art fair takes over the city, with countless satellite fairs, gallery openings, and parties. It’s an electrifying week of art and culture.",
        link: "https://ballandchainmiami.com/"
    },
    {
        id:11,
        image: amara,
        title: "Amara at Paraiso",
        description: "Amara offers stunning waterfront views of Biscayne Bay paired with a bold, Latin American-inspired menu by a James Beard Award-winning chef. It’s chic, beautiful, and delicious.",
        link: "https://ballandchainmiami.com/"
    },
    {
        id:12,
        image: lagniappe,
        title: "Lagniappe",
        description: "New Orleans-inspired wine bar with a sprawling, lantern-lit backyard. Pick a bottle of wine from their shop, choose your cheeses and meats, and enjoy live music every night in a relaxed, bohemian atmosphere.",
        link: "https://ballandchainmiami.com/"
    },
]
  return (
    <>
        <header className='navbar'>
            <Link to='/'><div className="logo logo-emphasis">305 Life</div></Link>
            
        </header>
        <section className='locations-section'>
            <h1>Locations</h1>
            <h2>Locations are curated and periodically updated. Return for new recommendations!</h2>
            <div className='location-grid'>
                {locations.map((location) => (
                    <Card
                        key={location.id}
                        title={location.title}
                        description={location.description}
                        image={location.image}
                        link={location.link}
                    />
                ))}                
            </div>
        </section>
        <footer>
            <p>
                Copyright under Christian Evans&copy;
            </p>
            <p>
                the Apache License, Version 2.0: the "License"
            </p>
            
        </footer>
    </>
    
  )
}

export default LocationsGrid