import React from 'react'
import CategoriesService,{getCategories} from "./categoriesService";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
function categories() {
    const [categories, setCategories] = useState([]);
    useEffect(() => {    
        getCategories().then(res => res.json()).then(data => {
            setCategories(data.$values);
        })

    },[]);


    return (
        <>
        <div class="container-fluid ">
            <div class="row d-flex flex-wrap align-items-center justify-content-center categories-row">
                <div class="col-12 d-flex flex-wrap flex-md-nowrap flex-lg-nowrap align-items-center justify-content-center">
              
                  {categories.map(category => ( <Link className="codepen-button" to={"/categories/" + category.id}><span>{category.name}</span></Link>))}
                  
                </div>
                
                <Outlet/>
                
            </div>
        </div>
        </>
    )
}

export default categories