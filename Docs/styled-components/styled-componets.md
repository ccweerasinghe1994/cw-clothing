
# styled componets

lets try the home page

create a homepage.styles.jsx
```jsx
import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  //  y-20 x-80
  padding: 20px 80px;
`;

```
add it to home page
```jsx
import React from "react";

import Directory from "../../components/directory/directory.component";
import { HomePageContainer } from "./homepage.styles";

const HomePAge = () => (
  <HomePageContainer>
    <Directory />
  </HomePageContainer>
);

export default HomePAge;
```


lets do header 