import React, { useRef } from 'react';
import logo from './logo.svg';
import './styles/index.scss';
import Button from './components/Button/button';
import useClickOutside from './hooks/useClickOutside';
function App() {
    var ref = useRef(null);
    useClickOutside(ref, function () {
        console.log('不在input框类');
    });
    return (React.createElement("div", { className: "App" },
        React.createElement("header", { className: "App-header" },
            React.createElement("img", { src: logo, className: "App-logo", alt: "logo" }),
            React.createElement(Button, { href: 'ddd', autoFocus: true }, "Hello"),
            React.createElement(Button, { btnType: 'primary', size: 'lg', disabled: true }, "Hello"),
            React.createElement(Button, { btnType: 'link', href: 'http://baidu.com', disabled: true }, "Hello"),
            React.createElement("p", null,
                "Edit ",
                React.createElement("code", null, "src/App.tsx"),
                " and save to reload."),
            React.createElement("input", { type: "text", ref: ref }),
            React.createElement("a", { className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, "Learn React"))));
}
export default App;
