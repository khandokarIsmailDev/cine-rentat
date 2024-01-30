import React, { useContext, useState } from 'react';
import { getImgUrl } from "../../utils/cine-utility";
import Rating from './Rating';
import MovieDetailsModal from './MovieDetailsModal';
import { MovieContext } from '../../context';
import { toast } from 'react-toastify';

const MovieCart = ({movie}) => {
    const [showModal,setShowModal] = useState(false)
    const [selectedMovie,setSelectedMovie] = useState(null)

    // niser data ta App jsx theke pascci
    const {state,dispatch} = useContext(MovieContext)

    function handleAddToCart(event,movie){
        event.stopPropagation()
        //console.log(cartData)
        //akadik bar jate card e kiso add korte na pare
        const found = state.cartData.find((item)=>{
            return item.id === movie.id
        })

        if(!found){
            dispatch({
                type:"ADD_TO_CART",
                payload:{
                    ...movie
                }
            })
            toast.success(`Movie  added successsfully`,{
                position:"bottom-right"
            })
        }else{
            console.error(`This movie ${movie.title} is already added!`)
            toast.warn(`Movie ${movie.title} already added cart!`)
        }
    }

    

    function handleModalClose(){
        setSelectedMovie(null)  // modal close korar por jate kono detail na thake
        setShowModal(false)
    }

    function handleMovieSeletion(movie){
        setSelectedMovie(movie)
        setShowModal(true)
    }

    

    return (
        <>
        {
            showModal && <MovieDetailsModal
                 movie={selectedMovie}
                 onClose={handleModalClose}
                 onCartAdd={handleAddToCart}
             />
        }
        
        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
            <a href="#" onClick={()=>handleMovieSeletion(movie)}>
                <img className="w-full object-cover" src={getImgUrl(movie.cover)} alt="" />
                <figcaption className="pt-4">
                <h3 className="text-xl mb-1">{movie.title}</h3>
                <p className="text-[#575A6E] text-sm mb-2">
                    {movie.genre}
                </p>
                <div className="flex items-center space-x-1 mb-5">
                    
                    <Rating value={movie.rating}/>
                    
                </div>
                <button
                    className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
                    href="#"
                    onClick={(e)=>handleAddToCart(e,movie)}
                >
                    <img src="/tag.svg" alt="" />
                    <span>${movie.price} | Add to Cart</span>
                </button>
                </figcaption>
            </a>
        </figure>
        </>
    );
};

export default MovieCart;