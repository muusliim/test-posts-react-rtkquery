import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com/'}),
    endpoints: builder => ({
        getPosts: builder.query({
            query: (pageNumber) =>  `posts?_limit=10&_page=${pageNumber+1}`,
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName
              },
              //merge данных
              merge: (currentCache, newItems) => {
                currentCache.push(...newItems)
              },
              //refetch, если меняются данные на странице
              forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg
              },
            }),
          getPostById: builder.query({
            query: (id) => `posts?id=${id}`
          })
        })
    })


export const {useGetPostsQuery, useGetPostByIdQuery} = apiSlice;