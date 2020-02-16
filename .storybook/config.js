import { configure } from "@storybook/react"
global.__PATH_PREFIX__ = ""
// window.___push was renamed to window.___navigate, has to do this renaming too or storybook would error on clicking links
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}
import "!style-loader!css-loader!sass-loader!../src/styles/global.scss"
// automatically import all files ending in *.stories.js
configure(require.context("../stories", true, /\.stories\.js$/), module)
