// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showLeftNavbar, showContent, showRightNavbar} = value
      return (
        <>
          <div className="main-container">
            {showLeftNavbar ? (
              <div className="left-container">
                <h1 className="nav-heading">Left Navbar Menu</h1>
                <ul className="item-list">
                  <li className="list-item">Item 1</li>
                  <li className="list-item">Item 2</li>
                  <li className="list-item">Item 3</li>
                  <li className="list-item">Item 4</li>
                </ul>
              </div>
            ) : (
              ''
            )}
            {showContent ? (
              <div className="middle-container">
                <h1 className="middle-heading">Content</h1>
                <p className="middle-para">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            ) : (
              ''
            )}
            {showRightNavbar ? (
              <div className="right-container">
                <h1 className="nav-heading">Right Navbar</h1>
                <div className="item-list">
                  <p className="right-item">Ad 1</p>
                  <p className="right-item">Ad 2</p>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
