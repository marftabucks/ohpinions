import React, { Component } from 'react';

import Auxiliary from '../../hoc/Auxiliary'
import Featured from '../../components/Sections/Featured/Featured'
import Categories from '../../components/Sections/Categories/Categories'
import RecentPosts from '../../components/Sections/RecentPosts/RecentPosts'

class Home extends Component {
    state = {  }

    render() { 
        return ( 
            <Auxiliary>
                <Featured />
                <Categories />
                <RecentPosts />
            </Auxiliary>
        );
    }
}
 
export default Home;