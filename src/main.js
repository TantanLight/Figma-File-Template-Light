"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var utilities_1 = require("@create-figma-plugin/utilities");
function default_1() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            (0, utilities_1.setRelaunchButton)(figma.currentPage, "designToolkit", {
                description: "Useful tools and links"
            });
            (0, utilities_1.once)("CREATE_PAGES", function () {
                // This is the list of pages to create in your document.
                var pages = [
                    { name: "Cover", node: "PAGE", title: "Cover" },
                    {
                        name: "🤔 About",
                        node: "PAGE",
                        title: "About",
                        description: "Project overview"
                    },
                    {
                        name: "💻 Prototype",
                        node: "PAGE",
                        title: "Prototype",
                        description: "Interactive prototype"
                    },
                    {
                        name: "✅ Ready for dev",
                        node: "PAGE",
                        title: "Ready for dev",
                        description: "Approved designs, ready for development"
                    },
                    { name: "--------", node: "PAGE" },
                    {
                        name: "✏️ Copy review",
                        node: "PAGE",
                        title: "Copy review",
                        description: "Content for review and sign off"
                    },
                    {
                        name: "[Date] Design review",
                        node: "PAGE",
                        title: "Design review",
                        description: "[Date]"
                    },
                    {
                        name: "[Date] Feature/component",
                        node: "PAGE",
                        title: "Feature/component",
                        description: "[Date]"
                    },
                    { name: "--------", node: "PAGE" },
                    {
                        name: "💡 Work in progress",
                        node: "PAGE",
                        title: "Work in progress",
                        description: "Explorations and work in progress, not ready for development"
                    },
                    { name: "--------", node: "PAGE" },
                    {
                        name: "🎨 Design research",
                        node: "PAGE",
                        title: "Design research",
                        description: "Collected research artefacts and data from existing resources"
                    },
                    {
                        name: "👩🏽‍💻 User research",
                        node: "PAGE",
                        title: "User research",
                        description: "Generative field research"
                    },
                    {
                        name: "Workshop",
                        node: "PAGE",
                        title: "Workshop",
                        description: "Artefacts for workshop activity"
                    },
                    {
                        name: "Flows",
                        node: "PAGE",
                        title: "Flows",
                        description: "Journey flows and logic"
                    },
                ];
                // Show a notification
                figma.notify("Building template", { timeout: Infinity });
                // Load any custom fonts required for editing text layers.
                // Figma developer console will advise you if you need to include any missing fonts.
                function loadFont() {
                    return __awaiter(this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            figma.loadFontAsync({ family: "Work Sans", style: "Bold" });
                            figma.loadFontAsync({ family: "Open Sans", style: "Regular" });
                            figma.loadFontAsync({ family: "Open Sans", style: "SemiBold" });
                            return [2 /*return*/];
                        });
                    });
                }
                function insertTitle(pageName) {
                    var matchPage = pages.filter(function (page) { return page.name === pageName; })[0];
                    if (matchPage.title == null) {
                        console.error("No title added on: " + matchPage.name);
                    }
                    else {
                        if (pageTitleComponent) {
                            var titleInstance = pageTitleComponent.createInstance();
                            var replaceTitle = titleInstance.findOne(function (n) { return n.name === "pageTitle" && n.type === "TEXT"; });
                            if (replaceTitle && replaceTitle.type === "TEXT") {
                                replaceTitle.characters = matchPage.title;
                            }
                            var replaceDescription = titleInstance.findOne(function (n) { return n.name === "pageDescription" && n.type === "TEXT"; });
                            if (replaceDescription && replaceDescription.type === "TEXT") {
                                replaceDescription.characters = matchPage.description;
                            }
                            figma.viewport.scrollAndZoomIntoView([titleInstance]);
                        }
                    }
                }
                // Setup your components for import into pages
                // Cover component
                var coverComponent = null;
                function getCoverComponent() {
                    return __awaiter(this, void 0, void 0, function () {
                        var coverComponentKey, instance;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    coverComponentKey = "INSERT_COVER_KEY_HERE";
                                    return [4 /*yield*/, figma.importComponentByKeyAsync(coverComponentKey)];
                                case 1:
                                    instance = _a.sent();
                                    coverComponent = instance;
                                    return [2 /*return*/];
                            }
                        });
                    });
                }
                // Title component
                var pageTitleComponent = null;
                function getPageTitleComponent() {
                    return __awaiter(this, void 0, void 0, function () {
                        var pageTitleComponentKey, instance;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    pageTitleComponentKey = "INSERT_TITLE_KEY_HERE";
                                    return [4 /*yield*/, figma.importComponentByKeyAsync(pageTitleComponentKey)];
                                case 1:
                                    instance = _a.sent();
                                    pageTitleComponent = instance;
                                    return [2 /*return*/];
                            }
                        });
                    });
                }
                // Example of a component to be imported
                var exampleComponent = null;
                function getExampleComponent() {
                    return __awaiter(this, void 0, void 0, function () {
                        var exampleComponentKey, instance;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    exampleComponentKey = "INSERT_EXAMPLE_KEY_HERE";
                                    return [4 /*yield*/, figma.importComponentByKeyAsync(exampleComponentKey)];
                                case 1:
                                    instance = _a.sent();
                                    exampleComponent = instance;
                                    return [2 /*return*/];
                            }
                        });
                    });
                }
                // The following section is contained within a Promise, which means it only runs when the above components and fonts are available.
                Promise.all([
                    getCoverComponent(),
                    getPageTitleComponent(),
                    getExampleComponent(),
                    loadFont(),
                ]).then(function () {
                    console.log("%cFonts and components loaded", "color:green");
                    // This forEach loop goes through the list of pages and creates each one using the 'name' values.
                    var createdPages = [];
                    pages.forEach(function (page) {
                        var newPage = figma.createPage();
                        newPage.name = page.name;
                        if (newPage.name !== 'Cover') {
                            figma.currentPage = newPage;
                            insertTitle(page.name);
                        }
                        createdPages.push(newPage); // Inserts the heading component from library if there is a "title" value in your pages array.
                    });
                    console.log("%cPages built", "color:green");
                    // Switch to page called "Cover"
                    var coverPage = createdPages.filter(function (page) { return page.name === "Cover"; })[0];
                    figma.currentPage = coverPage;
                    // Insert Cover component instance
                    if (coverComponent) {
                        var coverInstance = coverComponent.createInstance();
                        // Find the text layer called "Title" and replaces it with the value of titleText.
                        var titleText = "Title";
                        var coverTitle = coverInstance.findOne(function (n) { return n.name === "title" && n.type === "TEXT"; });
                        if (coverTitle && coverTitle.type === "TEXT") {
                            coverTitle.characters = titleText;
                        }
                        // Find the text layer called "description" and replaces it with the value of descriptionText.
                        var descriptionText = "Enter a description for this file.";
                        var coverDescription = coverInstance.findOne(function (n) { return n.name === "description" && n.type === "TEXT"; });
                        if (coverDescription && coverDescription.type === "TEXT") {
                            coverDescription.characters = descriptionText;
                        }
                        // Find the text layer called 'userName' and replaces it with the value of authorName.
                        if (figma.currentUser) {
                            var authorName = figma.currentUser.name;
                            var coverAuthor = coverInstance.findOne(function (n) { return n.name === "userName" && n.type === "TEXT"; });
                            if (coverAuthor && coverAuthor.type === "TEXT") {
                                coverAuthor.characters = authorName;
                            }
                        }
                        // Get the current month and year, if you'd like a date stamp on your cover
                        var monthIndex = new Date().getMonth();
                        var yearIndex = new Date().getFullYear();
                        var month = monthIndex; // 1 for Jan, 2 for Feb
                        var year = yearIndex; // 1 for Jan, 2 for Feb
                        var monthNames = [
                            "January",
                            "February",
                            "March",
                            "April",
                            "May",
                            "June",
                            "July",
                            "August",
                            "September",
                            "October",
                            "November",
                            "December",
                        ];
                        // Find the text layer called 'dateCreated' and replaces it with the month and year.
                        var coverDate = coverInstance.findOne(function (n) { return n.name === "dateCreated" && n.type === "TEXT"; });
                        if (coverDate && coverDate.type === "TEXT") {
                            coverDate.characters = monthNames[month] + " " + year;
                        }
                        // Change the background colour of the cover page, perfect for making a seamless cover image in Figma.
                        // Colours must be converted to RGB format.
                        figma.currentPage.backgrounds = [
                            {
                                type: "SOLID",
                                color: {
                                    r: 1,
                                    g: 1,
                                    b: 1
                                }
                            },
                        ];
                        // Set the page to zoom to fit the cover instance
                        figma.viewport.scrollAndZoomIntoView([coverInstance]);
                        console.log("%cCover inserted", "color:green");
                    }
                    // Insert Example component
                    var pageExample = createdPages.filter(function (page) { return page.name === "🤔 About"; })[0]; // Choose the page to insert component on
                    figma.currentPage = pageExample; // Switch to that page
                    if (exampleComponent) {
                        var exampleInstance = exampleComponent.createInstance(); // Insert the example component
                        exampleInstance.y = 500; // Move it down below the heading
                        var exampleInstanceWidth = 3000; // Define a new width
                        var exampleInstanceHeight = 2000; // Define a new height
                        exampleInstance.resize(exampleInstanceWidth, exampleInstanceHeight); // Resize the component
                        var newSelection = figma.currentPage.findChildren(function (n) { return n.type === "INSTANCE"; });
                        figma.currentPage.selection = newSelection;
                        figma.viewport.scrollAndZoomIntoView(newSelection);
                        figma.currentPage.selection = [];
                    }
                    // Go back to the Cover page
                    figma.currentPage = coverPage;
                    // Remove the initial 'Page 1' that isn't required any longer
                    var initialPage = figma.root.children[0];
                    initialPage.remove();
                    figma.closePlugin("Design Toolkit template applied");
                });
            });
            (0, utilities_1.showUI)({
                width: 320,
                height: 320
            });
            return [2 /*return*/];
        });
    });
}
exports["default"] = default_1;
