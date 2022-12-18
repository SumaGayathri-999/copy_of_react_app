import React from "react";
import { CartState } from '../context/Context';
import Rating from "../Rating";
import {Link} from 'react-router-dom';
import ProductCard from '../ProductCard';

function BestPicks() {
  const {state:{products,cart},dispatch} = CartState();

  return (
    <>
      <div className="container-fluid best_picks_container">
        <h1 className="text-center my-5">Best Picks For You</h1>
        <div className="row mb-3">
          {products.slice(0,8).map((item)=>{
            return(
             <>
             <ProductCard item={item}/>
             </>
            )
          })}
          
          </div>
        </div>
        <div className="text-center mt-5">
          <Link to="/filterpage" >
          <button className="btn btn-dark text-light">VIEW ALL</button>
          </Link>
        </div>
      
    </>
  );
}

export default BestPicks;
