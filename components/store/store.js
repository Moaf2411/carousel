import {configureStore,createSlice} from '@reduxjs/toolkit'


const imageSlice = createSlice({
    name:'image',
    initialState:{
        images:[
        'https://images.unsplash.com/photo-1597655601841-214a4cfe8b2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjBzY2VuZXJ5fGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        'https://media.cntraveler.com/photos/58d2c0a97e623821b9f3181d/16:9/w_2048,h_1152,c_limit/yoshinoyama--japan-GettyImages-488852217.jpg',
        'https://www.japan.go.jp/kizuna/_src/7988222/202012_p04-05_01.jpg?v=1646642059239',
        'https://cdn01.zoomit.ir/2021/3/2021-bentley-continental-gt-speed-exterior-(6).jpg',
        'https://s3-prod-europe.autonews.com/s3fs-public/8BENTAYGA-MAIN_i.jpg',
        'https://mediapool.bmwgroup.com/cache/P9/202204/P90458174/P90458174-the-new-bmw-i7-xdrive60-04-2022-2250px.jpg',
        'https://cdn.bmwblog.com/wp-content/uploads/2015/07/bmw-E30-3-Series-1900x1200-05.jpg'
        
    ]
},
    reducers:{

    }

})





const store = configureStore({
    reducer:{
        imshow: imageSlice.reducer
    }
})



export default store












