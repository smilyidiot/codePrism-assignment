// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onClickContent = event => {
        onToggleShowContent(event.target.checked)
      }

      const onClickLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }

      const onClickRightNavbar = event => {
        onToggleShowRightNavbar(event.target.checked)
      }

      return (
        <div className="controller">
          <h1 className="controller-header">Layout</h1>
          <div className="checkbox-container">
            <input
              type="checkbox"
              className="checkbox"
              id="content"
              value="Content"
              onChange={onClickContent}
              defaultChecked
            />
            <label htmlFor="content" className="label">
              Content
            </label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              className="checkbox"
              id="leftNavbar"
              value="left Navbar"
              onChange={onClickLeftNavbar}
              defaultChecked
            />
            <label htmlFor="leftNavbar" className="label">
              Left Navbar
            </label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              className="checkbox"
              id="rightNavbar"
              value="Right Navbar"
              onChange={onClickRightNavbar}
              defaultChecked
            />
            <label htmlFor="rightNavbar" className="label">
              Right Navbar
            </label>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
