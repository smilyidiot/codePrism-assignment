import React from 'react'

const ConfigurationContext = React.createContext({
  showContent: true,
  showLeftNavbar: true,
  showRightNavbar: true,
  onToggleShowContent: () => {},
  onToggleShowLeftNavbar: () => {},
  onToggleShowRightNavbar: () => {},
})

export default ConfigurationContext

// import ConfigurationContext from './context/ConfigurationContext'

// import ConfigurationController from './components/ConfigurationController'

// import Layout from './components/Layout'

// import './App.css'

// class App extends Component {
//   state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

//   onToggleShowContent = visible => {
//     if (visible) {
//       this.setState({showContent: true})
//     } else {
//       this.setState({showContent: false})
//     }
//   }

//   onToggleShowLeftNavbar = visible => {
//     if (visible) {
//       this.setState({showLeftNavbar: true})
//     } else {
//       this.setState({showLeftNavbar: false})
//     }
//   }

//   onToggleShowRightNavbar = visible => {
//     if (visible) {
//       this.setState({showRightNavbar: true})
//     } else {
//       this.setState({showRightNavbar: false})
//     }
//   }

//   render() {
//     const {showContent, showLeftNavbar, showRightNavbar} = this.state
//     return (
//       <ConfigurationContext.Provider
//         value={{
//           showContent,
//           showLeftNavbar,
//           showRightNavbar,
//           onToggleShowContent: this.onToggleShowContent,
//           onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
//           onToggleShowRightNavbar: this.onToggleShowRightNavbar,
//         }}
//       >
//         <ConfigurationController />
//         <Layout />
//       </ConfigurationContext.Provider>
//     )
//   }
// }
