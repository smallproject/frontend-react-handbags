import './App.css'
import ButtonItem from "./components/buttons/ButtonItem.jsx";
import ProductItemTile from "./components/productItemTile/ProductItemTile.jsx";

function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>

        <nav className="nav-buttons">
          <ButtonItem
              className={"button-header"}
              title = {"to the collection"}
              targetUrl = {"www.google.com"}
          />
          <ButtonItem
              className={"button-header"}
              title = {"shop all bags"}
              targetUrl = {"www.facebook.com"}
          />
          <ButtonItem
              className={"button-header"}
              title = {"pre-orders"}
              targetUrl = {"www.youtube.com"}
          />
        </nav>

        <nav className="nav-products">
            <ProductItemTile
                imageUrl = "src/assets/bag_1.png"
                title = "The handy bag"
                price = "€400,-"
                tag = "Best seller"
            />
            <ProductItemTile
                imageUrl = "src/assets/bag_2.png"
                title = "The stylish bag"
                price = "€250,-"
                tag = "Best seller"
            />
            <ProductItemTile
                imageUrl = "src/assets/bag_3.png"
                title = "The simple bag"
                price = "€300,-"
                tag = "New collection"
            />
            <ProductItemTile
                imageUrl = "src/assets/bag_4.png"
                title = "The trendy bag"
                price = "€150,-"
                tag = "New collection"
            />
        </nav>

        <div className="story-board">

        </div>
      </>
  )
}

export default App
