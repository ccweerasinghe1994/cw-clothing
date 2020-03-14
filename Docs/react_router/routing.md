# **React Routing**

## **Adding react routing the project**

```

npm i react-router-dom

```

got to `index.js` and import this

```jsx

import {BrowserRouter} from 'react-router-dom';

```

the wrap it around the app component in App.js

```jsx

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

```
import Route in App.js file

```jsx
import {Route} from 'react-router-dom'
```

create a temperary component to demonstrate routing

```jsx
const Hats = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};
```

Route in use

```jsx
import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import { Route } from "react-router-dom";

const Hats = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
     <Route exact  path='/' component ={HomePage} />
     <Route  path='/hats' component ={Hats} />
    </div>
  );
}

export default App;

```
**`exact` means path has to match exactly**

**`path` means the url**

**`component` is the component that needs to be rendered**

Adding Swith to get more controll over routing 

```jsx

import React from "react";
import HomePage from "./pages/homepage/homepage.component";
import "./App.css";
import { Route, Switch } from "react-router-dom";

const Hats = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={Hats} />
      </Switch>
    </div>
  );
}

export default App;

```
 

 # **Routing Example Seperate**
code setup

 ```jsx

 import React from "react";
import "./styles.css";
import { Route } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};
const TopicsList = () => {
  return (
    <div>
      <h1>Topics List Page</h1>
    </div>
  );
};
const TopicDetail = () => {
  return (
    <div>
      <h1>Topic Detail Page</h1>
    </div>json

    
  );
};

export default function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/topics" component={TopicsList} />
      <Route exact path="/topics/:topicId" component={TopicDetail} />
    </div>
  );
}

```

there are three properties passed into a Component Rendered by a Component

lets see what are those components

```js
Object {history: Object, location: Object, match: Object, staticContext: undefined}
history: Object
length: 1
action: "POP"
location: Object
createHref: function createHref() {}
push: function push() {}
replace: function replace() {}
go: function go() {}
goBack: function goBack() {}
goForward: function goForward() {}
block: function block() {}
listen: function listen() {}
location: Object
pathname: "/"
search: ""
hash: ""
state: undefined
match: Object
path: "/"
url: "/"
isExact: true
params: Object
staticContext: undefined

```

1. history
1. location
1. match

lets look at `match`

url
```jsx

 <Route  path="/" component={HomePage} />

 ```
 ```

 https://q15i7.csb.app/asqawef/sdf

 ```

 let look at math

 ```js
 match: Object
path: "/"
url: "/"
isExact: false
params: Object

```

for topics list component
```jsx
match: Object
path: "/topics"
url: "/topics"
isExact: true
params: Object
```
for home page 

```jsx
match: Object
path: "/"
url: "/"
isExact: false
params: Object
```

url perameters
```
https://q15i7.csb.app/topics/2
```

```jsx

match: Object
path: "/topics/:topicId"
url: "/topics/2"
isExact: true
params: Object
topicId: "2"

```

getting access to route params

```jsx
const TopicDetail = (props) => {
  console.log(props)
  return (
    <div>
      <h1>Topic Detail Page:{props.match.params.topicId}</h1>
    </div>
  );
};

```
![](img/1.png)

history object
```
 https://q15i7.csb.app/topics/2
 
 ```

```jsx
history: Object
length: 1
action: "POP"
location: Object
createHref: function createHref() {}
push: function push() {}
replace: function replace() {}
go: function go() {}
goBack: function goBack() {}
goForward: function goForward() {}
block: function block() {}
listen: function listen() {}
```

this is quate complicated we will focus on `push()`

Link Component 

```jsx
import { Route,Link } from "react-router-dom";
```

using `Route`

```jsx

const HomePage = props => {
  console.log(props);
  return (
    <div>
    -----------------------------------
      <Link to="topics">Topics</Link>
    ----------------------------------
      <h1>Home Page</h1>
    </div>
  );
};

```

Using `History` property

```jsx
const HomePage = props => {
  console.log(props);
  return (
    <div>
    ---------------------------------------------------------------------
      <button onClick={()=>props.history.push('/topics')}>Topics</button>
    ---------------------------------------------------------------------  
      <h1>Home Page</h1>
    </div>
  );
};

```

Location prop
this tells the current location
```jsx
location: Object
pathname: "/topics"
search: ""
hash: ""
state: undefined
key: "e4polq"
```

using url for dynamic routing

```jsx
export default function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/blog/asw/topics" component={TopicsList} />
      <Route exact path="/blog/asw/topics/:topicId" component={TopicDetail} />
    </div>
  );
}
```

by using `props.match.url` we can get the current url

```jsx

const TopicsList = props => {
  console.log(props);
  return (
    <div>
      <Link to={`${props.match.url}/13`}>TO Topic 13 </Link>
      <Link to={`${props.match.url}/20`}>TO Topic 20 </Link>
      <Link to={`${props.match.url}/15`}>TO Topic 15 </Link>
    </div>
  );
};

```

we can do this

```jsx


export default function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/blog/asw/topics" component={TopicsList} />
      <Route exact path="/blog/asw/topics/:topicId" component={TopicDetail} />
      <Route exact path="/blog/topics/" component={TopicDetail} />
      <Route exact path="/blog/asw/topics/:topicId" component={TopicDetail} />
    </div>
  );
}

```
# **lets Get Back To the Mater Project**

Using `WithRouter` component

With Router Component is a higher order one

in Menu-item component

```jsx

import {withRouter} from 'react-router-dom'

```
```jsx

export default withRouter( MenuItem);

```
on click we are pushing for some url
```jsx
import React from "react";
import "./menu-item.style.scss";
import {withRouter} from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, history, linkUrl }) => (
  ---------------------------------------------------------------------
  <div className={`menu-item ${size}`} onClick={() => history.push()}>
 ----------------------------------------------------------------------- 
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter( MenuItem);

```
to do that  we have this url id dynamycaly generated as well

for now just to hard code we can go to directory component

and add `link url`
```jsx
    {
          title: "hats",
          imageUrl:
            "https://images.pexels.com/photos/101537/baby-boy-hat-covered-101537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
          id: 1,
          -----------------
          linkUrl: "hats"
          -----------------
        },
```


now we goona pass this `link url` to the `MenuItem`

```jsx

render() {
    return (
      <div className="directory-menu">
        {this.state.secction.map(({ title, imageUrl, id, size, linkUrl }) => (
          <MenuItem
            key={id}
            imageUrl={imageUrl}
            title={title}
            size={size}
            ---------------------------
            linkUrl={linkUrl}
            ---------------------------
          />
        ))}
      </div>
    );
  }
}

export default Directory;

````
if those props are matched the value name we can use `...spread operator`


```jsx
  render() {
    return (
      <div className="directory-menu">
        {this.state.secction.map(({ id, ...otherProps }) => (
          <MenuItem key={id} {...otherProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
```

after the implementaion 

```jsx

import React from "react";
import "./menu-item.style.scss";
import {withRouter} from 'react-router-dom'

const MenuItem = ({ title, imageUrl, size, history, linkUrl,match }) => (
  <div className={`menu-item ${size}`} 
  -------------------------------------------------------
  onClick={() => history.push(`${match.url}${linkUrl}`)}
  -------------------------------------------------------
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter( MenuItem);

```