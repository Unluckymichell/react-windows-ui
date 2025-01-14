<p align="center"> 
  <img src="markdown/md_img_header.png" width="405" /> 
</p>

<h1 align="center">react-windows-ui</h1>

<p align="center">Build full featured <b>Windows fluent UI</b> apps using <b>ReactJS</b>.</p>

<p align="center">
	 
  <a href="https://virtualvivek.github.io/react-windows-ui/">
    <img src="https://img.shields.io/circleci/build/github/virtualvivek/react-windows-ui?style=flat-square&logo=circleci&token=346e79ab71a8d9c3bad22bacbebc7d7c50dae520"
      alt="Build" />
  </a>
	
  <a href="https://github.com/virtualvivek/react-windows-ui/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-darklime.svg?style=flat-square&color=blue"
      alt="License: MIT" />
  </a>
  
  <a href="https://github.com/virtualvivek/react-windows-ui/releases">
    <img src="https://img.shields.io/github/package-json/v/virtualvivek/react-windows-ui?color=%2331b57e&style=flat-square"
      alt="Version" />
  </a>
  
  <a href="https://virtualvivek.github.io/react-windows-ui/">
    <img src="https://img.shields.io/badge/Live Demo-Here-green.svg?color=%23c11adb&style=flat-square&logo=github"
      alt="Live Demo" />
  </a>
  
  <a href="https://www.npmjs.com/package/react-windows-ui">
    <img src="https://img.shields.io/badge/npm-package-green.svg?style=flat-square&logo=npm&color=f55a42"
      alt="npmJS" />
  </a>
   
</p>

<p align="center"><img src="markdown/md_img_promo.png" width="652" /></p>

<h1 align="center">Adaptive UI</h1>

<p align="center"><img src="markdown/md_img_adaptive.gif" width="652" /></p>

# Demo ⚡
https://virtualvivek.github.io/react-windows-ui/


# Installation
```ruby
$ npm install react-windows-ui
```

# Getting Started

```js
// Be sure to include styles at some point, probably during your bootstraping
import 'react-windows-ui/config/app-config.css'
import 'react-windows-ui/dist/react-windows-ui.min.css'
import 'react-windows-ui/icons/fonts/fonts.min.css'
```
### app-config

‣ `app-config.css` file contains the `PrimaryColor`, `Fontfamily` used by the app. <br>
‣ You can import default `app-config` using this file <a href="src/lib/config/app-config.css">app-config.css</a>.<br>
_OR_ <br>
Create your own like this

```css
:root {
  --PrimaryColor: #6632a8;  /* Change color you like */
}
body {
  font-family: "Segoe UI";  /* Change fontfamily you like */
}
```

# Usage

```js
import { Button, InputText } from 'react-windows-ui';

const App = () => (
  <>
    <Button type="primary" value="Press Me" />
    <InputText placeholder="Enter a text" />
  </>
);
```
## Run Demo Locally
```css
$ git clone https://github.com/virtualvivek/react-windows-ui.git
$ cd react-windows-ui
$ npm install
$ npm start
```

## ❂ Links

<table>
<thead>
<tr>
  <th align="left">Name</th>
  <th align="left">Details</th>
  <th align="left">Link</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Example Codes</td>
  <td>Components implementation here</td>
  <td><a href="https://github.com/virtualvivek/react-windows-ui/tree/main/src/demo/framework">Example LINK</a></td>
</tr>
<tr>
  <td>Library Source</td>
  <td>Folder publish to <code><b>npm</b></code></td>
  <td><a href="https://github.com/virtualvivek/react-windows-ui/tree/main/src/lib">Library LINK</a></td>
</tr>
<tr>
  <td><img src="https://img.shields.io/badge/SCSS-Default-red.svg?style=for-the-badge&logo=sass&color=CC6699" alt="react-windows-ui.min.scss" /></td>
  <td>Library Styles <code>scss</code> source code</td>
  <td><a href="https://github.com/virtualvivek/react-windows-ui/tree/main/src/source/stylesheet">SCSS LINK</a></td>
</tr>
<tr>
  <td><img src="https://img.shields.io/badge/SCSS-SunValley-red.svg?style=for-the-badge&logo=sass&color=CC6699" alt="react-windows-ui-sunvalley.min.scss" /></td>
  <td>SunValley Styles <code>scss</code> source code</td>
  <td><a href="https://github.com/virtualvivek/react-windows-ui/tree/main/src/source/stylesheet-sunvalley">SCSS LINK</a></td>
</tr>
<tr>
  <td><img src="https://img.shields.io/badge/TS-Typings-red.svg?style=for-the-badge&logo=typescript&color=3178C6" alt="d.ts" /></td>
  <td>Typescript type definitions import file</td>
  <td><a href="https://github.com/virtualvivek/react-windows-ui/blob/main/src/lib/index.d.ts">D.TS LINK</a></td>
</tr>
</tbody>
</table>

---

<a href="https://www.npmjs.com/package/react-windows-ui">
  <img src="https://img.shields.io/badge/package-npm-red.svg?style=for-the-badge&logo=npm&color=f55a42" alt="npmJS" />
</a><br/>


# Find this library useful? :heart:
Support it by joining [**stargazers**](https://github.com/virtualvivek/react-windows-ui/stargazers) for this repository. :star:



# License

**`react-windows-ui`** is licensed under `MIT license`. View [license](https://github.com/virtualvivek/react-windows-ui/blob/main/LICENSE).<br>
Copyright (c) 2021 [**Vivek Verma**](https://github.com/virtualvivek)
