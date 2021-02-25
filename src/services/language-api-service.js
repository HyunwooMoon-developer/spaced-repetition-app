import config from "../config";
import TokenService from "./token-service";

const LanguageApiService = {
  getLanguage() {
    return fetch(`${config.API_ENDPOINT}/language`, {
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((err) => Promise.reject(err)) : res.json()
    );
  },
  getNextWord() {
    return fetch(`${config.API_ENDPOINT}/language/head`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    }).then((res) =>
      !res.ok ? res.json().then((err) => Promise.reject(err)) : res.json()
    );
  },
  getGuess(word) {
    return fetch(`${config.API_ENDPOINT}/language/guess`, {
      headers: {
        authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(word),
    }).then((res) =>
      !res.ok ? res.json().then((err) => Promise.reject(err)) : res.json()
    );
  },
};

export default LanguageApiService;
