const rp = require('request-promise');

var options = {
  method: 'POST',
  uri: 'https://www.traveloka.com/api/v2/hotel/search',
  body: {"clientInterface":"desktop","data":{"checkInDate":{"year":2019,"month":1,"day":26},"checkOutDate":{"year":2019,"month":1,"day":27},"numOfNights":1,"currency":"VND","numAdults":2,"numChildren":0,"numInfants":0,"numRooms":1,"ccGuaranteeOptions":{"ccInfoPreferences":["CC_TOKEN","CC_FULL_INFO"],"ccGuaranteeRequirementOptions":["CC_GUARANTEE"]},"rateTypes":["PAY_NOW","PAY_AT_PROPERTY"],"isJustLogin":false,"backdate":false,"geoId":"10010083","geoLocation":null,"monitoringSpec":{"lastKeyword":"Thành phố Đà Nẵng","referrer":"https://www.traveloka.com/vi-vn/hotel","searchId":null,"searchFunnelType":null,"isPriceFinderActive":"true","dateIndicator":"undefined","bannerMessage":"undefined","displayPrice":null},"showHidden":false,"locationName":"Thành phố Đà Nẵng, Việt Nam","sourceType":"HOTEL_GEO","boundaries":null,"contexts":{"isFamilyCheckbox":false},"basicFilterSortSpec":{"accommodationTypeFilter":[],"ascending":false,"basicSortType":"POPULARITY","facilityFilter":[],"maxPriceFilter":null,"minPriceFilter":null,"quickFilterId":null,"skip":0,"starRatingFilter":[true,true,true,true,true],"top":100},"criteriaFilterSortSpec":null,"isExtraBedIncluded":true},"fields":[]},
  headers: {
    "content-type": "application/json",
    "x-domain": "accomSearch",
    "cookie": "__flash={}; _ga=GA1.2.1691088660.1547885749; G_ENABLED_IDPS=google; ajs_user_id=null; ajs_group_id=null; _gcl_au=1.1.71061295.1547885750; ajs_anonymous_id=%2222cd0cec-44f6-485d-b616-235075147875%22; __ssid=2b0aea1d065aa080eeed784e7a3e193; cto_lwid=2c92f225-9868-47d5-a006-9cad2d48279e; ab-testingGroup.testingWebTreatmentA=testingWebControlA; ab-testingGroup.testingWebTreatmentB=testingWebControlB; ab-testingGroup.testingMWebTreatmentA=testingMWebDefaultA; ab-testingGroup.testingMWebTreatmentB=testingMWebDefaultB; ab-flight.international-roundtrip=existing; ab-payment.paymentflow=existing; ab-promoBanner.promoNewExperience=promoNewExperience1; ab-userGroup.dora_id_mweb=current; tv-pnheader=1; _gid=GA1.2.1817038044.1548215244; _gac_UA-29776811-1=1.1548220108.Cj0KCQiAm5viBRD4ARIsADGUT26vuxBwJlr3k7SC-GNwaCZTkONZX4A0xXRUhNDDnba5prIwJ5n01_IaAlRCEALw_wcB; _gcl_aw=GCL.1548220108.Cj0KCQiAm5viBRD4ARIsADGUT26vuxBwJlr3k7SC-GNwaCZTkONZX4A0xXRUhNDDnba5prIwJ5n01_IaAlRCEALw_wcB; selectedCurrency=VND; tv-repeat-visit=true; useDateFlow=false; usePromoFinder=null; flightSourceAirport=HAN; flightDestinationAirport=SGN; flightNumOfAdults=1; flightNumChildren=0; flightNumInfants=0; flightSeatClassType=ECONOMY; flexibility=0; tvs=aHiviipoLebGMEC5qT/rF2AASlrq0ThlTbE/jXVznJHKYR93HL1Ufbx5Xjko0dRGMDFc3WZ3PEUseupxXPYmfG45C5CRsA9qK3xgDGOv5AWFaPkdLGbRkqJFuV0RPWFqbY95iDWxCvaH/AgGMjI9DRcIQrJFnRdMHDaWLO1gEMVgkPtbOBKVLM8yxFYEDO4m3jW7f6f85zK7XA1xLrLbn3wpMY91AYFzJ6h8za/vSrnqDlY26eY/bwMK2Y7r9t1q; _fbp=fb.1.1548343147306.1397234857; flightFlightType=ROUNDTRIP; accomSuccessLoginConfirmation=0; flightDepartureDate=25-01-2019; flightReturnDate=27-01-2019; lux_uid=154834929733525934; _gat_UA-29776811-1=1; tvl=UgjrHQI29GvRLMAgFICqOm9OGr8RQzQItpJjjkaJuskHUhJKz+1BoXpjQ8ko3dXyk80RpZKLILpx/JKJCLVRUOBHnJjlZ5PhnYlmGXelOyICiBH4xHlH/j2zQoQB/adoykRHHrUFFsJh6IsDe223WWuJlTPIoD9abqH+9elXCiSLgVBH9waRbnwHAK6BUhhkHP/nk76YFDUXpPXhqbigNrHbhvngWsWKDtY3owB6lIAgy8wa9wwDBf3ht/xgDQAYRlv3hvKL2CDJjjw/ZIlNpQ=="
  },
  json: true
};

rp(options)
  .then(function (parsedBody) {
    console.log(parsedBody.data.entries[0]);
  })
  .catch(function (err) {
    console.log(err);
  });
