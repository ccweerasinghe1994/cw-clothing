# **Create a React App**

```
npmx create-react-app cwclothing
```
## **Remove Unnecessary files**

### in `index.js` file

```javascript

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

```

```html
  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
```

## Creating Home Page
```jsx harmony
import React from "react";

const HomePAge = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>
                        Hats
                    </h1>
                    <span className='subtitle'>
                        SHOP NOW
                    </span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>
                        JAckets
                    </h1>
                    <span className='subtitle'>
                        SHOP NOW
                    </span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>
                        Sneakers
                    </h1>
                    <span className='subtitle'>
                        SHOP NOW
                    </span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>
                        Women's
                    </h1>
                    <span className='subtitle'>
                        SHOP NOW
                    </span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>
                        Mans
                    </h1>
                    <span className='subtitle'>
                        SHOP NOW
                    </span>
                </div>
            </div>
        </div>
    </div>
)

export default HomePAge;
```