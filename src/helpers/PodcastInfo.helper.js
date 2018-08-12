import axios from 'axios'
import Parser from 'rss-parser'

const urls = {
  podcastList: "https://cors.io/?https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json",
  podcastDetails: "https://cors.io/?https://itunes.apple.com/lookup?id=:podcastId"
}

const dayInMillis = 86400000

const parser = new Parser()

const getFromLocalStorage = (variableName) => {
  return JSON.parse(window.localStorage.getItem(variableName));
}

const saveToLocalStorage = (variableName, value) => {
  window.localStorage.setItem(variableName, JSON.stringify(value));
}

const isExpired = timestamp => {
  return Date.now() - timestamp > dayInMillis
}

export const GetPodcastList = () => {
  let listExpired = false
  const lastListRequested = getFromLocalStorage('lastListRequested')
  if(lastListRequested){
    listExpired = isExpired(lastListRequested)
  }else{
    listExpired = true
  }

  if(listExpired){
    return new Promise((resolve, reject) => {
      axios.get(urls.podcastList)
      .then(response => {
        const list = response.data.feed.entry
        saveToLocalStorage('podcastList', list)
        saveToLocalStorage('lastListRequested', Date.now())
        resolve(list)
      })
      .catch(() => {
        reject("Error obtaining podcast list")
      })
    })
  }else{
    return new Promise((resolve, reject) => {
      resolve(getFromLocalStorage('podcastList'))
    })
  }
}

export const GetPodcastDetails = podcastId => {
  let podcastInfoExpired = false;
  const podcastInfo = getFromLocalStorage(`podcast${podcastId}`)
  if(podcastInfo){
    podcastInfoExpired = isExpired(podcastInfo.lastRequested)
  }else{
    podcastInfoExpired = true
  }

  if(podcastInfoExpired){
    return new Promise((resolve, reject) => {
      const podcastData = {}
      const detailsUrl = urls.podcastDetails.replace(":podcastId", podcastId)
      axios.get(detailsUrl)
      .then(response => {
        podcastData.attributes = response.data.results[0]
        podcastData.lastRequested = Date.now()
        const feedUrl = `https://cors.io/?${response.data.results[0].feedUrl}`
        parser.parseURL(feedUrl, (err, feed) => {
          if(err){
            reject("Error obtaining podcast feed")
          }else{
            podcastData.feed = feed
            saveToLocalStorage(`podcast${podcastId}`, podcastData)
            resolve(podcastData)
          }
        })
      })
      .catch(() => {
        reject("Error obtaining podcast info")
      })
    })
  }else{
    return new Promise((resolve, reject) => {
      resolve(getFromLocalStorage(`podcast${podcastId}`))
    })
  }
}
