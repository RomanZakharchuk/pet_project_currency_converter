import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { currencyService } from "../../services/currency.service";

const initialState = {
    eurRate: {},
    usdRate: {},
    errors: null
};

const getEurRates = createAsyncThunk(
    'currency/getEurRates',
    async ( _, { rejectedWithValue } ) => {
        try {
            const { data } = await currencyService.getEurRates();
            return data.rates;
        } catch (e) {
            return rejectedWithValue( e.response.data )
        }
    }
);

const getUsdRates = createAsyncThunk(
    'currency/getUsdRates',
    async ( _, { rejectedWithValue } ) => {
        try {
            const { data } = await currencyService.getUsdRates();
            return data.rates;
        } catch (e) {
            return rejectedWithValue( e.response.data )
        }
    }
);

const currencySlice = createSlice( {
    name: 'currencySlice',
    initialState,
    reducers: {},
    extraReducers: ( value ) =>
        value
            .addCase( getEurRates.fulfilled, ( state, action ) => {
                state.eurRate = action.payload
            } )
            .addCase( getEurRates.rejected, ( state, action ) => {
                state.errors = action.payload
            } )
            .addCase( getUsdRates.fulfilled, ( state, action ) => {
                state.usdRate = action.payload
            } )
            .addCase( getUsdRates.rejected, ( state, action ) => {
                state.errors = action.payload
            } )
} );

const { reducer: currencyReducer } = currencySlice;

const currencyActions = {
    getEurRates,
    getUsdRates
};

export { currencyActions, currencyReducer, currencySlice };