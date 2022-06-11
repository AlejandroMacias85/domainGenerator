/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let domainGenerator = [];
  let pronoun = ["the", "our", "a"];
  let adj = ["great", "big", "old", "silly", "small"];
  let noun = ["dog", "earth", "beard", "peace", "cartoon"];
  let domain = [".com", ".net", ".us", ".org"];
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let l = 0; l < domain.length; l++) {
          domainGenerator.push(pronoun[i] + adj[j] + noun[k] + domain[l]);
          console.log(domainGenerator[domainGenerator.length - 1]);
        }
      }
    }
  }
};
