// const fs = require("fs-extra");

const notFoundTestsJSCode = `
import { BrowserRouter,Link } from "react-router-dom";
import { describe, it, expect, run, beforeAll, afterEach } from "jest-lite";
import { render, cleanup, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const NotFound = () => (
  <div className="not-found-container">
    <div className="not-found">
      <div className="not-found-responsive-container">
        <h1 className="not-found-heading">Lost Your Way ?</h1>
        <p className="not-found-description">
          we are sorry, the page you requested could not be found Please go back
          to the homepage.
        </p>
        <Link className="go-back" to="/">
          <button type="button">Go to Home</button>
        </Link>
      </div>
    </div>
  </div>
);

async function notFoundTests() {
  const renderWithBrowserRouter = (ui = <NotFound />) => {
    return render(ui, { wrapper: BrowserRouter });
  };

  describe("Not Found Route tests", () => {
    // beforeAll(() => {
    //   console.log("before all");
    // });

    //   afterAll(() => {
    //     server.close();
    //   });

    afterEach(() => {
      // console.log("after each");
      cleanup();
    });

    it('When a random path is provided as the URL path, then the page should consist of an HTML main heading element with text content as "Lost Your Way":::5:::', () => {
      renderWithBrowserRouter();
      expect(
        screen.getByRole("heading", {
          name: /Lost Your Way/i,
        })
      ).toBeTruthy();
    });

    it('When a random path is provided as the URL path, then the page should consist of an HTML paragraph element with text content as "we are sorry, the page you requested could not be found Please go back to the homepage.":::5:::', () => {
      renderWithBrowserRouter();

      const paragraphEl = screen.getByText(
        /we are sorry, the page you requested could not be found Please go back to the homepage./i
      );

      expect(paragraphEl).toBeTruthy();
      expect(paragraphEl.tagName).toBe("P");
    });

    it('When a random path is provided as the URL path, then the page should consist of an HTML button element with text content as "Go to Home" wrapper with Link from react-router-dom:::5:::', () => {
      renderWithBrowserRouter();

      expect(
        screen.getByRole("link", {
          name: /Go to Home/i,
        })
      ).toBeTruthy();
    });

    it('When a random path is provided as the URL path, then the page should consist of an HTML button element with text content as "Go to Home":::5:::', () => {
      renderWithBrowserRouter();

      expect(
        screen.getByRole("button", {
          name: /Go to Home/i,
          exact: false,
        })
      ).toBeTruthy();
    });

    it('When a random path is provided as the URL path and the "Go to Home" button is clicked, then the page should be navigated to Home Route and consists of an HTML main heading element with text content as "Trending Now":::10:::', async () => {
      // mockGetCookie();
      renderWithBrowserRouter();

      const homeLink = screen.getByRole("link", {
        name: /Go to Home/i,
      });
      userEvent.click(homeLink);

      // expect(
      //   await screen.getByRole("heading", {
      //     name: /Trending Now/i,
      //     exact: false,
      //   })
      // ).toBeTruthy();
      // expect(window.location.pathname).toBe(homeRoutePath);
      // restoreGetCookieFns();
    });
  });

  const result = await run();
  parent.postMessage({type:"test-result",testResults:result},"*"); 
};

window.onmessage = function(event) {
  if(event.data === "run-test-cases"){
    notFoundTests()
  }
};

`;

const musicPlaylistJSCode = `
import {Component} from 'react'
import {BiSearch} from 'react-icons/bi'

import TrackItem from '../TrackItem'

import './index.css'

const initialTracksList = [
  {
    id: '3b22e3fd-3d12-4ad1-9e38-90314219c4f4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-perfect-img.png',
    name: 'Perfect',
    genre: 'Pop',
    duration: '4:04',
  },
  {
    id: '40f97965-ff45-469e-a635-b2ef9f1642ed',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-shape-of-you-img.png',
    name: 'Shape of You',
    genre: 'Divide',
    duration: '4:24',
  },
  {
    id: '782f916b-4056-44ec-a95f-5115c3f84904',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-visiting-hours.png',
    name: 'Visiting Hours',
    genre: 'Folk-Pop',
    duration: '3:49',
  },
  {
    id: 'fcf0dc77-3427-457c-9ee0-91b1dc39fece',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-shivers-img.png',
    name: 'Shivers',
    genre: 'Dance-Pop',
    duration: '3:58',
  },
  {
    id: '9c1bb890-d4d5-4edf-9d95-6959d716b442',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-bad-habits-img.png',
    name: 'Bad Habits',
    genre: 'Dance-Pop',
    duration: '4:01',
  },
  {
    id: '2216db9c-647f-4814-b880-179740e4d748',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-castle-on-the-hill-img.png',
    name: 'Castle on the Hill',
    genre: 'Pop&Rock',
    duration: '4:48',
  },
  {
    id: 'a5e30966-b760-4660-bf08-073135f7d010',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-happier-img.png',
    name: 'Happier',
    genre: 'Pop',
    duration: '3:36',
  },
  {
    id: '2d5c9bc0-b8b0-41c6-aa55-cb3b659d8604',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-photograph-img.png',
    name: 'Photograph',
    genre: 'Folk music',
    duration: '4:26',
  },
  {
    id: 'efd3d621-2c05-4941-acdc-0a1a0786bc53',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-galway-girl-img.png',
    name: 'Galway Girl',
    genre: 'Pop',
    duration: '3:20',
  },
  {
    id: 'e4b8e3b8-7776-4c09-8abc-ba328a8babe9',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-i-dont-care-img.png',
    name: "I Don't Care",
    genre: 'Pop',
    duration: '3:38',
  },
]

class MusicPlaylist extends Component {
  state = {
    searchInput: '',
    tracksList: initialTracksList,
  }

  deleteTrack = id => {
    const {tracksList} = this.state
    const filteredTracksData = tracksList.filter(
      eachTrack => eachTrack.id !== id,
    )

    this.setState(() => ({
      tracksList: [...filteredTracksData],
    }))
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  renderNoSongsFound = () => (
    <div className="no-songs-found-container">
      <p className="no-songs-found-element">No Songs Found</p>
    </div>
  )

  renderTracksList = () => {
    const {searchInput, tracksList} = this.state
    const searchResults = tracksList.filter(eachTrack =>
      eachTrack.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return searchResults.length === 0 ? (
      this.renderNoSongsFound()
    ) : (
      <ul className="track-list">
        {searchResults.map(eachTrack => (
          <TrackItem
            trackDetails={eachTrack}
            key={eachTrack.id}
            deleteTrack={this.deleteTrack}
          />
        ))}
      </ul>
    )
  }

  renderSongsPlaylistTextAndSearchInput = () => {
    const {searchInput} = this.state
    return (
      <div className="songs-playlist-text-and-search-container">
        <h1 className="songs-playlist-heading">Songs Playlist</h1>
        <div className="search-container">
          <input
            className="search-input-field"
            type="search"
            placeholder="Search"
            onChange={this.onChangeSearchInput}
            value={searchInput}
          />
          <BiSearch />
        </div>
      </div>
    )
  }

  renderBanner = () => (
    <div className="banner-container" testid="artist-details">
      <div className="banner-content">
        <h1 className="singer-name">Ed Sheeran</h1>
        <p className="singer-text">Singer</p>
      </div>
    </div>
  )

  render() {
    return (
      <div className="music-playlist-container">
        {this.renderBanner()}
        <div className="songs-playlist-container">
          {this.renderSongsPlaylistTextAndSearchInput()}
          {this.renderTracksList()}
        </div>
      </div>
    )
  }
}

export default MusicPlaylist
`.trim();

const musicPlaylistCSSCode = `
.music-playlist-container {
    display: flex;
    flex-direction: column;
    margin: auto;
    min-height: 100vh;
    width: 100%;
  }
  
  .banner-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-image: url('https://assets.ccbp.in/frontend/react-js/music-playlist/music-playlist-Edsheeran-bg.png');
    background-size: cover;
    height: 350px;
  }
  
  .banner-content {
    display: flex;
    flex-direction: column;
    margin-left: 88px;
  }
  
  .singer-name {
    color: #ffffff;
    font-family: 'Roboto';
    font-style: normal;
    font-size: 48px;
    font-weight: 500;
    margin-bottom: 4px;
  }
  .singer-text {
    color: #ffffff;
    font-family: 'Roboto';
    font-size: 32px;
    margin-top: 4px;
  }
  
  .songs-playlist-container {
    background-color: #152850;
    flex-grow: 1;
  }
  
  .songs-playlist-text-and-search-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-left: 48px;
    margin-right: 48px;
  }
  
  .songs-playlist-heading {
    color: #ffffff;
    font-family: 'Roboto';
    font-size: 32px;
    font-weight: 500;
  }
  
  .search-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    color: #ffffff;
    width: 250px;
    height: 32px;
    border: 1px solid #cbd5e1;
    border-radius: 4px;
    padding: 10px;
  }
  
  .search-input-field {
    color: #ffffff;
    flex-grow: 1;
    background-color: transparent;
    font-size: 16px;
    border: none;
    outline: none;
  }
  
  .no-songs-found-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 497px;
  }
  
  .no-songs-found-element {
    text-align: center;
    color: #ffffff;
    font-family: 'Roboto';
    font-size: 48px;
    font-weight: 500;
    padding: 0px;
  }
  
  .tracks-list {
    max-height: 471px;
    margin-bottom: 30px;
    margin-left: 48px;
    margin-right: 48px;
    padding-left: 0px;
    list-style-type: none;
    overflow-y: auto;
  }

  .btn-container {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
  
  .btn {
    background-color: rgb(15, 129, 224); /* Green */
    border: none;
    color: white;
    padding: 15px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    font-weight: bold;
    border-radius: 8px;
    cursor: pointer;
  }  
  
`.trim();

const trackItemJSCode = `
import {AiOutlineDelete} from 'react-icons/ai'

import './index.css'

const TrackItem = props => {
  const {trackDetails, deleteTrack} = props
  const {id, imageUrl, name, genre, duration} = trackDetails

  const onDeleteTrack = () => {
    deleteTrack(id)
  }

  return (
    <li className="tracks-list-item">
      <div className="song-details-container">
        <img className="song-image" src={imageUrl} alt="track" />
        <div className="song-name-and-genre-container">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="song-duration-and-delete-button-container">
        <p className="duration">{duration}</p>
        <button
          className="delete-button"
          type="button"
          onClick={onDeleteTrack}
          testid="delete"
        >
          <AiOutlineDelete size={20} />
        </button>
        
      </div>
    </li>
  )
}

export default TrackItem

`.trim();

const trackItemCSSCode = `
.tracks-list-item {
    display: flex;
    margin-bottom: 10px;
  }
  
  .song-details-container {
    display: flex;
    flex-grow: 1;
  }
  
  .song-image {
    width: 170px;
    height: 114px;
    border-radius: 8px;
  }
  
  .song-name-and-genre-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;
  }
  
  .name {
    color: #ffffff;
    font-family: 'Roboto';
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 8px;
  }
  
  .genre {
    color: #3b82f6;
    font-family: 'Roboto';
    font-size: 24px;
    margin-top: 8px;
  }
  
  .song-duration-and-delete-button-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 120px;
    margin-right: 20px;
  }
  .duration {
    color: #ffffff;
    font-family: 'Roboto';
    font-size: 24px;
  }
  
  .delete-button {
    color: #ffffff;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
  }
  
`.trim();

const appJSCode = `
import './App.css'
import MusicPlaylist from './src/components/MusicPlaylist'

const App = () => <MusicPlaylist />

export default App

`.trim();

const appCSSCode = `
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`.trim();

const packageJSONCode = `
{
  "name": "music-playlist",
  "private": true,
  "version": "1.0.0",
  "engines": {
    "node": "^10.13 || 12 || 14 || 15",
    "npm": ">=6"
  },
  "dependencies": {
    "@craco/craco": "6.1.1",
    "@testing-library/jest-dom": "5.11.9",
    "@testing-library/react": "11.2.5",
    "@testing-library/user-event": "12.6.2",
    "chalk": "4.1.0",
    "jest-styled-components": "7.0.5",
    "jest-lite": "^1.0.0-alpha.4",
    "react": "17.0.1",
    "fs-extra": "10.0.1",
    "react-dom": "17.0.1",
    "react-icons": "4.2.0",
    "react-router-dom": "5.3.0",
    "styled-components": "5.3.0"
  },
  "devDependencies": {
    "babel-plugin-styled-components": "1.13.2",
    "eslint-config-airbnb": "18.2.1",
    "eslint-config-prettier": "8.1.0",
    "eslint-plugin-prettier": "3.3.1",
    "husky": "4.3.8",
    "lint-staged": "10.5.4",
    "npm-run-all": "4.1.5",
    "prettier": "2.2.1",
    "react-scripts": "4.0.3"
  },
  "scripts": {
    "start": "craco start",
    "poststart":"node notFoundTests.js",
    "build": "craco build",
    "test": "craco test",
    "lint": "eslint .",
    "lint:fix": "eslint --fix src/",
    "format": "prettier --write ./src",
    "run-all": "npm-run-all --parallel test lint:fix"
  },
  "lint-staged": {
    "*.js": [
      "npm run lint:fix"
    ],
    "*.{js, jsx, json, html, css}": [
      "npm run format"
    ]
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "jest": {
    "collectCoverageFrom": [
      "src/**/*.js"
    ]
  },
  "browserslist": {
    "development": [
      "last 2 chrome versions",
      "last 2 firefox versions",
      "last 2 edge versions"
    ],
    "production": [
      ">1%",
      "last 4 versions",
      "Firefox ESR",
      "not ie < 11"
    ]
  }
}

`.trim();

const initialJSCode = `
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import {notFoundTests} from "./notFoundTests.js"

import "./styles.css";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
<StrictMode>
  <App />
</StrictMode>,
rootElement
);
`.trim();

export const musicPlaylistSolutionCode = {
  "/index.js": {
    code: initialJSCode,
    hidden: true,
  },
  "/App.js": {
    code: appJSCode,
  },
  "/App.css": {
    code: appCSSCode,
  },
  "/notFoundTests.js": {
    code: notFoundTestsJSCode,
    hidden: true,
  },
  "/src/components/MusicPlaylist/index.js": {
    code: musicPlaylistJSCode,
  },
  "/src/components/MusicPlaylist/index.css": {
    code: musicPlaylistCSSCode,
  },
  "/src/components/TrackItem/index.js": {
    code: trackItemJSCode,
  },
  "/src/components/TrackItem/index.css": {
    code: trackItemCSSCode,
  },
  "/package.json": {
    code: packageJSONCode,
  },
};
