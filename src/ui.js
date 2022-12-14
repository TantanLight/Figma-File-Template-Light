"use strict";
exports.__esModule = true;
var ui_1 = require("@create-figma-plugin/ui");
var utilities_1 = require("@create-figma-plugin/utilities");
var hooks_1 = require("preact/hooks");
function Plugin() {
    var handlePageButtonClick = (0, hooks_1.useCallback)(function () {
        (0, utilities_1.emit)("CREATE_PAGES");
    }, []);
    return (<ui_1.Container style="padding: 0">
      <ui_1.Banner icon={<ui_1.IconMegaphone32 />}>
      Welcome to the Design Toolkit plugin
    </ui_1.Banner>
      <ui_1.Container>
        <ui_1.VerticalSpace space="large"/>
        <ui_1.Text bold>Automations</ui_1.Text>
        <ui_1.VerticalSpace space="medium"/>
        <ui_1.Button fullWidth onClick={handlePageButtonClick}>
          Setup design document
        </ui_1.Button>
        <ui_1.VerticalSpace space="large"/>
      </ui_1.Container>
      <ui_1.Divider />
      <ui_1.Container>
        <ui_1.VerticalSpace space="large"/>
        <ui_1.Stack space="extraLarge">
          <ui_1.Stack space="medium">
            <ui_1.Text bold>Documentation</ui_1.Text>
            <ui_1.Inline space="medium">
              <ui_1.Text>
                <a href="https://github.com/NoWorries/toolkit-figma-plugin" target="_blank">
                  🌐 Storybook
                </a>
              </ui_1.Text>
              <ui_1.Text>
                <a href="https://github.com/NoWorries/toolkit-figma-plugin" target="_blank">
                  🌐 Documentation
                </a>
              </ui_1.Text>
            </ui_1.Inline>
          </ui_1.Stack>
          <ui_1.Stack space="medium">
            <ui_1.Text bold>Design Support</ui_1.Text>
            <ui_1.Inline space="medium">
              <ui_1.Text>
                <a href="https://github.com/NoWorries/toolkit-figma-plugin" target="_blank">
                  🌐 Social channel
                </a>
              </ui_1.Text>
              <ui_1.Text>
                <a href="https://github.com/NoWorries/toolkit-figma-plugin" target="_blank">
                  🌐 Jira
                </a>
              </ui_1.Text>
            </ui_1.Inline>
          </ui_1.Stack>{" "}
        </ui_1.Stack>
      </ui_1.Container>
    </ui_1.Container>);
}
exports["default"] = (0, ui_1.render)(Plugin);
