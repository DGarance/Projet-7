import Thumb from '../../components/Thumb/Thumb';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import Tag from '../../components/Tag/Tag';
import Dropdown from '../../components/Dropdown/Dropdown';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';

export default function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('/data.json').then((res) => setData(res.data));
    }, []);

   const StyledMain = styled.main`
        width: 375px;
        margin: 0 100px;
        padding: 30px;
    `;

    const StyledSection = styled.section`
        width: 320px;
    `;

    return (
        <StyledMain>
            <Banner/>
            <StyledSection>
                {
                    data.map((appart,id)=>(
                        <div className='card_logement' key ={id}>
                            <Link className='link_card_logement' to= {`/logment/${appart.id}`}>
                                <Thumb cover={appart.cover} title={appart.id}></Thumb>
                            </Link>
                        </div>
                    ))
                }
                <Dropdown></Dropdown>
                <Thumb></Thumb>
                <Tag></Tag>
            </StyledSection> 
        </StyledMain>
    );
}
