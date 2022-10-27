import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FAQ from '../FAQ/FAQ';

const Faqs = () => {
    const faqs = useLoaderData()
    console.log(faqs)
    return (

        <div>
            {
                faqs.map(faq => <FAQ key={faq.id} faq={faq}></FAQ>)
            }
        </div>
    );
};

export default Faqs;