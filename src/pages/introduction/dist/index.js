"use strict";
exports.__esModule = true;
exports.Feature = exports.IntroDetail = exports.MainConcept = void 0;
var index_module_css_1 = require("@/styles/introduction/index.module.css");
// import { Link as Scroll } from 'react-scroll'
function getImagePath(filename) {
    return "/images/introduction/" + filename;
}
function MainConcept(props) {
    return (React.createElement("div", { className: index_module_css_1["default"].mainConcept },
        React.createElement("picture", { className: index_module_css_1["default"].mainConceptImg },
            React.createElement("img", { src: getImagePath(props.imgSrc), alt: props.imgAlt })),
        React.createElement("p", { className: index_module_css_1["default"].mainConceptText }, props.text)));
}
exports.MainConcept = MainConcept;
function IntroDetail(props) {
    return (React.createElement("div", null,
        React.createElement("picture", null,
            React.createElement("img", { src: getImagePath(props.imgSrc), alt: props.imgAlt })),
        React.createElement("div", null)));
}
exports.IntroDetail = IntroDetail;
function Feature(props) {
    return (React.createElement("div", { className: index_module_css_1["default"].feature },
        React.createElement("picture", { className: index_module_css_1["default"].featureImg },
            React.createElement("img", { src: getImagePath(props.imgSrc), alt: props.imgAlt })),
        React.createElement("div", null,
            React.createElement("h3", null, props.title),
            React.createElement("p", null, props.text))));
}
exports.Feature = Feature;
function Introduction() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: 'mainVisual' },
            React.createElement("nav", null,
                React.createElement("h1", null, "Service Name"),
                React.createElement("ul", null,
                    React.createElement("li", null),
                    React.createElement("li", null, "\u5229\u70B9"),
                    React.createElement("li", null, "\u5229\u7528\u8005\u306E\u58F0"))),
            React.createElement("div", { className: index_module_css_1["default"].decoration }),
            React.createElement("h2", null, "\u3042\u306A\u305F\u306E\u9B45\u529B\u3092\u6700\u5927\u9650\u5F15\u304D\u51FA\u3059\u3001 \u30AD\u30E3\u30EA\u30A2\u30D7\u30E9\u30C3\u30C8\u30D5\u30A9\u30FC\u30E0\u3002"),
            React.createElement("h3", null, "\u81EA\u5206\u3092\u77E5\u308A\u3001\u672A\u6765\u3092\u5275\u308B\u3002"),
            React.createElement("p", null, "\u3053\u308C\u306F\u5358\u306A\u308B\u30DD\u30FC\u30C8\u30D5\u30A9\u30EA\u30AA\u30B5\u30DD\u30FC\u30C8\u30C4\u30FC\u30EB\u3067\u306F\u3042\u308A\u307E\u305B\u3093\u3002\u3042\u306A\u305F\u306E\u672A\u6765\u3001\u30AD\u30E3\u30EA\u30A2\u3001\u5922\u3092\u5F62\u306B\u3059\u308B\u305F\u3081\u306E\u30DE\u30B8\u30C3\u30AF\u30DC\u30C3\u30AF\u30B9\u3067\u3059\u3002"),
            React.createElement("a", { href: "#" }, "\u4ECA\u3059\u3050\u59CB\u3081\u3088\u3046"),
            React.createElement("div", { className: index_module_css_1["default"].mainConceptWrap },
                React.createElement(MainConcept, { text: 'ありのままに答えることで真のあなたの想いを引き出すことができます。', imgAlt: '', imgSrc: 'mainConcept1.svg' }),
                React.createElement(MainConcept, { text: '道に迷ったなら何度でもここへ帰ってきてください。何度でもお手伝いします。', imgAlt: '', imgSrc: 'mainConcept2.svg' }),
                React.createElement(MainConcept, { text: '自分のキャリアマップがわからないなら、自分を知ることから始めましょう。', imgAlt: '', imgSrc: 'mainConcept3.svg' })),
            React.createElement("h2", null, "\u7F8E\u3057\u3044\u8A00\u8449\u3001\u9B45\u529B\u7684\u306A\u30D5\u30EC\u30FC\u30BA\u3001\u3042\u306A\u305F\u306E\u771F\u306E\u4FA1\u5024\u3092\u5F15\u304D\u51FA\u3059\u30A2\u30C9\u30D0\u30A4\u30B9\u3002\u3059\u3079\u3066\u304C\u3053\u3053\u306B\u3002")),
        React.createElement("div", { id: 'test' },
            React.createElement("p", null, "test")),
        React.createElement("h2", null, "\u3053\u308C\u3089\u306E\u7D20\u6674\u3089\u3057\u3044\u6A5F\u80FD\u304C\u3001\u3072\u3068\u3064\u306B\u3002"),
        React.createElement(Feature, { title: '\u512A\u308C\u305F\u30A2\u30B7\u30B9\u30BF\u30F3\u30C8', text: 'GPT-4\u3092\u642D\u8F09\u3057\u305F\u3001\u512A\u308C\u305FAI\u306B\u3088\u3063\u3066\u3001\u3042\u306A\u305F\u306B\u3042\u3063\u305F\u30D3\u30B8\u30E7\u30F3\u3092\u63D0\u6848\u3059\u308B\u3053\u3068\u304C\u3067\u304D\u307E\u3059\u3002', imgAlt: '', imgSrc: 'feature1.svg' })));
}
exports["default"] = Introduction;
