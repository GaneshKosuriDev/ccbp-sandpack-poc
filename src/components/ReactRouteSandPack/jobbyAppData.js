// const fs = require("fs-extra");

// let packageJSONCode = `
// {
//     "name": "jobby-app",
//     "private": true,
//     "version": "1.0.0",
//     "engines": {
//       "node": "^10.13 || 12 || 14 || 15",
//       "npm": ">=6"
//     },
//     "dependencies": {
//       "@testing-library/jest-dom": "5.11.9",
//       "@testing-library/react": "11.2.5",
//       "@testing-library/user-event": "12.6.2",
//       "chalk": "4.1.0",
//       "history": "5.0.0",
//       "msw": "0.28.1",
//       "js-cookie": "2.2.1",
//       "react": "17.0.1",
//       "react-dom": "17.0.1",
//       "react-icons": "4.2.0",
//       "react-loader-spinner": "4.0.0",
//       "react-router-dom": "5.2.0"
//     },
//     "devDependencies": {
//       "eslint-config-airbnb": "18.2.1",
//       "eslint-config-prettier": "8.1.0",
//       "eslint-plugin-prettier": "3.3.1",
//       "husky": "4.3.8",
//       "lint-staged": "10.5.4",
//       "npm-run-all": "4.1.5",
//       "prettier": "2.2.1",
//       "react-scripts": "4.0.3"
//     },
//     "scripts": {
//       "start": "react-scripts start",
//       "build": "react-scripts build",
//       "test": "react-scripts test",
//       "lint": "eslint .",
//       "lint:fix": "eslint --fix src/",
//       "format": "prettier --write ./src",
//       "run-all": "npm-run-all --parallel test lint:fix"
//     },
//     "lint-staged": {
//       "*.js": [
//         "npm run lint:fix"
//       ],
//       "*.{js, jsx, json, html, css}": [
//         "npm run format"
//       ]
//     },
//     "husky": {
//       "hooks": {
//         "pre-commit": "lint-staged"
//       }
//     },
//     "jest": {
//       "collectCoverageFrom": [
//         "src/**/*.js"
//       ]
//     },
//     "browserslist": {
//       "development": [
//         "last 2 chrome versions",
//         "last 2 firefox versions",
//         "last 2 edge versions"
//       ],
//       "production": [
//         ">1%",
//         "last 4 versions",
//         "Firefox ESR",
//         "not ie < 11"
//       ]
//     }
//   }

// `.trim();

// let initialJSCode = `
// import React from 'react'
// import ReactDOM from 'react-dom'
// import {BrowserRouter} from 'react-router-dom'

// import App from './App'

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root'),
// )
// `.trim();

// let appJSCode = `
// import {Route, Switch,BrowserRouter, Redirect} from 'react-router-dom'

// import Login from './src/components/Login'
// import Home from './src/components/Home'
// import Jobs from './src/components/Jobs'
// import JobItemDetails from './src/components/JobItemDetails'
// import NotFound from './src/components/NotFound'
// import ProtectedRoute from './src/components/ProtectedRoute'

// import './App.css'

// const App = () => (
//     <BrowserRouter>
//     <Switch>
//     <Route exact path="/login" component={Login} />
//     <ProtectedRoute exact path="/" component={Home} />
//     <ProtectedRoute exact path="/jobs" component={Jobs} />
//     <ProtectedRoute exact path="/jobs/:id" component={JobItemDetails} />
//     <Route path="/not-found" component={NotFound} />
//     <Redirect to="not-found" />
//     </Switch>
//     </BrowserRouter>
// )

// export default App

// `.trim();

// let appCSSCode = `
// * {
//     box-sizing: border-box;
//   }

//   body {
//     margin: 0;
//     font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
//       'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
//       sans-serif;
//     -webkit-font-smoothing: antialiased;
//     -moz-osx-font-smoothing: grayscale;
//   }

// `.trim();

// let filtersGroupJSCode = "";
// let filtersGroupCSSCode = "";

// fs.readFile("./components/FiltersGroup/index.js", "utf8")
//   .then((fileContent) => {
//     return fileContent;
//   })
//   .then((fileContent) => {
//     filtersGroupJSCode = fileContent;
//   });

// fs.readFile("./components/FiltersGroup/index.css", "utf8")
//   .then((fileContent) => {
//     return fileContent;
//   })
//   .then((fileContent) => {
//     filtersGroupCSSCode = fileContent;
//   });

// let headerJSCode = "";
// let headerCSSCode = "";

// fs.readFile("./components/Header/index.js", "utf8")
//   .then((fileContent) => {
//     return fileContent;
//   })
//   .then((fileContent) => {
//     headerJSCode = fileContent;
//   });

// fs.readFile("./components/Header/index.css", "utf8")
//   .then((fileContent) => {
//     return fileContent;
//   })
//   .then((fileContent) => {
//     headerCSSCode = fileContent;
//   });

// let homeJSCode = "";
// let homeCSSCode = "";

// fs.readFile("./components/Home/index.js", "utf8")
//   .then((fileContent) => {
//     return fileContent;
//   })
//   .then((fileContent) => {
//     homeJSCode = fileContent;
//   });
// fs.readFile("./components/Home/index.css", "utf8")
//   .then((fileContent) => {
//     return fileContent;
//   })
//   .then((fileContent) => {
//     homeCSSCode = fileContent;
//   });

// let jobItemJSCode = "";
// let jobItemCSSCode = "";

// fs.readFile("./components/JobItem/index.js", "utf8")
//   .then((fileContent) => {
//     return fileContent;
//   })
//   .then((fileContent) => {
//     jobItemJSCode = fileContent;
//   });
// fs.readFile("./components/JobItem/index.css", "utf8")
//   .then((fileContent) => {
//     return fileContent;
//   })
//   .then((fileContent) => {
//     jobItemCSSCode = fileContent;
//   });

// let jobItemDetailsJSCode = "";
// let jobItemDetailsCSSCode = "";

// fs.readFile("./components/JobItemDetails/index.js", "utf8")
//   .then((fileContent) => {
//     return fileContent;
//   })
//   .then((fileContent) => {
//     jobItemDetailsJSCode = fileContent;
//   });
// fs.readFile("./components/JobItemDetails/index.css", "utf8")
//   .then((fileContent) => {
//     return fileContent;
//   })
//   .then((fileContent) => {
//     jobItemDetailsCSSCode = fileContent;
//   });

// let jobsJSCode = "";
// let jobsCSSCode = "";

// fs.readFile("./components/Jobs/index.js", "utf8")
//   .then((fileContent) => {
//     return fileContent;
//   })
//   .then((fileContent) => {
//     jobsJSCode = fileContent;
//   });
// fs.readFile("./components/Jobs/index.css", "utf8")
//   .then((fileContent) => {
//     return fileContent;
//   })
//   .then((fileContent) => {
//     jobsCSSCode = fileContent;
//   });

// let jobsHeaderJSCode = "";
// let jobsHeaderCSSCode = "";

// fs.readFile("./components/JobsHeader/index.js", "utf8")
//   .then((fileContent) => {
//     return fileContent;
//   })
//   .then((fileContent) => {
//     jobsHeaderJSCode = fileContent;
//   });
// fs.readFile("./components/JobsHeader/index.css", "utf8")
//   .then((fileContent) => {
//     return fileContent;
//   })
//   .then((fileContent) => {
//     jobsHeaderCSSCode = fileContent;
//   });

// let loginJSCode = "";
// let loginCSSCode = "";

// fs.readFile("./components/Login/index.js", "utf8")
//   .then((fileContent) => {
//     return fileContent;
//   })
//   .then((fileContent) => {
//     loginJSCode = fileContent;
//   });
// fs.readFile("./components/Login/index.css", "utf8")
//   .then((fileContent) => {
//     return fileContent;
//   })
//   .then((fileContent) => {
//     loginCSSCode = fileContent;
//   });

// let notFoundJSCode = "";
// let notFoundCSSCode = "";

// fs.readFile("./components/NotFound/index.js", "utf8")
//   .then((fileContent) => {
//     return fileContent;
//   })
//   .then((fileContent) => {
//     notFoundJSCode = fileContent;
//   });
// fs.readFile("./components/NotFound/index.css", "utf8")
//   .then((fileContent) => {
//     return fileContent;
//   })
//   .then((fileContent) => {
//     notFoundCSSCode = fileContent;
//   });

// let profileJSCode = "";
// let profileCSSCode = "";

// fs.readFile("./components/Profile/index.js", "utf8")
//   .then((fileContent) => {
//     return fileContent;
//   })
//   .then((fileContent) => {
//     profileJSCode = fileContent;
//   });
// fs.readFile("./components/Profile/index.css", "utf8")
//   .then((fileContent) => {
//     return fileContent;
//   })
//   .then((fileContent) => {
//     profileCSSCode = fileContent;
//   });

// let protectedRouteJSCode = "";
// fs.readFile("./components/ProtectedRoute/index.js", "utf8")
//   .then((fileContent) => {
//     return fileContent;
//   })
//   .then((fileContent) => {
//     protectedRouteJSCode = fileContent;
//   });

// let similarJobItemJSCode = "";
// let similarJobItemCSSCode = "";

// fs.readFile("./components/SimilarJobItem/index.js", "utf8")
//   .then((fileContent) => {
//     return fileContent;
//   })
//   .then((fileContent) => {
//     similarJobItemJSCode = fileContent;
//   });
// fs.readFile("./components/SimilarJobItem/index.css", "utf8")
//   .then((fileContent) => {
//     return fileContent;
//   })
//   .then((fileContent) => {
//     similarJobItemCSSCode = fileContent;
//     const jobbyAppSolutionCode = {
//       "/App.js": {
//         code: appJSCode,
//       },
//       "/App.css": {
//         code: appCSSCode,
//       },
//       "/index.js": {
//         code: initialJSCode,
//       },
//       "/src/components/FiltersGroup/index.js": {
//         code: filtersGroupJSCode,
//       },
//       "/src/components/FiltersGroup/index.css": {
//         code: filtersGroupCSSCode,
//       },
//       "/src/components/Header/index.js": {
//         code: headerJSCode,
//       },
//       "/src/components/Header/index.css": {
//         code: headerCSSCode,
//       },
//       "/src/components/Home/index.js": {
//         code: homeJSCode,
//       },
//       "/src/components/Home/index.css": {
//         code: homeCSSCode,
//       },
//       "/src/components/JobItem/index.js": {
//         code: jobItemJSCode,
//       },
//       "/src/components/JobItem/index.css": {
//         code: jobItemCSSCode,
//       },
//       "/src/components/JobItemDetails/index.js": {
//         code: jobItemDetailsJSCode,
//       },
//       "/src/components/JobItemDetails/index.css": {
//         code: jobItemDetailsCSSCode,
//       },
//       "/src/components/Jobs/index.js": {
//         code: jobsJSCode,
//       },
//       "/src/components/Jobs/index.css": {
//         code: jobsCSSCode,
//       },
//       "/src/components/JobsHeader/index.js": {
//         code: jobsHeaderJSCode,
//       },
//       "/src/components/JobsHeader/index.css": {
//         code: jobsHeaderCSSCode,
//       },
//       "/src/components/Login/index.js": {
//         code: loginJSCode,
//       },
//       "/src/components/Login/index.css": {
//         code: loginCSSCode,
//       },
//       "/src/components/NotFound/index.js": {
//         code: notFoundJSCode,
//       },
//       "/src/components/NotFound/index.css": {
//         code: notFoundCSSCode,
//       },
//       "/src/components/Profile/index.js": {
//         code: profileJSCode,
//       },
//       "/src/components/Profile/index.css": {
//         code: profileCSSCode,
//       },
//       "/src/components/ProtectedRoute/index.js": {
//         code: protectedRouteJSCode,
//       },
//       "/src/components/SimilarJobItem/index.js": {
//         code: similarJobItemJSCode,
//       },
//       "/src/components/SimilarJobItem/index.css": {
//         code: similarJobItemCSSCode,
//       },
//       "/package.json": {
//         code: packageJSONCode,
//       },
//     };
//     fs.outputFile(
//       "./myData.json",
//       JSON.stringify(jobbyAppSolutionCode, null, 2),
//       (error) => {
//         if (error) console.log("Error", error);
//       }
//     );
//   });

export const jobbyAppSolutionCode = {
  "/src/components/Login/index.js": {
    code: 'import { Component } from "react";\nimport Cookies from "js-cookie";\nimport { Redirect } from "react-router-dom";\n\nimport "./index.css";\n\nclass Login extends Component {\n  state = {\n    userNameInput: "",\n    passwordInput: "",\n    showSubmitError: false,\n    errorMsg: "",\n  };\n\n  onChangeUsername = (event) => {\n    this.setState({ userNameInput: event.target.value });\n  };\n\n  onChangePassword = (event) => {\n    this.setState({ passwordInput: event.target.value });\n  };\n\n  onSubmitSuccess = (jwtToken) => {\n    const { history } = this.props;\n    Cookies.set("jwt_token", jwtToken, {\n      expires: 30,\n      path: "/",\n    });\n    localStorage.setItem("jwt_token", jwtToken);\n    history.replace("/");\n  };\n\n  onSubmitFailure = (errorMsg) => {\n    this.setState({ showSubmitError: true, errorMsg });\n  };\n\n  submitForm = async (event) => {\n    event.preventDefault();\n    const { userNameInput, passwordInput } = this.state;\n    const userDetails = { username: userNameInput, password: passwordInput };\n    const url = "https://apis.ccbp.in/login";\n    const options = {\n      method: "POST",\n      body: JSON.stringify(userDetails),\n    };\n    const response = await fetch(url, options);\n    const data = await response.json();\n    if (response.ok === true) {\n      this.onSubmitSuccess(data.jwt_token);\n    } else {\n      this.onSubmitFailure(data.error_msg);\n    }\n  };\n\n  renderPasswordField = () => {\n    const { passwordInput } = this.state;\n\n    return (\n      <>\n        <label className="input-label" htmlFor="passwordInput">\n          PASSWORD\n        </label>\n        <input\n          type="password"\n          id="passwordInput"\n          className="input-field"\n          value={passwordInput}\n          onChange={this.onChangePassword}\n          placeholder="Password"\n        />\n      </>\n    );\n  };\n\n  renderUsernameField = () => {\n    const { userNameInput } = this.state;\n\n    return (\n      <>\n        <label className="input-label" htmlFor="userNameInput">\n          USERNAME\n        </label>\n        <input\n          type="text"\n          id="userNameInput"\n          className="input-field"\n          value={userNameInput}\n          onChange={this.onChangeUsername}\n          placeholder="Username"\n        />\n      </>\n    );\n  };\n\n  render() {\n    const { showSubmitError, errorMsg } = this.state;\n    const jwtTokenOld = Cookies.get("jwt_token");\n    const jwtToken = localStorage.getItem("jwt_token");\n    if (jwtToken !== undefined) {\n      return <Redirect to="/" />;\n    }\n\n    return (\n      <div className="login-form-container">\n        <form className="form-container" onSubmit={this.submitForm}>\n          <img\n            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"\n            className="login-website-logo"\n            alt="website logo"\n          />\n          <div className="input-container">{this.renderUsernameField()}</div>\n          <div className="input-container">{this.renderPasswordField()}</div>\n          <button className="login-button" type="submit">\n            Login\n          </button>\n          {showSubmitError && <p className="error-message">*{errorMsg}</p>}\n        </form>\n      </div>\n    );\n  }\n}\n\nexport default Login;\n',
  },
  "/src/components/ProtectedRoute/index.js": {
    code: 'import { Redirect, Route } from "react-router-dom";\nimport Cookie from "js-cookie";\n\nconst ProtectedRoute = (props) => {\n  const tokenOld = Cookie.get("jwt_token");\n  const token = localStorage.getItem("jwt_token");\n  if (token === undefined) {\n    return <Redirect to="/login" />;\n  }\n  return <Route {...props} />;\n};\n\nexport default ProtectedRoute;\n',
  },
  "/App.js": {
    code: "import {Route, Switch,BrowserRouter, Redirect} from 'react-router-dom'\n\nimport Login from './src/components/Login'\nimport Home from './src/components/Home'\nimport Jobs from './src/components/Jobs'\nimport JobItemDetails from './src/components/JobItemDetails'\nimport NotFound from './src/components/NotFound'\nimport ProtectedRoute from './src/components/ProtectedRoute'\n\nimport './App.css'\n\nconst App = () => (\n    <BrowserRouter>\n    <Switch>\n    <Route exact path=\"/login\" component={Login} />\n    <ProtectedRoute exact path=\"/\" component={Home} />\n    <ProtectedRoute exact path=\"/jobs\" component={Jobs} />\n    <ProtectedRoute exact path=\"/jobs/:id\" component={JobItemDetails} />\n    <Route path=\"/not-found\" component={NotFound} />\n    <Redirect to=\"not-found\" />\n    </Switch>\n    </BrowserRouter>\n)\n\nexport default App",
  },
  "/App.css": {
    code: "* {\n    box-sizing: border-box;\n  }\n\n  body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }",
  },
  "/index.js": {
    code: "import React from 'react'\nimport ReactDOM from 'react-dom'\nimport {BrowserRouter} from 'react-router-dom'\n\nimport App from './App'\n\nReactDOM.render(\n  <React.StrictMode>\n    <BrowserRouter>\n      <App />\n    </BrowserRouter>\n  </React.StrictMode>,\n  document.getElementById('root'),\n)",
  },
  "/src/components/FiltersGroup/index.js": {
    code: 'import \'./index.css\'\n\nconst FiltersGroup = props => {\n  const renderSalaryRangesList = () => {\n    const {salaryRangesList, changeSalaryRange} = props\n\n    return salaryRangesList.map(salaryRange => {\n      const {salaryRangeId} = salaryRange\n      const onChangeSalaryRange = () => {\n        changeSalaryRange(salaryRangeId)\n      }\n\n      return (\n        <li className="salary-range-item" key={salaryRange.salaryRangeId}>\n          <input\n            className="salary-range-radio-button"\n            id={salaryRange.salaryRangeId}\n            type="radio"\n            name="salary_range"\n            onChange={onChangeSalaryRange}\n          />\n          <label\n            className="salary-range-label"\n            htmlFor={salaryRange.salaryRangeId}\n          >\n            {salaryRange.label}\n          </label>\n        </li>\n      )\n    })\n  }\n\n  const renderSalaryRanges = () => (\n    <div>\n      <h1 className="salary-range-heading">Salary Range</h1>\n      <ul className="salary-range-list">{renderSalaryRangesList()}</ul>\n    </div>\n  )\n\n  const renderEmploymentTypeList = () => {\n    const {employmentTypesList} = props\n\n    return employmentTypesList.map(employmentType => {\n      const {changeEmploymentType} = props\n      const onChangeEmploymentType = event => {\n        const {checked} = event.target\n        const {employmentTypeId} = employmentType\n        changeEmploymentType(checked, employmentTypeId)\n      }\n\n      return (\n        <li\n          className="employment-type-item"\n          key={employmentType.employmentTypeId}\n        >\n          <input\n            className="employment-type-checkbox"\n            id={employmentType.employmentTypeId}\n            type="checkbox"\n            onChange={onChangeEmploymentType}\n          />\n          <label\n            className="employment-type-label"\n            htmlFor={employmentType.employmentTypeId}\n          >\n            {employmentType.label}\n          </label>\n        </li>\n      )\n    })\n  }\n\n  const renderEmploymentTypes = () => (\n    <>\n      <h1 className="employment-type-heading">Type of Employment</h1>\n      <ul className="employment-type-list">{renderEmploymentTypeList()}</ul>\n      <hr className="horizontal-line" />\n    </>\n  )\n\n  return (\n    <div className="filters-group-container">\n      {renderEmploymentTypes()}\n      {renderSalaryRanges()}\n    </div>\n  )\n}\n\nexport default FiltersGroup\n',
  },
  "/src/components/FiltersGroup/index.css": {
    code: ".filters-group-container {\n  margin-top: 16px;\n}\n\n@media screen and (min-width: 768px) {\n  .filters-group-container {\n    margin-top: 24px;\n    max-width: 280px;\n    min-width: 256px;\n  }\n}\n\n.employment-type-heading {\n  color: #ffffff;\n  font-family: 'Roboto';\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.75;\n  margin-top: 24px;\n  margin-bottom: 16px;\n}\n\n.employment-type-list {\n  padding-left: 0;\n}\n\n.employment-type-item {\n  display: flex;\n  align-items: center;\n  list-style-type: none;\n  margin-bottom: 12px;\n  cursor: pointer;\n}\n\n.employment-type-checkbox {\n  width: 16px;\n  height: 16px;\n  border-radius: 4px;\n  margin-right: 12px;\n  cursor: pointer;\n}\n\n.employment-type-label {\n  color: #f8fafc;\n  font-family: 'Roboto';\n  font-size: 14px;\n  line-height: 1.71;\n  cursor: pointer;\n}\n\n.horizontal-line {\n  border: 1px solid #64748b;\n  margin: 0px;\n}\n\n.salary-range-heading {\n  color: #ffffff;\n  font-family: 'Roboto';\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.75;\n  margin-top: 24px;\n  margin-bottom: 16px;\n}\n\n.salary-range-list {\n  padding-left: 0;\n}\n\n.salary-range-item {\n  display: flex;\n  align-items: center;\n  list-style-type: none;\n  margin-bottom: 12px;\n  cursor: pointer;\n}\n\n.salary-range-radio-button {\n  width: 16px;\n  height: 16px;\n  border-radius: 4px;\n  margin-top: 0px;\n  margin-right: 12px;\n  margin-left: 0px;\n  cursor: pointer;\n}\n\n.salary-range-label {\n  color: #f8fafc;\n  font-family: 'Roboto';\n  font-size: 14px;\n  line-height: 1.71;\n  cursor: pointer;\n}\n",
  },
  "/src/components/Header/index.js": {
    code: 'import { Link, withRouter } from "react-router-dom";\nimport Cookies from "js-cookie";\nimport { AiFillHome } from "react-icons/ai";\nimport { BsFillBriefcaseFill } from "react-icons/bs";\nimport { FiLogOut } from "react-icons/fi";\n\nimport "./index.css";\n\nconst Header = (props) => {\n  const { history } = props;\n  const onClickLogout = () => {\n    Cookies.remove("jwt_token");\n    localStorage.removeItem("jwt_token");\n    history.replace("/login");\n  };\n\n  return (\n    <nav className="nav-header">\n      <div className="nav-content">\n        <div className="nav-bar-mobile-logo-container">\n          <Link to="/">\n            <img\n              className="website-logo"\n              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"\n              alt="website logo"\n            />\n          </Link>\n          <ul className="nav-menu-list-mobile">\n            <li className="nav-menu-item-mobile">\n              <Link to="/">\n                <AiFillHome className="nav-item-icon" />\n              </Link>\n            </li>\n\n            <li className="nav-menu-item-mobile">\n              <Link to="/jobs" className="nav-link">\n                <BsFillBriefcaseFill className="nav-item-icon" />\n              </Link>\n            </li>\n            <li className="nav-menu-item-mobile">\n              <button\n                type="button"\n                className="nav-mobile-btn"\n                onClick={onClickLogout}\n              >\n                <FiLogOut className="nav-item-icon" />\n              </button>\n            </li>\n          </ul>\n        </div>\n        <div className="nav-bar-large-container">\n          <Link to="/">\n            <img\n              className="website-logo"\n              src="https://assets.ccbp.in/frontend/react-js/logo-img.png"\n              alt="website logo"\n            />\n          </Link>\n          <ul className="nav-menu">\n            <li className="nav-menu-item">\n              <Link to="/" className="nav-link">\n                Home\n              </Link>\n            </li>\n\n            <li className="nav-menu-item">\n              <Link to="/jobs" className="nav-link">\n                Jobs\n              </Link>\n            </li>\n          </ul>\n          <button\n            type="button"\n            className="logout-desktop-btn"\n            onClick={onClickLogout}\n          >\n            Logout\n          </button>\n        </div>\n      </div>\n    </nav>\n  );\n};\n\nexport default withRouter(Header);\n',
  },
  "/src/components/Header/index.css": {
    code: ".nav-header {\n  display: flex;\n  justify-content: center;\n  background-color: #272727;\n}\n\n@media screen and (max-width: 768px) {\n  .nav-header {\n    flex-direction: column;\n    align-items: center;\n    border-bottom-style: none;\n  }\n}\n\n.nav-content {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 90%;\n  padding-top: 24px;\n  padding-bottom: 24px;\n  max-width: 1110px;\n}\n\n@media screen and (max-width: 768px) {\n  .nav-content {\n    flex-direction: column;\n    padding-top: 18px;\n    padding-bottom: 18px;\n    max-width: 458px;\n  }\n}\n\n.nav-bar-mobile-logo-container {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n\n@media screen and (min-width: 768px) {\n  .nav-bar-mobile-logo-container {\n    display: none;\n  }\n}\n\n.nav-bar-large-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  max-width: 1110px;\n}\n\n@media screen and (max-width: 767px) {\n  .nav-bar-large-container {\n    display: none;\n  }\n}\n\n.website-logo {\n  width: 64px;\n}\n\n@media screen and (min-width: 768px) {\n  .website-logo {\n    width: 124px;\n  }\n}\n\n.nav-menu {\n  display: flex;\n  flex-direction: row;\n  list-style-type: none;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\n@media screen and (max-width: 767px) {\n  .nav-menu {\n    display: none;\n  }\n}\n\n.nav-menu-list-mobile {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  list-style-type: none;\n  margin: 0px;\n}\n\n.nav-menu-item-mobile {\n  margin: 0px;\n  margin-left: 24px;\n  cursor: pointer;\n}\n\n.nav-item-icon {\n  color: #f8fafc;\n  width: 24px;\n  height: 24px;\n}\n\n.nav-mobile-btn {\n  border: none;\n  background: transparent;\n  padding: 0px;\n  cursor: pointer;\n  outline: none;\n}\n\n.nav-menu-item {\n  font-family: 'Roboto';\n  font-weight: 500;\n  font-size: 16px;\n  text-decoration: none;\n  margin: 10px;\n}\n\n.nav-link {\n  color: #f8fafc;\n  text-decoration: none;\n}\n\n.logout-desktop-btn {\n  color: #ffffff;\n  font-family: 'Roboto';\n  font-weight: 600;\n  font-size: 12px;\n  background-color: #6366f1;\n  border: none;\n  border-radius: 4px;\n  padding-top: 8px;\n  padding-right: 32px;\n  padding-bottom: 8px;\n  padding-left: 32px;\n  cursor: pointer;\n  outline: none;\n}\n",
  },
  "/src/components/Home/index.js": {
    code: 'import {Link} from \'react-router-dom\'\n\nimport Header from \'../Header\'\n\nimport \'./index.css\'\n\nconst Home = () => (\n  <div className="home-container">\n    <Header />\n    <div className="home">\n      <div className="home-content">\n        <h1 className="home-heading">Find The Job That Fits Your Life</h1>\n        <p className="home-description">\n          Millions of people are searching for jobs, salary information, company\n          reviews. Find the job that fits your abilities and potential.\n        </p>\n        <Link to="/jobs" className="jobs-link">\n          <button type="button" className="find-jobs-button">\n            Find Jobs\n          </button>\n        </Link>\n      </div>\n    </div>\n  </div>\n)\n\nexport default Home\n',
  },
  "/src/components/Home/index.css": {
    code: ".home-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.home {\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  background-image: url('https://assets.ccbp.in/frontend/react-js/home-sm-bg.png');\n  background-size: cover;\n}\n\n@media screen and (min-width: 768px) {\n  .home {\n    background-image: url('https://assets.ccbp.in/frontend/react-js/home-lg-bg.png');\n  }\n}\n\n.home-content {\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin-top: 32px;\n  max-width: 458px;\n}\n\n@media screen and (min-width: 768px) {\n  .home-content {\n    margin-top: 120px;\n    max-width: 1110px;\n  }\n}\n\n.home-heading {\n  color: #ffffff;\n  font-family: 'Roboto';\n  font-weight: 600;\n  font-size: 32px;\n  line-height: 1.5;\n  margin: 0px;\n}\n\n@media screen and (min-width: 768px) {\n  .home-heading {\n    font-size: 72px;\n    line-height: 1.3;\n    width: 660px;\n  }\n}\n\n.home-description {\n  color: #f1f5f9;\n  font-family: 'Roboto';\n  font-size: 16px;\n  line-height: 1.75;\n  margin-top: 24px;\n  margin-bottom: 24px;\n}\n\n@media screen and (min-width: 768px) {\n  .home-description {\n    font-size: 24px;\n    line-height: 1.6;\n    width: 626px;\n    margin-bottom: 48px;\n  }\n}\n\n.jobs-link {\n  align-self: flex-start;\n}\n\n.find-jobs-button {\n  color: #ffffff;\n  font-family: 'Roboto';\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 1.33;\n  background-color: #6366f1;\n  border: none;\n  border-radius: 8px;\n  padding-top: 8px;\n  padding-right: 16px;\n  padding-bottom: 8px;\n  padding-left: 16px;\n  outline: none;\n  cursor: pointer;\n}\n\n@media screen and (min-width: 768px) {\n  .find-jobs-button {\n    font-size: 16px;\n    font-weight: 600;\n    padding-top: 16px;\n    padding-right: 32px;\n    padding-bottom: 16px;\n    padding-left: 32px;\n  }\n}\n",
  },
  "/src/components/JobItem/index.js": {
    code: 'import {Link} from \'react-router-dom\'\nimport {BsBriefcaseFill, BsFillStarFill} from \'react-icons/bs\'\nimport {MdLocationOn} from \'react-icons/md\'\n\nimport \'./index.css\'\n\nconst JobItem = props => {\n  const {jobData} = props\n  const {\n    companyLogoUrl,\n    title,\n    rating,\n    location,\n    employmentType,\n    packagePerAnnum,\n    jobDescription,\n    id,\n  } = jobData\n\n  return (\n    <Link to={`/jobs/${id}`} className="link-item">\n      <li className="job-item">\n        <div className="job-intro-container">\n          <img\n            src={companyLogoUrl}\n            alt="company logo"\n            className="company-logo"\n          />\n          <div>\n            <h1 className="title">{title}</h1>\n            <div className="rating-container">\n              <BsFillStarFill className="star" />\n              <p className="rating">{rating}</p>\n            </div>\n          </div>\n        </div>\n        <div className="location-and-package-container">\n          <div className="location-type-container">\n            <div className="location-container">\n              <MdLocationOn className="location-icon" />\n              <p className="location">{location}</p>\n            </div>\n            <div className="employment-type-container">\n              <BsBriefcaseFill className="employment-type-icon" />\n              <p className="employment-type">{employmentType}</p>\n            </div>\n          </div>\n          <p className="package">{packagePerAnnum}</p>\n        </div>\n        <hr className="horizontal-line" />\n        <h1 className="description-heading">Description</h1>\n        <p className="description">{jobDescription}</p>\n      </li>\n    </Link>\n  )\n}\n\nexport default JobItem\n',
  },
  "/src/components/JobItem/index.css": {
    code: ".link-item {\n  text-decoration: none;\n}\n\n.job-item {\n  background-color: #272727;\n  border-radius: 16px;\n  list-style: none;\n  margin-bottom: 24px;\n  padding-top: 24px;\n  padding-right: 12px;\n  padding-bottom: 24px;\n  padding-left: 12px;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.02);\n}\n\n@media screen and (min-width: 768px) {\n  .job-item {\n    padding: 24px;\n  }\n}\n\n.job-intro-container {\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n}\n\n@media screen and (min-width: 768px) {\n  .job-intro-container {\n    margin-bottom: 24px;\n  }\n}\n\n.company-logo {\n  width: 48px;\n  height: 48px;\n  margin-right: 8px;\n  border-radius: 8px;\n}\n\n@media screen and (min-width: 768px) {\n  .company-logo {\n    width: 60px;\n    height: 60px;\n    margin-right: 16px;\n  }\n}\n\n.title {\n  color: #f8fafc;\n  font-family: 'Roboto';\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 1.5;\n  margin: 0px;\n  margin-bottom: 6px;\n}\n\n@media screen and (min-width: 768px) {\n  .title {\n    font-size: 20px;\n    line-height: 1.6;\n  }\n}\n\n.rating-container {\n  display: flex;\n  align-items: center;\n}\n\n.star {\n  color: #fbbf24;\n  width: 16px;\n  height: 16px;\n  margin-right: 6px;\n}\n\n@media screen and (min-width: 768px) {\n  .star {\n    width: 19px;\n    height: 19px;\n  }\n}\n\n.rating {\n  color: #ffffff;\n  font-family: 'Roboto';\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 0.6;\n  margin: 0px;\n}\n\n@media screen and (min-width: 768px) {\n  .rating {\n    font-size: 19px;\n    line-height: 1.75;\n  }\n}\n\n.location-and-package-container {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n\n@media screen and (min-width: 768px) {\n  .location-and-package-container {\n    margin-bottom: 11px;\n  }\n}\n\n.location-type-container {\n  display: flex;\n  align-items: center;\n}\n\n.location-container {\n  display: flex;\n  align-items: center;\n  margin-right: 12px;\n}\n\n@media screen and (min-width: 768px) {\n  .location-container {\n    margin-right: 24px;\n  }\n}\n\n.location-icon {\n  color: #f8fafc;\n  width: 14px;\n  height: 14px;\n  margin-right: 4px;\n}\n\n@media screen and (min-width: 768px) {\n  .location-icon {\n    width: 24px;\n    height: 24px;\n    margin-right: 8px;\n  }\n}\n\n.location {\n  color: #f8fafc;\n  font-family: 'Roboto';\n  font-size: 12px;\n  line-height: 1.66;\n  margin: 0px;\n}\n\n@media screen and (min-width: 768px) {\n  .location {\n    font-size: 14px;\n    line-height: 1.71;\n  }\n}\n\n.employment-type-container {\n  display: flex;\n  align-items: center;\n}\n\n.employment-type-icon {\n  color: #f8fafc;\n  width: 14px;\n  height: 14px;\n  margin-right: 4px;\n}\n\n@media screen and (min-width: 768px) {\n  .employment-type-icon {\n    width: 24px;\n    height: 24px;\n    margin-right: 8px;\n  }\n}\n\n.employment-type {\n  color: #f8fafc;\n  font-family: 'Roboto';\n  font-size: 12px;\n  line-height: 1.6;\n  margin: 0px;\n}\n\n@media screen and (min-width: 768px) {\n  .employment-type {\n    font-size: 14px;\n    line-height: 1.71;\n  }\n}\n\n.package {\n  color: #f8fafc;\n  font-family: 'Roboto';\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.75;\n  margin: 0px;\n}\n\n@media screen and (min-width: 768px) {\n  .package {\n    font-size: 20px;\n  }\n}\n\n.description-heading {\n  color: #ffffff;\n  font-family: 'Roboto';\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.42;\n  margin-top: 16px;\n}\n\n@media screen and (min-width: 768px) {\n  .description-heading {\n    font-size: 18px;\n    line-height: 1.33;\n  }\n}\n\n.description {\n  color: #f8fafc;\n  font-family: 'Roboto';\n  font-size: 14px;\n  line-height: 1.71;\n  margin: 0px;\n  margin-top: 12px;\n}\n\n@media screen and (min-width: 768px) {\n  .description {\n    font-size: 16px;\n    line-height: 1.75;\n  }\n}\n",
  },
  "/src/components/JobItemDetails/index.js": {
    code: 'import { Component } from "react";\nimport Cookies from "js-cookie";\nimport Loader from "react-loader-spinner";\nimport { BsBriefcaseFill, BsFillStarFill } from "react-icons/bs";\nimport { MdLocationOn } from "react-icons/md";\nimport { FiExternalLink } from "react-icons/fi";\n\nimport Header from "../Header";\nimport SimilarJobItem from "../SimilarJobItem";\n\nimport "./index.css";\n\nconst apiStatusConstants = {\n  initial: "INITIAL",\n  success: "SUCCESS",\n  failure: "FAILURE",\n  inProgress: "IN_PROGRESS",\n};\n\nclass JobItemDetails extends Component {\n  state = {\n    jobData: {},\n    similarJobsData: [],\n    apiStatus: apiStatusConstants.initial,\n  };\n\n  componentDidMount() {\n    this.getJobData();\n  }\n\n  getFormattedJobDetailsData = (job) => ({\n    title: job.title,\n    companyLogoUrl: job.company_logo_url,\n    companyWebsiteUrl: job.company_website_url,\n    employmentType: job.employment_type,\n    jobDescription: job.job_description,\n    id: job.id,\n    location: job.location,\n    packagePerAnnum: job.package_per_annum,\n    rating: job.rating,\n    lifeAtCompany: {\n      description: job.life_at_company.description,\n      imageUrl: job.life_at_company.image_url,\n    },\n    skills: job.skills.map((skill) => ({\n      name: skill.name,\n      imageUrl: skill.image_url,\n    })),\n  });\n\n  getFormattedSimilarJobData = (job) => ({\n    title: job.title,\n    companyLogoUrl: job.company_logo_url,\n    employmentType: job.employment_type,\n    jobDescription: job.job_description,\n    id: job.id,\n    location: job.location,\n    packagePerAnnum: job.package_per_annum,\n    rating: job.rating,\n  });\n\n  getJobData = async () => {\n    const { match } = this.props;\n    const { params } = match;\n    const { id } = params;\n    this.setState({\n      apiStatus: apiStatusConstants.inProgress,\n    });\n    const jwtTokenOld = Cookies.get("jwt_token");\n    const jwtToken = localStorage.getItem("jwt_token");\n    const jobDetailsApiUrl = `https://apis.ccbp.in/jobs/${id}`;\n    const options = {\n      headers: {\n        Authorization: `Bearer ${jwtToken}`,\n      },\n      method: "GET",\n    };\n    const response = await fetch(jobDetailsApiUrl, options);\n    if (response.ok) {\n      const fetchedData = await response.json();\n      const updatedData = this.getFormattedJobDetailsData(\n        fetchedData.job_details\n      );\n      const updatedSimilarJobsData = fetchedData.similar_jobs.map(\n        (eachSimilarJob) => this.getFormattedSimilarJobData(eachSimilarJob)\n      );\n      this.setState({\n        jobData: updatedData,\n        similarJobsData: updatedSimilarJobsData,\n        apiStatus: apiStatusConstants.success,\n      });\n    } else {\n      this.setState({\n        apiStatus: apiStatusConstants.failure,\n      });\n    }\n  };\n\n  renderLoadingView = () => (\n    <div className="loader-container" testid="loader">\n      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />\n    </div>\n  );\n\n  renderFailureView = () => (\n    <div className="job-details-failure-view-container">\n      <img\n        alt="failure view"\n        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"\n        className="failure-view-img"\n      />\n      <h1 className="failure-view-heading">Oops! Something Went Wrong</h1>\n      <p className="failure-view-description">\n        We cannot seem to find the page you are looking for.\n      </p>\n      <button type="button" className="retry-button" onClick={this.getJobData}>\n        Retry\n      </button>\n    </div>\n  );\n\n  renderSimilarJobList = () => {\n    const { similarJobsData } = this.state;\n\n    return (\n      <>\n        <h1 className="similar-jobs-heading">Similar Jobs</h1>\n        <ul className="similar-jobs-list">\n          {similarJobsData.map((eachSimilarJob) => (\n            <SimilarJobItem\n              jobDetails={eachSimilarJob}\n              key={eachSimilarJob.id}\n            />\n          ))}\n        </ul>\n      </>\n    );\n  };\n\n  renderJobItemDetails = () => {\n    const { jobData } = this.state;\n    const {\n      companyLogoUrl,\n      title,\n      rating,\n      location,\n      employmentType,\n      packagePerAnnum,\n      jobDescription,\n      lifeAtCompany,\n      skills,\n      companyWebsiteUrl,\n    } = jobData;\n    const { description, imageUrl } = lifeAtCompany;\n    return (\n      <>\n        <div className="job-details-container">\n          <div className="job-intro-container">\n            <img\n              src={companyLogoUrl}\n              alt="job details company logo"\n              className="company-logo"\n            />\n            <div>\n              <h1 className="title">{title}</h1>\n              <div className="rating-container">\n                <BsFillStarFill className="star" />\n                <p className="rating">{rating}</p>\n              </div>\n            </div>\n          </div>\n          <div className="location-and-package-container">\n            <div className="location-type-container">\n              <div className="location-container">\n                <MdLocationOn className="location-icon" />\n                <p className="location">{location}</p>\n              </div>\n              <div className="employment-type-container">\n                <BsBriefcaseFill className="employment-type-icon" />\n                <p className="employment-type">{employmentType}</p>\n              </div>\n            </div>\n            <p className="package">{packagePerAnnum}</p>\n          </div>\n          <hr className="horizontal-line" />\n          <div className="description-and-visit-website-container">\n            <h1 className="job-detail-description-heading">Description</h1>\n            <a\n              href={companyWebsiteUrl}\n              rel="noreferrer"\n              target="_blank"\n              className="website-link"\n            >\n              <p className="visit">Visit</p>\n              <FiExternalLink className="external-link-icon" />\n            </a>\n          </div>\n          <p className="job-detail-description">{jobDescription}</p>\n          <h1 className="skills-heading">Skills</h1>\n          <ul className="skills-list">\n            {skills.map((eachSkill) => (\n              <li className="skill-item" key={eachSkill.name}>\n                <img\n                  src={eachSkill.imageUrl}\n                  alt={eachSkill.name}\n                  className="skill-image"\n                />\n                <p className="skill">{eachSkill.name}</p>\n              </li>\n            ))}\n          </ul>\n          <h1 className="life-at-company-heading">Life at Company</h1>\n          <div className="life-at-company-container">\n            <p className="life-at-company-description">{description}</p>\n            <img\n              src={imageUrl}\n              alt="life at company"\n              className="life-at-company-image"\n            />\n          </div>\n        </div>\n        {this.renderSimilarJobList()}\n      </>\n    );\n  };\n\n  renderApiStatusView = () => {\n    const { apiStatus } = this.state;\n    switch (apiStatus) {\n      case apiStatusConstants.success:\n        return this.renderJobItemDetails();\n      case apiStatusConstants.failure:\n        return this.renderFailureView();\n      case apiStatusConstants.inProgress:\n        return this.renderLoadingView();\n      default:\n        return null;\n    }\n  };\n\n  render() {\n    return (\n      <div className="job-item-details-container">\n        <Header />\n        <div className="job-item-details">\n          <div className="job-item-responsive-container">\n            {this.renderApiStatusView()}\n          </div>\n        </div>\n      </div>\n    );\n  }\n}\n\nexport default JobItemDetails;\n',
  },
  "/src/components/JobItemDetails/index.css": {
    code: ".job-item-details-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.job-item-details {\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  background-color: #000000;\n}\n\n.job-item-responsive-container {\n  width: 90%;\n  margin-top: 32px;\n  margin-bottom: 32px;\n  max-width: 458px;\n}\n\n@media screen and (min-width: 768px) {\n  .job-item-responsive-container {\n    margin-top: 64px;\n    margin-bottom: 32px;\n    max-width: 1110px;\n  }\n}\n\n.job-details-container {\n  background-color: #272727;\n  border-radius: 16px;\n  list-style: none;\n  margin-bottom: 32px;\n  padding-top: 24px;\n  padding-right: 12px;\n  padding-bottom: 24px;\n  padding-left: 12px;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.02);\n}\n\n@media screen and (min-width: 768px) {\n  .job-details-container {\n    margin-bottom: 64px;\n    padding-top: 48px;\n    padding-right: 32px;\n    padding-bottom: 64px;\n    padding-left: 32px;\n  }\n}\n\n.description-and-visit-website-container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 16px;\n}\n\n@media screen and (min-width: 768px) {\n  .description-and-visit-website-container {\n    margin-top: 24px;\n  }\n}\n\n.job-detail-description-heading {\n  color: #ffffff;\n  font-family: 'Roboto';\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.42;\n}\n\n@media screen and (min-width: 768px) {\n  .job-detail-description-heading {\n    font-size: 30px;\n    line-height: 1.33;\n    margin: 0px;\n  }\n}\n\n.website-link {\n  display: flex;\n  align-items: center;\n  color: #818cf8;\n  text-decoration: none;\n}\n\n.visit {\n  font-family: 'Roboto';\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.4;\n  margin: 0px;\n}\n\n@media screen and (min-width: 768px) {\n  .visit {\n    font-size: 20px;\n    line-height: 1.7;\n  }\n}\n\n.external-link-icon {\n  width: 12px;\n  height: 12px;\n  margin-left: 6px;\n}\n\n@media screen and (min-width: 768px) {\n  .external-link-icon {\n    width: 20px;\n    height: 20px;\n  }\n}\n\n.job-detail-description {\n  color: #ffffff;\n  font-family: 'Roboto';\n  font-size: 14px;\n  line-height: 1.7;\n  margin: 0px;\n  margin-top: 16px;\n}\n\n@media screen and (min-width: 768px) {\n  .job-detail-description {\n    font-size: 20px;\n    margin-top: 32px;\n  }\n}\n\n.skills-heading {\n  color: #f8fafc;\n  font-family: 'Roboto';\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.42;\n  margin: 0px;\n  margin-top: 16px;\n}\n\n@media screen and (min-width: 768px) {\n  .skills-heading {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 1.66;\n    margin-top: 32px;\n  }\n}\n\n.skills-list {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-top: 24px;\n  margin-bottom: 0px;\n  padding-left: 0;\n}\n\n@media screen and (min-width: 768px) {\n  .skills-list {\n    margin-bottom: 16px;\n  }\n}\n\n.skill-item {\n  display: flex;\n  align-items: center;\n  width: 45%;\n  list-style: none;\n  margin-bottom: 24px;\n}\n\n@media screen and (min-width: 768px) {\n  .skill-item {\n    width: 33%;\n    margin-bottom: 48px;\n  }\n}\n\n.skill-image {\n  width: 24px;\n  height: 24px;\n  margin-right: 12px;\n}\n\n@media screen and (min-width: 768px) {\n  .skill-image {\n    width: 48px;\n    height: 48px;\n    margin-right: 16px;\n  }\n}\n\n.skill {\n  color: #f8fafc;\n  font-family: 'Roboto';\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.71;\n}\n\n@media screen and (min-width: 768px) {\n  .skill {\n    font-size: 16px;\n    line-height: 1.75;\n  }\n}\n\n.life-at-company-heading {\n  color: #ffffff;\n  font-family: 'Roboto';\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.42;\n  margin: 0px;\n  margin-bottom: 12px;\n}\n\n@media screen and (min-width: 768px) {\n  .life-at-company-heading {\n    font-weight: 600;\n    font-size: 24px;\n    line-height: 1.33;\n    margin-bottom: 16px;\n  }\n}\n\n.life-at-company-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n@media screen and (min-width: 768px) {\n  .life-at-company-container {\n    flex-direction: row;\n    justify-content: space-between;\n  }\n}\n\n.life-at-company-description {\n  color: #f8fafc;\n  font-family: 'Roboto';\n  font-size: 14px;\n  line-height: 1.71;\n  width: 100%;\n  margin: 0px;\n  margin-bottom: 12px;\n}\n\n@media screen and (min-width: 768px) {\n  .life-at-company-description {\n    font-size: 20px;\n    line-height: 1.66;\n    width: 60%;\n    margin-bottom: 0px;\n  }\n}\n\n.life-at-company-image {\n  width: 100%;\n  height: 189px;\n  border-radius: 3px;\n}\n\n@media screen and (min-width: 768px) {\n  .life-at-company-image {\n    height: 282px;\n    width: 35%;\n    border-radius: 4px;\n    max-width: 400px;\n  }\n}\n\n.job-details-failure-view-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.similar-jobs-heading {\n  color: #ffffff;\n  font-family: 'Roboto';\n  font-weight: 500;\n  font-size: 24px;\n  line-height: 1.16;\n  margin: 0px;\n}\n\n@media screen and (min-width: 768px) {\n  .similar-jobs-heading {\n    font-weight: 600;\n    font-size: 30px;\n    line-height: 1.22;\n  }\n}\n\n.similar-jobs-list {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0px;\n  padding: 0px;\n}\n",
  },
  "/src/components/Jobs/index.js": {
    code: 'import { Component } from "react";\nimport Loader from "react-loader-spinner";\nimport Cookies from "js-cookie";\n\nimport FiltersGroup from "../FiltersGroup";\nimport JobsHeader from "../JobsHeader";\nimport Header from "../Header";\nimport JobItem from "../JobItem";\nimport Profile from "../Profile";\n\nimport "./index.css";\n\nconst employmentTypesList = [\n  {\n    label: "Full Time",\n    employmentTypeId: "FULLTIME",\n  },\n  {\n    label: "Part Time",\n    employmentTypeId: "PARTTIME",\n  },\n  {\n    label: "Freelance",\n    employmentTypeId: "FREELANCE",\n  },\n  {\n    label: "Internship",\n    employmentTypeId: "INTERNSHIP",\n  },\n];\n\nconst salaryRangesList = [\n  {\n    salaryRangeId: "1000000",\n    label: "10 LPA and above",\n  },\n  {\n    salaryRangeId: "2000000",\n    label: "20 LPA and above",\n  },\n  {\n    salaryRangeId: "3000000",\n    label: "30 LPA and above",\n  },\n  {\n    salaryRangeId: "4000000",\n    label: "40 LPA and above",\n  },\n];\n\nconst apiStatusConstants = {\n  initial: "INITIAL",\n  success: "SUCCESS",\n  failure: "FAILURE",\n  inProgress: "IN_PROGRESS",\n};\n\nclass Jobs extends Component {\n  state = {\n    jobsList: [],\n    apiStatus: apiStatusConstants.initial,\n    activeEmploymentTypeIds: [],\n    searchInput: "",\n    activeSalaryRangeId: "",\n  };\n\n  componentDidMount() {\n    this.getJobs();\n  }\n\n  getJobs = async () => {\n    const { activeEmploymentTypeIds, activeSalaryRangeId, searchInput } =\n      this.state;\n    const employmentType = activeEmploymentTypeIds.join(",");\n    this.setState({\n      apiStatus: apiStatusConstants.inProgress,\n    });\n    const jwtTokenOld = Cookies.get("jwt_token");\n    const jwtToken = localStorage.getItem("jwt_token");\n    const jobsApiUrl = `https://apis.ccbp.in/jobs?employment_type=${employmentType}&minimum_package=${activeSalaryRangeId}&search=${searchInput}`;\n    const options = {\n      headers: {\n        Authorization: `Bearer ${jwtToken}`,\n      },\n      method: "GET",\n    };\n    const response = await fetch(jobsApiUrl, options);\n    if (response.ok) {\n      const fetchedData = await response.json();\n      const updatedData = fetchedData.jobs.map((job) => ({\n        title: job.title,\n        companyLogoUrl: job.company_logo_url,\n        employmentType: job.employment_type,\n        jobDescription: job.job_description,\n        id: job.id,\n        location: job.location,\n        packagePerAnnum: job.package_per_annum,\n        rating: job.rating,\n      }));\n      this.setState({\n        jobsList: updatedData,\n        apiStatus: apiStatusConstants.success,\n      });\n    } else {\n      this.setState({\n        apiStatus: apiStatusConstants.failure,\n      });\n    }\n  };\n\n  changeSalaryRange = (activeSalaryRangeId) => {\n    this.setState({ activeSalaryRangeId }, this.getJobs);\n  };\n\n  changeEmploymentType = (checked, employmentTypeId) => {\n    if (checked) {\n      this.setState(\n        (prevState) => ({\n          activeEmploymentTypeIds: [\n            ...prevState.activeEmploymentTypeIds,\n            employmentTypeId,\n          ],\n        }),\n        this.getJobs\n      );\n    } else {\n      this.setState(\n        (prevState) => ({\n          activeEmploymentTypeIds: prevState.activeEmploymentTypeIds.filter(\n            (eachEmploymentTypeId) => eachEmploymentTypeId !== employmentTypeId\n          ),\n        }),\n        this.getJobs\n      );\n    }\n  };\n\n  enterSearchInput = () => {\n    this.getJobs();\n  };\n\n  changeSearchInput = (searchInput) => {\n    this.setState({ searchInput });\n  };\n\n  renderLoadingView = () => (\n    <div className="loader-container" testid="loader">\n      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />\n    </div>\n  );\n\n  renderFailureView = () => (\n    <div className="failure-view-container">\n      <img\n        alt="failure view"\n        src="https://assets.ccbp.in/frontend/react-js/failure-img.png"\n        className="failure-view-img"\n      />\n      <h1 className="failure-view-heading">Oops! Something Went Wrong</h1>\n      <p className="failure-view-description">\n        We cannot seem to find the page you are looking for.\n      </p>\n      <button type="button" className="retry-button" onClick={this.getJobs}>\n        Retry\n      </button>\n    </div>\n  );\n\n  renderNoJobsView = () => (\n    <div className="jobs-not-found-container">\n      <img\n        alt="no jobs"\n        src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"\n        className="jobs-not-found-img"\n      />\n      <h1 className="jobs-not-found-heading">No Jobs Found</h1>\n      <p className="jobs-not-found-description">\n        We could not find any jobs. Try other filters.\n      </p>\n    </div>\n  );\n\n  renderJobsList = () => {\n    const { jobsList } = this.state;\n\n    return jobsList.length === 0 ? (\n      this.renderNoJobsView()\n    ) : (\n      <ul className="jobs-list">\n        {jobsList.map((job) => (\n          <JobItem jobData={job} key={job.id} />\n        ))}\n      </ul>\n    );\n  };\n\n  renderJobs = () => {\n    const { apiStatus } = this.state;\n    switch (apiStatus) {\n      case apiStatusConstants.success:\n        return this.renderJobsList();\n      case apiStatusConstants.failure:\n        return this.renderFailureView();\n      case apiStatusConstants.inProgress:\n        return this.renderLoadingView();\n      default:\n        return null;\n    }\n  };\n\n  render() {\n    const { searchInput } = this.state;\n\n    return (\n      <div className="jobs-container">\n        <Header />\n        <div className="jobs">\n          <div className="jobs-responsive-container">\n            <div className="search-bar-mobile">\n              <JobsHeader\n                enterSearchInput={this.enterSearchInput}\n                changeSearchInput={this.changeSearchInput}\n                searchInput={searchInput}\n              />\n            </div>\n            <div className="profile-and-filters-container">\n              <Profile />\n              <hr className="horizontal-line" />\n              <FiltersGroup\n                employmentTypesList={employmentTypesList}\n                salaryRangesList={salaryRangesList}\n                changeEmploymentType={this.changeEmploymentType}\n                changeSalaryRange={this.changeSalaryRange}\n              />\n            </div>\n            <div className="jobs-list-container">\n              <div className="desktop-search-bar">\n                <JobsHeader\n                  enterSearchInput={this.enterSearchInput}\n                  changeSearchInput={this.changeSearchInput}\n                  searchInput={searchInput}\n                />\n              </div>\n              {this.renderJobs()}\n            </div>\n          </div>\n        </div>\n      </div>\n    );\n  }\n}\n\nexport default Jobs;\n',
  },
  "/src/components/Jobs/index.css": {
    code: ".jobs-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.jobs {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #000000;\n}\n\n@media screen and (min-width: 768px) {\n  .jobs {\n    flex-direction: row;\n    justify-content: center;\n    align-items: flex-start;\n  }\n}\n\n.jobs-responsive-container {\n  display: flex;\n  flex-direction: column;\n  width: 90%;\n  margin-bottom: 32px;\n  max-width: 458px;\n}\n\n@media screen and (min-width: 768px) {\n  .jobs-responsive-container {\n    flex-direction: row;\n    margin-top: 32px;\n    max-width: 1110px;\n  }\n}\n\n.search-bar-mobile {\n  margin-bottom: 24px;\n}\n\n@media screen and (min-width: 768px) {\n  .search-bar-mobile {\n    display: none;\n  }\n}\n\n.profile-and-filters-container {\n  width: 100%;\n}\n\n@media screen and (min-width: 768px) {\n  .profile-and-filters-container {\n    width: 25%;\n    margin-right: 32px;\n    max-width: 280px;\n    min-width: 256px;\n  }\n}\n\n.jobs-list-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n@media screen and (min-width: 768px) {\n  .jobs-list-container {\n    width: 75%;\n  }\n}\n\n.desktop-search-bar {\n  display: none;\n}\n\n@media screen and (min-width: 768px) {\n  .desktop-search-bar {\n    display: block;\n  }\n}\n\n.loader-container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n}\n\n.jobs-list {\n  margin-top: 24px;\n  padding: 0px;\n}\n\n@media screen and (min-width: 768px) {\n  .jobs-list {\n    margin-top: 32px;\n  }\n}\n\n.jobs-not-found-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  margin-top: 24px;\n}\n\n@media screen and (min-width: 768px) {\n  .jobs-not-found-container {\n    margin-top: 0px;\n  }\n}\n\n.jobs-not-found-img {\n  width: 328px;\n}\n\n@media screen and (min-width: 768px) {\n  .jobs-not-found-img {\n    width: 475px;\n  }\n}\n\n@media screen and (min-width: 768px) {\n  .failure-view-heading {\n    font-weight: 500;\n    font-size: 36px;\n    line-height: 1.2;\n  }\n}\n\n.jobs-not-found-heading {\n  color: #f8fafc;\n  font-weight: 500;\n  font-size: 16px;\n  font-family: 'Roboto';\n  line-height: 1.5;\n  margin: 0px;\n  margin-top: 32px;\n}\n\n@media screen and (min-width: 768px) {\n  .jobs-not-found-heading {\n    font-weight: 500;\n    font-size: 36px;\n    line-height: 1.2;\n  }\n}\n\n.jobs-not-found-description {\n  color: #cbd5e1;\n  font-family: 'Roboto';\n  font-size: 12px;\n  line-height: 1.33;\n  margin-top: 16px;\n}\n\n@media screen and (max-width: 768px) {\n  .jobs-not-found-description {\n    text-align: center;\n    font-size: 16px;\n    line-height: 1.75;\n    width: 241px;\n    margin-top: 6px;\n  }\n}\n\n.failure-view-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 100%;\n  margin-top: 24px;\n}\n\n@media screen and (min-width: 768px) {\n  .failure-view-container {\n    margin-top: 0px;\n  }\n}\n\n.failure-view-img {\n  width: 328px;\n}\n\n@media screen and (min-width: 768px) {\n  .failure-view-img {\n    width: 475px;\n  }\n}\n\n.failure-view-heading {\n  color: #f8fafc;\n  font-weight: 500;\n  font-size: 16px;\n  font-family: 'Roboto';\n  line-height: 1.5;\n  margin: 0px;\n  margin-top: 32px;\n}\n\n@media screen and (min-width: 768px) {\n  .failure-view-heading {\n    font-weight: 500;\n    font-size: 36px;\n    line-height: 1.2;\n  }\n}\n\n.failure-view-description {\n  color: #cbd5e1;\n  font-family: 'Roboto';\n  font-size: 12px;\n  line-height: 1.33;\n  margin-top: 16px;\n}\n\n@media screen and (max-width: 768px) {\n  .failure-view-description {\n    text-align: center;\n    font-size: 16px;\n    line-height: 1.75;\n    width: 241px;\n    margin-top: 6px;\n  }\n}\n\n.retry-button {\n  color: #ffffff;\n  background-color: #4f46e5;\n  font-weight: 600;\n  font-family: 'Roboto';\n  font-size: 12px;\n  line-height: 1.33;\n  border: none;\n  border-radius: 4px;\n  padding-top: 12px;\n  padding-right: 32px;\n  padding-bottom: 12px;\n  padding-left: 32px;\n  outline: none;\n  cursor: pointer;\n}\n",
  },
  "/src/components/JobsHeader/index.js": {
    code: 'import {BsSearch} from \'react-icons/bs\'\n\nimport \'./index.css\'\n\nconst FindJobsHeader = props => {\n  const {searchInput} = props\n  const onSearch = () => {\n    const {enterSearchInput} = props\n    enterSearchInput()\n  }\n\n  const onChangeSearchInput = event => {\n    const {changeSearchInput} = props\n    changeSearchInput(event.target.value)\n  }\n\n  return (\n    <div className="jobs-header">\n      <div className="search-input-container">\n        <input\n          value={searchInput}\n          type="search"\n          className="search-input"\n          placeholder="Search"\n          onChange={onChangeSearchInput}\n        />\n        <button\n          type="button"\n          testid="searchButton"\n          className="search-button"\n          onClick={onSearch}\n        >\n          <BsSearch className="search-icon" />\n        </button>\n      </div>\n    </div>\n  )\n}\n\nexport default FindJobsHeader\n',
  },
  "/src/components/JobsHeader/index.css": {
    code: ".jobs-header {\n  display: flex;\n  align-items: center;\n  margin-top: 32px;\n}\n\n@media screen and (min-width: 768px) {\n  .jobs-header {\n    margin-top: 0px;\n  }\n}\n\n.search-input-container {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  height: 40px;\n  border: 1px solid #64748b;\n  border-radius: 4px;\n}\n\n@media screen and (min-width: 768px) {\n  .search-input-container {\n    width: 60%;\n    min-width: 300px;\n    max-width: 404px;\n  }\n}\n\n.search-input {\n  flex-grow: 1;\n  color: #f8fafc;\n  background-color: transparent;\n  font-family: 'Roboto';\n  font-size: 16px;\n  font-weight: 500;\n  margin-top: 8px;\n  margin-right: 16px;\n  margin-bottom: 8px;\n  margin-left: 16px;\n  border: none;\n  outline: none;\n}\n\n.search-button {\n  background-color: #202020;\n  width: 15%;\n  height: 100%;\n  border: none;\n  border-left: 1px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  outline: none;\n  cursor: pointer;\n}\n\n.search-icon {\n  color: #f8fafc;\n  width: 18px;\n  height: 18px;\n}\n",
  },
  "/src/components/Login/index.css": {
    code: ".login-form-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #121212;\n  height: 100vh;\n}\n\n.form-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: #272727;\n  width: 85%;\n  border-radius: 8px;\n  padding: 24px;\n  max-width: 450px;\n}\n\n@media screen and (min-width: 768px) {\n  .form-container {\n    padding: 48px;\n  }\n}\n\n.login-website-logo {\n  width: 64px;\n  margin-bottom: 12px;\n}\n\n@media screen and (min-width: 768px) {\n  .login-website-logo {\n    width: 162px;\n    margin-bottom: 44px;\n  }\n}\n\n.input-container {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  margin-top: 20px;\n}\n\n.input-label {\n  color: #f8fafc;\n  font-family: 'Roboto';\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 1.4;\n  margin-bottom: 0px;\n}\n\n.input-field {\n  color: #cbd5e1;\n  background-color: #272727;\n  font-size: 14px;\n  height: 40px;\n  border: 1px solid #475569;\n  border-radius: 2px;\n  margin-top: 8px;\n  padding-top: 8px;\n  padding-right: 16px;\n  padding-bottom: 8px;\n  padding-left: 16px;\n  outline: none;\n}\n\n.login-button {\n  color: #ffffff;\n  background-color: #6366f1;\n  font-family: 'Roboto';\n  font-weight: bold;\n  font-size: 14px;\n  width: 100%;\n  height: 40px;\n  border-radius: 8px;\n  border: none;\n  margin-top: 33px;\n  margin-bottom: 2px;\n  outline: none;\n  cursor: pointer;\n}\n\n.error-message {\n  align-self: start;\n  color: #ff0b37;\n  font-size: 12px;\n  font-family: 'Roboto';\n  font-size: 12px;\n  line-height: 1.33;\n  margin-top: 3px;\n  margin-bottom: 0px;\n}\n",
  },
  "/src/components/NotFound/index.js": {
    code: 'import \'./index.css\'\n\nconst NotFound = () => (\n  <div className="not-found-container">\n    <div className="not-found">\n      <div className="not-found-responsive-container">\n        <img\n          src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"\n          alt="not found"\n          className="not-found-img"\n        />\n        <h1 className="not-found-heading">Page Not Found</h1>\n        <p className="not-found-description">\n          We are sorry, the page you requested could not be found\n        </p>\n      </div>\n    </div>\n  </div>\n)\n\nexport default NotFound\n',
  },
  "/src/components/NotFound/index.css": {
    code: ".not-found-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n}\n\n.not-found {\n  flex-grow: 1;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: #000000;\n}\n\n.not-found-responsive-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 90%;\n  max-width: 1110px;\n}\n\n@media screen and (max-width: 768px) {\n  .not-found-responsive-container {\n    justify-content: flex-start;\n    margin-top: 60px;\n    max-width: 458px;\n  }\n}\n\n.not-found-img {\n  width: 328px;\n}\n\n@media screen and (min-width: 768px) {\n  .not-found-img {\n    width: 475px;\n  }\n}\n\n.not-found-heading {\n  color: #f8fafc;\n  font-family: 'Roboto';\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 1.5;\n  margin: 0px;\n  margin-top: 32px;\n}\n\n@media screen and (min-width: 768px) {\n  .not-found-heading {\n    font-weight: 500;\n    font-size: 36px;\n    line-height: 1.22;\n  }\n}\n\n.not-found-description {\n  color: #cbd5e1;\n  font-family: 'Roboto';\n  font-size: 16px;\n  line-height: 1.75;\n  margin-top: 16px;\n}\n\n@media screen and (max-width: 768px) {\n  .not-found-description {\n    text-align: center;\n    font-size: 12px;\n    line-height: 1.33;\n    width: 241px;\n    margin-top: 6px;\n  }\n}\n",
  },
  "/src/components/Profile/index.js": {
    code: 'import { Component } from "react";\nimport Cookies from "js-cookie";\nimport Loader from "react-loader-spinner";\n\nimport "./index.css";\n\nconst apiStatusConstants = {\n  initial: "INITIAL",\n  success: "SUCCESS",\n  failure: "FAILURE",\n  inProgress: "IN_PROGRESS",\n};\n\nclass Profile extends Component {\n  state = {\n    profileData: [],\n    apiStatus: apiStatusConstants.initial,\n  };\n\n  componentDidMount() {\n    this.getProfileData();\n  }\n\n  getProfileData = async () => {\n    this.setState({\n      apiStatus: apiStatusConstants.inProgress,\n    });\n    const jwtTokenOld = Cookies.get("jwt_token");\n    const jwtToken = localStorage.getItem("jwt_token");\n    const profileApiUrl = "https://apis.ccbp.in/profile";\n    const options = {\n      headers: {\n        Authorization: `Bearer ${jwtToken}`,\n      },\n      method: "GET",\n    };\n    const response = await fetch(profileApiUrl, options);\n    if (response.ok === true) {\n      const fetchedData = await response.json();\n      const profile = fetchedData.profile_details;\n      const updatedData = {\n        name: profile.name,\n        profileImageUrl: profile.profile_image_url,\n        shortBio: profile.short_bio,\n      };\n      this.setState({\n        profileData: updatedData,\n        apiStatus: apiStatusConstants.success,\n      });\n    } else {\n      this.setState({\n        apiStatus: apiStatusConstants.failure,\n      });\n    }\n  };\n\n  renderProfile = () => {\n    const { profileData } = this.state;\n    const { profileImageUrl, name, shortBio } = profileData;\n    return (\n      <div className="profile-container">\n        <img src={profileImageUrl} alt="profile" className="profile-img" />\n        <h1 className="profile-name">{name}</h1>\n        <p className="short-bio">{shortBio}</p>\n      </div>\n    );\n  };\n\n  renderProfileFailureView = () => (\n    <div className="profile-failure-view">\n      <button\n        type="button"\n        className="retry-button"\n        onClick={this.getProfileData}\n      >\n        Retry\n      </button>\n    </div>\n  );\n\n  renderLoadingView = () => (\n    <div className="profile-loader-container">\n      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />\n    </div>\n  );\n\n  render() {\n    const { apiStatus } = this.state;\n    switch (apiStatus) {\n      case apiStatusConstants.success:\n        return this.renderProfile();\n      case apiStatusConstants.failure:\n        return this.renderProfileFailureView();\n      case apiStatusConstants.inProgress:\n        return this.renderLoadingView();\n      default:\n        return null;\n    }\n  }\n}\n\nexport default Profile;\n',
  },
  "/src/components/Profile/index.css": {
    code: ".profile-container {\n  display: flex;\n  flex-direction: column;\n  background-image: url('https://assets.ccbp.in/frontend/react-js/profile-bg.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n  border-radius: 16px;\n  margin-bottom: 24px;\n  padding-top: 28px;\n  padding-right: 16px;\n  padding-bottom: 28px;\n  padding-left: 16px;\n  min-height: 196px;\n}\n\n.profile-loader-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 196px;\n}\n\n.profile-img {\n  width: 48px;\n  height: 48px;\n  margin-bottom: 8px;\n}\n\n@media screen and (min-width: 768px) {\n  .profile-img {\n    margin-bottom: 4px;\n  }\n}\n\n.profile-name {\n  color: #6366f1;\n  font-family: 'Roboto';\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.6;\n  margin: 0px;\n  margin-bottom: 12px;\n}\n\n.short-bio {\n  color: #475569;\n  font-family: 'Roboto';\n  font-size: 14px;\n  line-height: 1.71;\n  margin: 0px;\n}\n\n.profile-failure-view {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 196px;\n}\n",
  },
  "/src/components/SimilarJobItem/index.js": {
    code: 'import {BsBriefcaseFill, BsFillStarFill} from \'react-icons/bs\'\nimport {MdLocationOn} from \'react-icons/md\'\n\nimport \'./index.css\'\n\nconst SimilarJobItem = props => {\n  const {jobDetails} = props\n  const {\n    companyLogoUrl,\n    title,\n    jobDescription,\n    location,\n    employmentType,\n    rating,\n  } = jobDetails\n  return (\n    <li className="similar-job-item">\n      <div className="job-intro-container">\n        <img\n          src={companyLogoUrl}\n          alt="similar job company logo"\n          className="company-logo"\n        />\n        <div>\n          <h1 className="title">{title}</h1>\n          <div className="rating-container">\n            <BsFillStarFill className="star" />\n            <p className="rating">{rating}</p>\n          </div>\n        </div>\n      </div>\n      <h1 className="similar-jobs-description-heading">Description</h1>\n      <p className="similar-job-description">{jobDescription}</p>\n      <div className="location-type-container">\n        <div className="location-container">\n          <MdLocationOn className="location-icon" />\n          <p className="location">{location}</p>\n        </div>\n        <div className="employment-type-container">\n          <BsBriefcaseFill className="employment-type-icon" />\n          <p className="employment-type">{employmentType}</p>\n        </div>\n      </div>\n    </li>\n  )\n}\n\nexport default SimilarJobItem\n',
  },
  "/src/components/SimilarJobItem/index.css": {
    code: ".similar-job-item {\n  display: flex;\n  flex-direction: column;\n  background-color: #272727;\n  border-radius: 12px;\n  list-style-type: none;\n  margin-top: 16px;\n  margin-right: 16px;\n  padding-top: 24px;\n  padding-right: 16px;\n  padding-bottom: 24px;\n  padding-left: 16px;\n  min-width: 288px;\n  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.02);\n}\n\n@media screen and (min-width: 768px) {\n  .similar-job-item {\n    border-radius: 16px;\n    width: 30%;\n    margin-top: 32px;\n    margin-right: 32px;\n    padding: 32px;\n    min-width: 316px;\n  }\n}\n\n.similar-jobs-description-heading {\n  color: #ffffff;\n  font-family: 'Roboto';\n  font-weight: 500;\n  font-size: 16px;\n  line-height: 1.5;\n  margin: 0px;\n  margin-top: 8px;\n}\n\n@media screen and (min-width: 768px) {\n  .similar-jobs-description-heading {\n    font-size: 24px;\n    line-height: 1.16;\n  }\n}\n\n.similar-job-description {\n  flex-grow: 1;\n  color: #f8fafc;\n  font-family: 'Roboto';\n  font-size: 14px;\n  line-height: 1.42;\n  margin: 0px;\n  margin-top: 8px;\n  margin-bottom: 16px;\n}\n\n@media screen and (min-width: 768px) {\n  .similar-job-description {\n    font-size: 16px;\n    line-height: 1.75;\n    margin-top: 16px;\n  }\n}\n",
  },
  "/package.json": {
    code: '{\n    "name": "jobby-app",\n    "private": true,\n    "version": "1.0.0",\n    "engines": {\n      "node": "^10.13 || 12 || 14 || 15",\n      "npm": ">=6"\n    },\n    "dependencies": {\n      "@testing-library/jest-dom": "5.11.9",\n      "@testing-library/react": "11.2.5",\n      "@testing-library/user-event": "12.6.2",\n      "chalk": "4.1.0",\n      "history": "5.0.0",\n      "msw": "0.28.1",\n      "js-cookie": "2.2.1",\n      "react": "17.0.1",\n      "react-dom": "17.0.1",\n      "react-icons": "4.2.0",\n      "react-loader-spinner": "4.0.0",\n      "react-router-dom": "5.2.0"\n    },\n    "devDependencies": {\n      "eslint-config-airbnb": "18.2.1",\n      "eslint-config-prettier": "8.1.0",\n      "eslint-plugin-prettier": "3.3.1",\n      "husky": "4.3.8",\n      "lint-staged": "10.5.4",\n      "npm-run-all": "4.1.5",\n      "prettier": "2.2.1",\n      "react-scripts": "4.0.3"\n    },\n    "scripts": {\n      "start": "react-scripts start",\n      "build": "react-scripts build",\n      "test": "react-scripts test",\n      "lint": "eslint .",\n      "lint:fix": "eslint --fix src/",\n      "format": "prettier --write ./src",\n      "run-all": "npm-run-all --parallel test lint:fix"\n    },\n    "lint-staged": {\n      "*.js": [\n        "npm run lint:fix"\n      ],\n      "*.{js, jsx, json, html, css}": [\n        "npm run format"\n      ]\n    },\n    "husky": {\n      "hooks": {\n        "pre-commit": "lint-staged"\n      }\n    },\n    "jest": {\n      "collectCoverageFrom": [\n        "src/**/*.js"\n      ]\n    },\n    "browserslist": {\n      "development": [\n        "last 2 chrome versions",\n        "last 2 firefox versions",\n        "last 2 edge versions"\n      ],\n      "production": [\n        ">1%",\n        "last 4 versions",\n        "Firefox ESR",\n        "not ie < 11"\n      ]\n    }\n  }',
  },
};
