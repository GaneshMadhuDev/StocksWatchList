$("document").ready(function(){
    var stocksString = "";
    $.each(stocksList, function( key, value ) {
        stocksString += '<li class="node"><div class="data"> <div class="caption">'
            +value.stockTicker+'</div> <div class="content"><span class="text-muted">'
            +value.stockName+'</span></div></div>  <div class="data"><div class="caption">'
            +value.stockPrice+'</div></div><span class="fa fa-star unchecked" id="'+value.stockTicker+'" onclick="addToMyFavorites(this)"></span>';
    });
    $("#allStocks").append(stocksString);
});

var stocksList = [
    {
        stockTicker : 'BABA',
        stockName : "AliBaba",
        stockPrice : "220"
    },{
        stockTicker : 'GE',
        stockName : "General Electric",
        stockPrice : "8"
    },{
        stockTicker : 'MSFT',
        stockName : "Microsoft",
        stockPrice : "180"
    },{
        stockTicker : 'AAL',
        stockName : "American Airlines",
        stockPrice : "18"
    },{
        stockTicker : 'UAL',
        stockName : "United Airlines",
        stockPrice : "44"
    },{
        stockTicker : 'FB',
        stockName : "Facebook",
        stockPrice : "220"
    },{
        stockTicker : 'TSLA',
        stockName : "Tesla",
        stockPrice : "1000"
    },{
        stockTicker : 'INTL',
        stockName : "Intel",
        stockPrice : "63"
    },{
        stockTicker : 'AMD',
        stockName : "Amd",
        stockPrice : "55"
    }
];

var myFavouriteStocksList = [];

function addToMyFavorites(element) {
    if ($(element).hasClass('unchecked')) {
        $(element).removeClass('unchecked');
        $(element).addClass('checked');
        myFavouriteStocksList.push(stocksList.filter(function (entry) { return entry.stockTicker === element.id; })[0]);
    } else {
        $(element).removeClass('checked');
        $(element).addClass('unchecked');
        var removeIndex = myFavouriteStocksList.map(function(entry) { return entry.stockTicker; }).indexOf(element.id);
        myFavouriteStocksList.splice(removeIndex, 1);
    }
    populateFavourites();
}

function populateFavourites() {
    var favStocks = "";
    $("#favStocks").html("");
    $.each(myFavouriteStocksList, function( key, value ) {
        favStocks += '<li class="node"><div class="data"> <div class="caption">'
            +value.stockTicker+'</div> <div class="content"><span class="text-muted">'
            +value.stockName+'</span></div></div>  <div class="data"><div class="caption">'
            +value.stockPrice+'</div></div>';
    });
    $("#favStocks").append(favStocks);
}



