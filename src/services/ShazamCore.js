// import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': '7398f38d8cmshd547ef91ec143abp188e15jsn77ad094c205f',
//       'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://shazam.p.rapidapi.com/charts/track', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));


//     export const ShazamApi = createApi({
//         reducerPath: 'shazamApi',
//         baseQuery: fetchBaseQuery({
//             baseUrl: 'https://shazam.p.rapidapi.com',
//             prepareHeaders: () => {
//                 headers.set('X-RapidAPI-Key','7398f38d8cmshd547ef91ec143abp188e15jsn77ad094c205f')
//             }
//         })
//     })