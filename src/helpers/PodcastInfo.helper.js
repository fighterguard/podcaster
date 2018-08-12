import axios from 'axios'
import { resolve } from 'url';

const urls = {
  podcastList: "https://cors.io/?https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
}

const dayInMillis = 86400000

const getFromLocalStorage = (variableName) => {
  return JSON.parse(window.localStorage.getItem(variableName));
}

const saveToLocalStorage = (variableName, value) => {
  window.localStorage.setItem(variableName, JSON.stringify(value));
}

export const GetPodcastList = () => {
  let listExpired = false;
  const lastListRequested = getFromLocalStorage('lastListRequested')
  if(lastListRequested){
    listExpired = (Date.now() - lastListRequested > dayInMillis)
  }else{
    listExpired = true;
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
      });
    })
  }else{
    return new Promise((resolve, reject) => {
      resolve(getFromLocalStorage('podcastList'))
    })
  }
}