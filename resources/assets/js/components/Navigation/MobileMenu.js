import React, { Children } from 'react'
import map from 'lodash/map'
import Transition from 'react-addons-css-transition-group'

function FirstChild(props) {
  const childrenArray = Children.toArray(props.children);
  return childrenArray[0] || null;
}

const MobileMenu = ({isOpen, menu, menuSettings, scroller}) => {
    return(
        <Transition
            transitionName="mobilenav"
            component={FirstChild}
            transitionEnterTimeout={600}
            transitionAppearTimeout={600}
            transitionLeaveTimeout={400}
            transitionAppear={true}>
            {isOpen ?
                <section className="navbar-section">
                    <ul className="navbar-menu">
                        {map(menuSettings, (value, key) =>
                            <li key={key}  className={`navbar-menu-item`}>
                              <a onClick={scroller.bind(this, value.name)}
                                  className={`${menu[value.name] == true ? 'active' : ''}`}
                                  href={`#${value.href.toLowerCase()}`}>
                                  {value.name.replace(/_/g, ' ')}
                              </a>
                            </li>
                        )}
                        <li className="navbar-menu-item">
                          <a className="btn btn-primary btn-lg" href="#">SCHEDULE A MEETING</a>
                        </li>
                    </ul>
                </section>
            : null }
        </Transition>
    )
}

export default MobileMenu
