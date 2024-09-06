import './App.css'
import ButtonItem from "./components/buttons/ButtonItem.jsx";
import ProductItemTile from "./components/productItemTile/ProductItemTile.jsx";
import ArticleStoryTile from "./components/articleStory/ArticleStoryTile.jsx";

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

        <main className="nav-products">
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
        </main>

          <footer className="story-board">
              <section>
                  <ArticleStoryTile
                      imageUrl="null"
                      title="THE BRAND"
                      paragraph="
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus assumenda autem consequatur enim eveniet facilis fugit magni officia praesentium, ratione soluta unde ut, veniam voluptate! Dolorem dolorum exercitationem ipsam iste, libero maiores nam odit rem rerum, sint sit soluta! Alias animi ipsam, odit repellendus saepe sapiente similique tenetur vel."

                  />
              </section>
              <section>
                  <h1>IMAGE</h1>
                  <ArticleStoryTile
                      imageUrl="src/assets/brand.png"
                      imageAlt={"The brand image"}
                  />
              </section>

              <section>
                  <h1>IMAGE</h1>
                  <ArticleStoryTile
                      imageUrl="src/assets/our_story.png"
                      imageAlt={"Our story image"}
                  />
              </section>
              <section>
                  <ArticleStoryTile
                      imageUrl="null"
                      title="OUR STORY"
                      paragraph="
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusamus assumenda autem consequatur enim eveniet facilis fugit magni officia praesentium, ratione soluta unde ut, veniam voluptate! Dolorem dolorum exercitationem ipsam iste, libero maiores nam odit rem rerum, sint sit soluta! Alias animi ipsam, odit repellendus saepe sapiente similique tenetur vel."

                  />
              </section>


          </footer>
      </>
  )
}

export default App
