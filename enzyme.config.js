const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

global.window = window;
global.document = window.document;

enzyme.configure({ adapter: new Adapter() });
