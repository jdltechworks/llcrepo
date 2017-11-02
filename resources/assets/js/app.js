import { render } from 'react-dom'
import React, { Component } from 'react'
import ClientProvider from './provider/Client'

(function(d, w, c) {
    w.ChatraID = '2kdoqNfQRSGmBBuwc';
    var s = d.createElement('script');
    w[c] = w[c] || function() {
        (w[c].q = w[c].q || []).push(arguments);
    };
    s.async = true;
    s.src = (d.location.protocol === 'https:' ? 'https:': 'http:')
    + '//call.chatra.io/chatra.js';
    if (d.head) d.head.appendChild(s);
})(document, window, 'Chatra');


window.getInitialProps = (props, target) => {
    render(<ClientProvider {...props} />,  document.getElementById(target))
}
