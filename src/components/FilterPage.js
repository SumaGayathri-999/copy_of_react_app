import React, { useState,useEffect } from 'react'
import {useLocation} from 'react-router-dom';
import './filterpage.css';
import {CartState} from  './context/Context';
import axios from 'axios';
import Dropdown from './Dropdown';
import ProductCard from './ProductCard';

function FilterPage() {
//  var searchfield = document.querySelectorAll(".search");
//  console.log(searchfield);
  const {state:{products}} = CartState();
  const [ categories, setCategories ] = useState([]);
  const [ concerns, setConcerns ] = useState([]);
  const [ ingredients, setIngredients ] = useState([]);
  const [ productTypes, setProductTypes ] = useState([]);
  const [ filteredproducts, setFilteredProducts ] = useState(products);
  const location = useLocation();
  var searchword;
  
 console.log("suma");
  if(!(location.state == null)){
    searchword = location.state.value;
 }
 
  
  useEffect(()=>{
    if(!(location.state == null)){
      const filtered=products.filter((text)=>{
           
            if(text.product_name.toLowerCase().includes(searchword.toLowerCase()))
                   {
                    return text;
                   }
            else{
                    return "";
            }
        }

    )
        if(filtered.length > 0){
          setFilteredProducts(filtered);
        }
        else{
          setFilteredProducts(products);
        }
      }
  },[location.state,products,searchword]);
 

 
  
  
  useEffect(()=>{
       const fetchData = async ()=>{
       const [categoryOptions,ingredientsOptions,concernOptions,productTypeOptions] = await Promise.all([axios.get("https://wowapi.onrender.com/categories_list"), axios.get("https://wowapi.onrender.com/ingredients_list"), axios.get("https://wowapi.onrender.com/concerns_list"),axios.get("https://wowapi.onrender.com/product_type_list")])
       setCategories(categoryOptions.data);
       setIngredients(ingredientsOptions.data);
       setConcerns(concernOptions.data);
       setProductTypes(productTypeOptions.data);
    }
    fetchData();
 },[])
  async function filterCategories(event,id){
    if(id){
      if(event.target.checked){
        await axios.get(`https://wowapi.onrender.com/categories/${id}`)
        .then((res)=>{setFilteredProducts(res.data)})
      }
    }
  }
  async function filterConcern(event,id){
    if(id){
      if(event.target.checked){
        await axios.get(`https://wowapi.onrender.com/concern/${id}`)
        .then((res)=>{setFilteredProducts(res.data)})
      }
    }
  }
  async function filterIngredients(event,id){
    if(id){
      if(event.target.checked){
        await axios.get(`https://wowapi.onrender.com/ingredients/${id}`)
        .then((res)=>{setFilteredProducts(res.data)})
      }
    }
  }
  async function filterPrice(min,max){
    await axios.get(`https://wowapi.onrender.com/price?min_price=${min}&max_price=${max}`)
    .then((res)=>{setFilteredProducts(res.data)})
  }
 
  return (
    <>
    <div className="mobile_filter">
          <label htmlFor="filter_button" >
              <div className="filter_button" ><i className="fa-solid fa-filter mr-2"></i>FILTER</div>
          </label>
    </div>
    <div className="filter_page mt-5">
          <input type="radio" name="slide_filter" id="filter_button"/>
          <input type="radio" name="slide_filter" id="cancel_filter" /> 
          <div className="filter_cont ">
             <h3 className="ml-1 filter_heading ml-2">FILTER</h3>
             <ul className="filter_links">
             <label htmlFor="cancel_filter" className="button cancel_filter">
                <i className="fas fa-times" />
             </label>

             <Dropdown filter_type="Category" filter_options={categories} filterItems={filterCategories}/>
             <Dropdown filter_type="Concern" filter_options={concerns} filterItems={filterConcern}/>
             <Dropdown filter_type="Ingredient" filter_options={ingredients} filterItems={filterIngredients}/> 
             <Dropdown filter_type="Product_Type" filter_options={productTypes} />
             <li className="filter_type">Price
                <input type="checkbox" id="Price" />
                <label htmlFor="Price">
                <svg
                   className="down_icon"
                   xmlns="http://www.w3.org/2000/svg"
                   fill="none"
                   viewBox="0 0 24 24"
                   strokeWidth="1.5"
                   stroke="currentColor"
                >
               <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </label>
           <ul className="filter_options">
               <li><input type="radio" name="filter" className="mr-2" onClick={()=>{filterPrice(100,300)}}/>₹ 100 - ₹ 400</li>
               <li><input type="radio" name="filter" className="mr-2" onClick={()=>{filterPrice(300,500)}}/>₹ 400 - ₹ 500</li>
               <li><input type="radio" name="filter" className="mr-2" onClick={()=>{filterPrice(500,700)}}/>₹ 500 - ₹ 1000</li>
               <li><input type="radio" name="filter" className="mr-2" onClick={()=>{filterPrice(700,1000)}}/>₹ 800 - ₹ 1000</li>

           </ul>
         </li>
        </ul>
     
    </div>
    <div className="filtered_products_cont">
      <h1 className="text-center mb-4" style={{fontWeight:"300"}}>BEST SELLING PRODUCTS</h1>
      <div className="row">
        {filteredproducts.map((item)=>{
          return (
            <ProductCard item={item}/>
            )
         })}
      </div>  
    </div>
</div>
    </>
  )
}
export default FilterPage;