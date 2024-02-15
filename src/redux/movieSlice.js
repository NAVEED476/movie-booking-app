import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchmovies = createAsyncThunk("movies",async()=>{
    const respose = await fetch("https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies")
    return respose.json();
})
export const movieReducer = createSlice({
    name:"movuies",
    initialState:{
        value:null,
        isLoading:false,
        isError:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchmovies.pending,(state,action)=>{
            state.isLoading = true;
        })  
        builder.addCase(fetchmovies.fulfilled,(state,action)=>
        {
            state.isLoading = false;
            state.value = action.payload;
        })
        builder.addCase(fetchmovies.rejected,(state,action)=>{
            state.isError = true;
            state.isLoading = false;
            console.log("error", action.payload)
        })
    }


})

export default movieReducer.reducer;