# Data-normalization

collection-component
```jsx
import React from "react";
import "./collection.style.scss";
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionItem from "../../components/collection-item/collection-item.component";
const CollectionPage = ({ collection }) => {
  console.log("collection", collection);
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="tile">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage);
```

lets style 
```scss
.collection-item {
  width: 23vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;
  position: relative;
  .image {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
  }
  .custom-button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }
  &:hover {
    .image {
      opacity: 0.8;
    }
    .custom-button {
      opacity: 0.85;
      display: flex;
    }
  }
  .collection-footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .name {
      width: 90%;
      margin-bottom: 15px;
    }
    .price {
      width: 10%;
    }
  }
}
```
direcotory reducer
```js
const INITIAL_STATE = {
  secction: [
    {
      title: "hats",
      imageUrl:
        "https://images.pexels.com/photos/101537/baby-boy-hat-covered-101537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 1,
      linkUrl: "shop/hats"
    },
    {
      title: "jackets",
      imageUrl:
        "https://images.pexels.com/photos/1796102/pexels-photo-1796102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 2,
      linkUrl: "shop/jackets"
    },
    {
      title: "sneakers",
      imageUrl:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      id: 3,
      linkUrl: "shop/sneakers"
    },
    {
      title: "womens",
      imageUrl:
        "https://images.pexels.com/photos/3761026/pexels-photo-3761026.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      size: "large",
      id: 4,
      linkUrl: "shop/womens"
    },
    {
      title: "mens",
      imageUrl:
        "https://images.pexels.com/photos/2897531/pexels-photo-2897531.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      size: "large",
      id: 5,
      linkUrl: "shop/mens"
    }
  ]
};

const DirectoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default DirectoryReducer;
```

shop data
```js
export const SHOP_DATA = {
  hats: {
    id: 1,
    title: "Hats",
    routeName: "hats",
    items: [
      {
        id: 1,
        name: "Brown Brim",
        imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
        price: 25
      },
      {
        id: 2,
        name: "Blue Beanie",
        imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
        price: 18
      },
      {
        id: 3,
        name: "Brown Cowboy",
        imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
        price: 35
      },
      {
        id: 4,
        name: "Grey Brim",
        imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
        price: 25
      },
      {
        id: 5,
        name: "Green Beanie",
        imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
        price: 18
      },
      {
        id: 6,
        name: "Palm Tree Cap",
        imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
        price: 14
      },
      {
        id: 7,
        name: "Red Beanie",
        imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
        price: 18
      },
      {
        id: 8,
        name: "Wolf Cap",
        imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
        price: 14
      },
      {
        id: 9,
        name: "Blue Snapback",
        imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
        price: 16
      }
    ]
  },
  sneakers: {
    id: 2,
    title: "Sneakers",
    routeName: "sneakers",
    items: [
      {
        id: 10,
        name: "Adidas NMD",
        imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
        price: 220
      },
      {
        id: 11,
        name: "Adidas Yeezy",
        imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
        price: 280
      },
      {
        id: 12,
        name: "Black Converse",
        imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
        price: 110
      },
      {
        id: 13,
        name: "Nike White AirForce",
        imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
        price: 160
      },
      {
        id: 14,
        name: "Nike Red High Tops",
        imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
        price: 160
      },
      {
        id: 15,
        name: "Nike Brown High Tops",
        imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
        price: 160
      },
      {
        id: 16,
        name: "Air Jordan Limited",
        imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
        price: 190
      },
      {
        id: 17,
        name: "Timberlands",
        imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
        price: 200
      }
    ]
  },
  jackets: {
    id: 3,
    title: "Jackets",
    routeName: "jackets",
    items: [
      {
        id: 18,
        name: "Black Jean Shearling",
        imageUrl: "https://i.ibb.co/XzcwL5s/black-shearling.png",
        price: 125
      },
      {
        id: 19,
        name: "Blue Jean Jacket",
        imageUrl: "https://i.ibb.co/mJS6vz0/blue-jean-jacket.png",
        price: 90
      },
      {
        id: 20,
        name: "Grey Jean Jacket",
        imageUrl: "https://i.ibb.co/N71k1ML/grey-jean-jacket.png",
        price: 90
      },
      {
        id: 21,
        name: "Brown Shearling",
        imageUrl: "https://i.ibb.co/s96FpdP/brown-shearling.png",
        price: 165
      },
      {
        id: 22,
        name: "Tan Trench",
        imageUrl: "https://i.ibb.co/M6hHc3F/brown-trench.png",
        price: 185
      }
    ]
  },
  womens: {
    id: 4,
    title: "Womens",
    routeName: "womens",
    items: [
      {
        id: 23,
        name: "Blue Tanktop",
        imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
        price: 25
      },
      {
        id: 24,
        name: "Floral Blouse",
        imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
        price: 20
      },
      {
        id: 25,
        name: "Floral Dress",
        imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
        price: 80
      },
      {
        id: 26,
        name: "Red Dots Dress",
        imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
        price: 80
      },
      {
        id: 27,
        name: "Striped Sweater",
        imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
        price: 45
      },
      {
        id: 28,
        name: "Yellow Track Suit",
        imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
        price: 135
      },
      {
        id: 29,
        name: "White Blouse",
        imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
        price: 20
      }
    ]
  },
  mens: {
    id: 5,
    title: "Mens",
    routeName: "mens",
    items: [
      {
        id: 30,
        name: "Camo Down Vest",
        imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
        price: 325
      },
      {
        id: 31,
        name: "Floral T-shirt",
        imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
        price: 20
      },
      {
        id: 32,
        name: "Black & White Longsleeve",
        imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
        price: 25
      },
      {
        id: 33,
        name: "Pink T-shirt",
        imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
        price: 25
      },
      {
        id: 34,
        name: "Jean Long Sleeve",
        imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
        price: 40
      },
      {
        id: 35,
        name: "Burgundy T-shirt",
        imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
        price: 25
      }
    ]
  }
};
```
lets create a shopselelctor
```js
import { createSelector } from "reselect";

const selctShop = state => state.shop;

export const selelctCollections = createSelector(
  [selctShop],
  shop => shop.collections
);

export const selelctCollectionPreviewCollections = createSelector(
  [selelctCollections],
  collections => Object.keys(collections).map(key => collections[key])
);
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selelctCollections],
    collections => collections[collectionUrlParam]
  );
```

add it to the collection overview component

```jsx
import React from "react";
import "./collection-overview.style.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selelctCollectionPreviewCollections } from "../../redux/shop/shop.selector";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

const CollectioOverview = ({ collections }) => {
  return (
    <div className="collection-overview">
      {collections.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview key={id} {...otherCollectionProps} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  collections: selelctCollectionPreviewCollections
});
export default connect(mapStateToProps)(CollectioOverview);
```