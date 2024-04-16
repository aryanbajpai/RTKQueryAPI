import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const myAPI = createApi({
    reducerPath:'fetchAPI',
    baseQuery: fetchBaseQuery({
        baseUrl:"http://localhost:3000/"
    }),

    tagTypes:["Posts"],  //define tags tobe used in Endpt

    //it works as ACTION
    endpoints:(builder) => ({  //adds posts to original URL
         
        //gets data from server
        getPostsData: builder.query<Post[], string>({
            query: () => "posts",
            //use TAGS
            providesTags: ["Posts"]
        }),

        //Posts data to server
        newPost: builder.mutation<Post, Post>({
            query : (post) => ({  //TAGS are used to REVALIDATE
                url:'posts', 
                method:'POST',
                body: post,
            }),
            //use TAGS
            invalidatesTags: ["Posts"],
        }),
        //WHEN POST MUTATION RUNS GET QUERY RUNS TOO...
    }),
});

//when using just /query
// export const { getPosts } = myAPI.endpoints

//if using /query/react it has a HOOK
//useGetPostsQuery => forms camel case of the endpoints
export const { useGetPostsDataQuery, useNewPostMutation } = myAPI;
