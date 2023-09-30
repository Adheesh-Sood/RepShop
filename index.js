const priceAirpods = 5
let numOfItems = 0
let item = document.getElementById('item')
let priceTotal = 0
let priceSpeaker = 5
let numOfAirpods = 0
let numOfSpeaker = 0
let preAirpods ;
let item2 = document.getElementById('item2')
let priceAirpodsTotal = 0
let priceSpeakersTotal = 0
let item3 = document.getElementById('item3')
let numOfAirpodPros = 0
let airpodProPrice =5
let totalAirpod2Price = 0
let stock = document.getElementById('stock')
let numOfStock = 0
let stockPrice = 5
let totalPriceStock = 0
let item4 = document.getElementById('item4')
let item5 = document.getElementById('item5')
let sunGlasses = document.getElementById('sunGlasses')
let numOfSunGlasses = 0
let priceSunGlasses = 5
let totalriceOfSunGlasses = 0
let item6 = document.getElementById('item6')
let hairdryer = document.getElementById('hairdryer')
let numOfHairDryer = 0
let totalPriceOfHairDryerr = 0
let priceOfHairDryer = 5
let headphones = document.getElementById('headphones')
let item7 = document.getElementById('item7')
let headphonesPrice =  5
let NumOfHeadphones = 0
let totalHeadphonesPrice = 0
let jbl = document.getElementById('jbl')
let item8 = document.getElementById('item8')
let priceJbl = 5
let totalJblPrice = 0
let NumOfJbl = 0
let mic = document.getElementById('mic')
let item9 = document.getElementById('item9')
let micPrice = 5
let totalMicPrice = 0
let NumofMic = 0
let dior = document.getElementById("dior")
let item10 = document.getElementById('item10')
let diorPrice = 5
let diorTotalPrice = 0
let numOfDIOR = 0
let totalPrice = 0
let totalPriceTxt = document.getElementById('totalPriceTxt')

document.getElementById("airpods").onclick = function (){
    numOfAirpods = numOfAirpods + 1
    console.log('click')
    numOfItems = numOfItems+1
    priceAirpodsTotal = priceAirpodsTotal + priceAirpods
    priceTotal = priceAirpodsTotal  + priceSpeakersTotal + totalAirpod2Price
    item.innerText = priceAirpodsTotal + ' AED ||| ' + numOfAirpods + 'x' + ' Airpods'
    totalPrice = priceAirpodsTotal + priceSpeakersTotal + totalAirpod2Price + totalPriceStock + totalriceOfSunGlasses + totalPriceOfHairDryerr + totalHeadphonesPrice + totalJblPrice + totalMicPrice + diorTotalPrice
    console.log(totalPrice)
    totalPriceTxt.innerText = 'Total : AED ' +  totalPrice
}

document.getElementById('speaker').onclick = function (){
    console.log('click')
    numOfSpeaker = numOfSpeaker + 1
    numOfItems = numOfItems+1
    priceSpeakersTotal = priceSpeakersTotal + priceSpeaker
    priceTotal = priceAirpods + priceSpeakersTotal + totalAirpod2Price
    item2.innerHTML = priceSpeakersTotal + ' AED ||| ' + numOfSpeaker + 'x' + ' Speaker/s'
    totalPrice = priceAirpodsTotal + priceSpeakersTotal + totalAirpod2Price + totalPriceStock + totalriceOfSunGlasses + totalPriceOfHairDryerr + totalHeadphonesPrice + totalJblPrice + totalMicPrice + diorTotalPrice
    console.log(totalPrice)
    totalPriceTxt.innerText = 'Total : AED ' +  totalPrice


}

document.getElementById('airpodPro').onclick = function (){
    console.log("click")
    numOfAirpodPros = numOfAirpodPros+1
    numOfItems = numOfItems+1
    totalAirpod2Price = totalAirpod2Price + airpodProPrice
    priceTotal = priceAirpods + priceSpeakersTotal + totalAirpod2Price
    item3.innerText = totalAirpod2Price + ' AED ||| ' + numOfAirpodPros +'x' + ' Airpods Pro/s'
    totalPrice = priceAirpodsTotal + priceSpeakersTotal + totalAirpod2Price + totalPriceStock + totalriceOfSunGlasses + totalPriceOfHairDryerr + totalHeadphonesPrice + totalJblPrice + totalMicPrice + diorTotalPrice
    console.log(totalPrice)
    totalPriceTxt.innerText = 'Total : AED ' +  totalPrice



}

stock.onclick = ()=>{
    console.log('click')
    numOfStock = numOfStock + 1
    numOfItems = numOfItems+1
    totalPriceStock = totalPriceStock + stockPrice
    item4.innerText = totalPriceStock + ' AED ||| ' + numOfStock +'x' + ' StockX/s'
    totalPrice = priceAirpodsTotal + priceSpeakersTotal + totalAirpod2Price + totalPriceStock + totalriceOfSunGlasses + totalPriceOfHairDryerr + totalHeadphonesPrice + totalJblPrice + totalMicPrice + diorTotalPrice
    console.log(totalPrice)
    totalPriceTxt.innerText = 'Total : AED ' +  totalPrice



}

sunGlasses.onclick = ()=>{
    console.log("click")
    numOfSunGlasses = numOfSunGlasses+1
    numOfItems = numOfItems+1
    totalriceOfSunGlasses = totalriceOfSunGlasses + priceSunGlasses
    item5.innerText = totalriceOfSunGlasses + ' AED||| ' + numOfSunGlasses + 'x' + ' SunGlasses/s'
    totalPrice = priceAirpodsTotal + priceSpeakersTotal + totalAirpod2Price + totalPriceStock + totalriceOfSunGlasses + totalPriceOfHairDryerr + totalHeadphonesPrice + totalJblPrice + totalMicPrice + diorTotalPrice
    console.log(totalPrice)
    totalPriceTxt.innerText = 'Total : AED ' +  totalPrice


}

hairdryer.onclick = ()=>{
    console.log('click')
    numOfHairDryer = numOfHairDryer+1
    numOfItems=numOfItems+1
    totalPriceOfHairDryerr = totalPriceOfHairDryerr + priceOfHairDryer
    item6.innerText = totalPriceOfHairDryerr + ' AED ||| ' + numOfHairDryer +'x' + ' HairDryer/s'
    totalPrice = priceAirpodsTotal + priceSpeakersTotal + totalAirpod2Price + totalPriceStock + totalriceOfSunGlasses + totalPriceOfHairDryerr + totalHeadphonesPrice + totalJblPrice + totalMicPrice + diorTotalPrice
    console.log(totalPrice)
    totalPriceTxt.innerText = 'Total : AED ' +  totalPrice


}

headphones.onclick = function (){
    console.log('clickHeadphones')
    NumOfHeadphones = NumOfHeadphones+1
    numOfItems=numOfItems+1
    totalHeadphonesPrice = totalHeadphonesPrice + headphonesPrice
    item7.innerText = totalHeadphonesPrice + ' AED ||| ' + NumOfHeadphones +'x' + ' Airpods Max/s'
    totalPrice = priceAirpodsTotal + priceSpeakersTotal + totalAirpod2Price + totalPriceStock + totalriceOfSunGlasses + totalPriceOfHairDryerr + totalHeadphonesPrice + totalJblPrice + totalMicPrice + diorTotalPrice
    console.log(totalPrice)
    totalPriceTxt.innerText = 'Total : AED ' +  totalPrice


}

jbl.onclick = ()=>{
    console.log('click JBL')
    NumOfJbl = NumOfJbl + 1
    totalJblPrice = totalJblPrice + priceJbl
    numOfItems = numOfItems + 1
    item8.innerText = totalJblPrice + ' AED||| ' + NumOfJbl + 'x' + ' JBL speaker/s'
    totalPrice = priceAirpodsTotal + priceSpeakersTotal + totalAirpod2Price + totalPriceStock + totalriceOfSunGlasses + totalPriceOfHairDryerr + totalHeadphonesPrice + totalJblPrice + totalMicPrice + diorTotalPrice
    console.log(totalPrice)
    totalPriceTxt.innerText = 'Total : AED ' +  totalPrice


}

mic.onclick = function(){
    console.log('click Mic')
    NumofMic = NumofMic + 1
    totalMicPrice = totalMicPrice + micPrice
    numOfItems = numOfItems + 1
    item9.innerText = totalMicPrice + ' AED||| ' + NumofMic + 'x' + '  Mic/s'
    totalPrice = priceAirpodsTotal + priceSpeakersTotal + totalAirpod2Price + totalPriceStock + totalriceOfSunGlasses + totalPriceOfHairDryerr + totalHeadphonesPrice + totalJblPrice + totalMicPrice + diorTotalPrice
    console.log(totalPrice)
    totalPriceTxt.innerText = 'Total : AED ' +  totalPrice


}

dior.onclick = function(){
    console.log('click dior')
    numOfDIOR = numOfDIOR + 1
    diorTotalPrice = diorTotalPrice + diorPrice
    numOfItems = numOfItems + 1
    item10.innerText = diorTotalPrice + ' AED||| ' + numOfDIOR + 'x' + '  Cologne/s'
    totalPrice = priceAirpodsTotal + priceSpeakersTotal + totalAirpod2Price + totalPriceStock + totalriceOfSunGlasses + totalPriceOfHairDryerr + totalHeadphonesPrice + totalJblPrice + totalMicPrice + diorTotalPrice
    console.log(totalPrice)
    totalPriceTxt.innerText = 'Total : AED ' +  totalPrice


}