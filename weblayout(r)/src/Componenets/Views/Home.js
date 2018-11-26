import React from 'react';
import { Banner, ItemsMenuList, Widget} from '../index';
import ItemList from '../ItemsList';
import { addOnNews as AddonNews } from '../Add-on-news';

export const home=()=>{
    return(
       <div>
            <Banner />
            <ItemsMenuList />
            <ItemList />
            <AddonNews/>
            <Widget />
       </div>
    )
}