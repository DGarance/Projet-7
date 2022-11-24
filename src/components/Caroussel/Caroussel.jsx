import { useState } from 'react';


export default function Carrousel(slides) {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides)|| slides.length<=0){
        return null;
    }

    return(
        <section className='carrousel_container'>
            <></>
            <></>
            {data.map((pictures,index)=>
            {
                return(
                    <div>
                        <img src={pictures} alt="logement" className='carrousel_img' />
                    </div>
                )
            })
                
            }
        </section>
    )
}
