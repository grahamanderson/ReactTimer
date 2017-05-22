import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">

        <ul className="menu">
          <li className="menu-text">
            React Timer App
          </li>

          <li>
            <NavLink exact to="/" activeClassName="active-link">Timer</NavLink>
          </li>

          <li>
            <NavLink to="/" activeClassName="active-link">Countdown</NavLink>
          </li>

          <li className="menu-text">
            Created by
            <a href="https://GrahamBling.rocks" target="_blank" rel="noopener noreferrer">
              Graham Anderson
            </a>
          </li>
        </ul>
      </div>

      <div className="top-bar-right"></div>

    </div>
  )
}

// class Navigation extends React.Component {
//
//   constructor(props) {
//     super(props);
//     this.onSearch = this.onSearch.bind(this)
//   }
//
//   onSearch(e){
//     e.preventDefault();
//     alert('Not yet wired up!')
//   }
//
//   render() {
//     return (
//       <div className="top-bar">
//         <div className="top-bar-left">
//           <ul className="menu">
//             <li className="menu-text">React Timer App</li>
//
//             <li>
//               <NavLink exact to="/"
//                 activeClassName="active"
//                 activeStyle={{color:'red'}}>
//                 React Timer App
//               </NavLink>
//             </li>
//
//             <li>
//               <NavLink to="/timer"
//                 activeClassName="active"
//                 activeStyle={{color: 'red'}}>
//                 Timer
//               </NavLink>
//             </li>
//
//             <li>
//               <NavLink to="/countdown"
//                 activeClassName="active"
//                 activeStyle={{color: 'red'}}>
//                 Countdown
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//
//         <div className= "top-bar-right">
//           <form onSubmit={this.onSearch}>
//             <ul className="menu">
//               <li>
//                 <input type="search" placeholder="Search weather"/>
//               </li>
//               <li>
//                 <input type="submit" className="button" value="Get Weather"/>
//               </li>
//             </ul>
//           </form>
//         </div>
//       </div>
//       )
//     }
//   }

export default Navigation;
