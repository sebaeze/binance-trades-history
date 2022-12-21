/*
*
*/
require("dotenv").config() ;
//
import Binance                       from "binance-api-node" ;
//
try {
    //
    console.log( `...api_key: ${process.env.BINANCE_API_KEY}: sec: ${process.env.BINANCE_API_SECRET};` ) ;
    //
    const client      = Binance({ apiKey: process.env.BINANCE_API_KEY , apiSecret:  process.env.BINANCE_API_SECRET }) ;
    const SYMBOL      = "RADBNB" ;
    //
    client.myTrades({symbol:SYMBOL})
        .then((respBinAPI)=>{
            let respBinance = respBinAPI.sort((a,b)=>{
                return b.time-a.time ;
            }) ;
            console.log(`\n\nSymbol: '${SYMBOL}':\n---------------------------\n`) ;
            console.log("...respBinance.symbols: ",typeof respBinance," array?: ",Array.isArray(respBinance),";") ;
            if ( Array.isArray(respBinance)===true ){
                for ( let posDD=0; posDD<respBinance.length; posDD++ ){
                    const { id, orderId,price,qty,quoteQty,commission,commissionAsset,time, isBuyer } = respBinance[posDD] ;
                    console.log(
                        `${(isBuyer===true ? "Compra" : "Venta").padStart(12)} ${String(id).padStart(11)} ${String(orderId).padStart(11)} ${String(qty).padStart(12)} ${String(price).padStart(15)}  ${new Date(time).toISOString()}`
                    ) ;
                } ;
            } ;
        })
        .catch((errC)=>{
            console.log("***ERROR catch: ",errC,"***") ;
        }) ;
    //
    /*
    const client = new Spot(
        process.env.BINANCE_API_KEY , process.env.BINANCE_API_SECRET,
        { baseURL: "https://api3.binance.com" }
        ) ;
    console.log("...tengo cliente: ",client,";") ;
    //
    client.Trade.exchangeInfo()
        .then((respBinance)=>{
            console.log("...respBinance.symbols: ",respBinance,";") ;
        })
        .catch((errC)=>{
            console.log("***ERROR catch: ",errC,"***") ;
        }) ;
        */
    //
    /*
    client.exchangeInfo()
        .then((respBinance)=>{
            console.log("...respBinance.symbols: ",respBinance,";") ;
        })
        .catch((errC)=>{
            console.log("***ERROR catch: ",errC,"***") ;
        }) ;
    */
    /*
    client.account()
        .then(response => console.log(response.data))
        .catch((errC)=>{
            console.log("***ERROR catch: ",errC,"***") ;
        }) ;
        */
    //
} catch(errConn){
    console.log("***ERROR: ",errConn,"****") ;
} ;
//