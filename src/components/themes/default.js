import { reversePalette } from 'styled-theme/composer'

const theme = {}

theme.palette = {
  primary: ['#000000', '#111111', '#222222'],
  white: ['#fffff', '#eeeeee', '#dddddd'],
}

theme.reversePalette = reversePalette(theme.palette)

theme.fonts = {
  primary: 'Helvetica Neue, Helvetica, Roboto, sans-serif',
  pre: 'Consolas, Liberation Mono, Menlo, Courier, monospace',
  quote: 'Georgia, serif',
}

theme.sizes = {
  maxWidth: '900px',
}

export default theme
