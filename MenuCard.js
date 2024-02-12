import React from 'react'

const MenuCard=({menuData})=> {

    return (
    <>
    <section className='main-card--cointainer'>

    {menuData.map((curElem)=>{
        const {id,name,category,description,image} = curElem;
        return(
            <>
            <div className='card-container' key={curElem.id}>
            <div className="card">
                <div className="car-body">
                    <span className='card-number card-circle subtle'>{id}</span>
                    <span className="card-author subtle">{name}</span>
                    <h2 className='card-title'>{name}</h2>
                    <span className='card-description subtle'>{description}</span>
                    <div className='card-read'>read</div>
                    <img src={image} alt="images" className="card-media"></img>
                     
                    <span className='card-tag subtle' >order now</span>
                </div>
            </div>
        </div>
        </>
        )
    })}
    </section>
    </>
  )
}

export default MenuCard;
