import React, {useState} from 'react';
import './css/yellow.css';
import data from './data/product.json';

function Yellow(props) {
    const [product, setProduct] = useState('4일 이하');
    const uniqueTabs = [...new Set(data.map(item => item.tab))];
    const filteredData = data.filter(item => item.tab === product);

    return (
        <div>
            <h2>노랑풍선 추천 인기상품 BEST</h2>
            <article className="tab_wrap">
                <ul className="m_menu">
                    {uniqueTabs.map(tab => (
                        <li 
                            key={tab}
                            onClick={()=>setProduct(tab)}
                            className={product===tab?'on':''}>{tab}
                        </li>
                    ))}
                </ul>
                <div className="content_wrap">
                    <div className="content">
                        {filteredData.map((products, index) => {
                            return (
                                <div key={index}>
                                    <img src={`${process.env.PUBLIC_URL}/${products.img}`} alt={products.title}/>
                                    <p className="title">{products.title}</p>
                                    <p className="price">{products.price}<span>원~</span></p>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </article>
        </div>
    );
}

export default Yellow;