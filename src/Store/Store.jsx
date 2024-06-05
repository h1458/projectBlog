import {configureStore} from '@reduxjs/toolkit'
import { BannerSlice } from '../Redux/HomeBannerSlice'
import { Allcourses } from '../Redux/CoursesSlice'
import { BlogSlice } from '../Redux/BlogSlice'
import { CategorySlice } from '../Redux/CategorySlice'
import { blogdeatilsSlice } from '../Redux/BlogDetailsSlice'
import { LatestPostSlice } from '../Redux/LatestPostSlice'
import { categoryPostSlice } from '../Redux/CategoryPostSlice'
import { authSlice } from '../Redux/AuthSlice'
import { likeunlikeSlice } from '../Redux/LikeUnlikeSlice'
import { commentSlice } from '../Redux/Comment'



export const Store = configureStore({
    reducer: {
        Home: BannerSlice.reducer,
        Allcourses: Allcourses.reducer,
        allblog: BlogSlice.reducer,
        categoryList:CategorySlice.reducer,
        blogDetails: blogdeatilsSlice.reducer,
        latestpost: LatestPostSlice.reducer,
        categoryPost: categoryPostSlice.reducer,
        AuthenticationSlice: authSlice.reducer,
        like: likeunlikeSlice.reducer,
        Comment: commentSlice.reducer,
    }
})