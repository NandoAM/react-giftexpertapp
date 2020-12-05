import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punc', 'Samurai X', 'Dragon Ball']

    // const handleAdd = () => {
    //     setCategories([...categories, 'Sinchan']);
    // }

    const [categories, setCategories] = useState(['Wolverine',])

    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={setCategories} />

            <hr />

            <ol>
                {
                    // categories.map((category) => {
                    //     return <li key={category}> {category}</li>
                    // })
                    categories.map(category => {
                        return <GifGrid
                            key={category}
                            category={category} />
                    })
                }
            </ol>

        </>
    );

}