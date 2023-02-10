import yqRequest from "..";

export function getHomeGoodPriceData() {
  return yqRequest.get({
    url: "/home/goodprice"
  })
}

export function getHomeHighScoreData() {
  return yqRequest.get({
    url: "/home/highscore"
  })
}

export function getHomeDiscountData() {
  return yqRequest.get({
    url: "/home/discount"
  })
}

export function getHomeHotRecommendData() {
  return yqRequest.get({
    url: "/home/hotrecommenddest"
  })
}

export function getHomeLongforData() {
   return yqRequest.get({
    url: "/home/longfor"
   })
}

export function getHomePlusData() {
  return yqRequest.get({
    url: "/home/plus"
  })
}